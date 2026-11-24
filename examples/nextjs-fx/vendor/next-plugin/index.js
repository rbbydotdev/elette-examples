// withEdge: a Next config plugin (like withMDX or withSentry). Wrap your config with it to run
// under edge. It adds two dev-only settings and changes nothing else; a plain `next dev` on a
// laptop is unaffected. This package is copied into the app, so it has no dependencies.

/** The variable the runtime gives its programs: the preview's dev origins, a comma list in Next's
 *  own allowedDevOrigins form. The runtime that serves the preview owns the host; this names none. */
export const EDGE_PREVIEW_DEV_ORIGINS_ENV = "EDGE_PREVIEW_DEV_ORIGINS";

/** The origins the runtime states, in order, each once. Absent variable: none. */
export function previewDevOrigins(env = process.env) {
  const seen = new Set();
  for (const part of String(env[EDGE_PREVIEW_DEV_ORIGINS_ENV] ?? "").split(",")) {
    const origin = part.trim();
    if (origin) seen.add(origin);
  }
  return [...seen];
}

/** How long webpack waits before writing its cache to disk. Next's default is 60 s; a studio
 *  session is often reloaded sooner than that, so the cache was never written. */
export const EDGE_PACK_STORE_IDLE_MS = 2000;

/**
 * Compose edge's dev-time settings into a Next config.
 * - `allowedDevOrigins` gains the origins the runtime states, or Next blocks HMR from the preview
 *   pane. Next checks the bind address (127.0.0.1), never the Host header, so no proxy can add it.
 * - webpack's persistent cache stops compressing and flushes after 2 s. In edge the CPU is one
 *   wasm thread and disk writes are cheap, the opposite of the laptop trade Next tunes for.
 * The pack's own values are kept: origins are unioned, its `webpack` function runs first, and a
 * `compression` or `idleTimeout` it set itself is left alone.
 * @template {object} T
 * @param {T} [nextConfig]
 * @returns {T}
 */
export function withEdge(nextConfig) {
  const config = { ...(nextConfig ?? {}) };

  const declared = Array.isArray(config.allowedDevOrigins) ? config.allowedDevOrigins : [];
  const stated = previewDevOrigins().filter((origin) => !declared.includes(origin));
  config.allowedDevOrigins = stated.length ? declared.concat(stated) : declared;

  const declaredWebpack = typeof config.webpack === "function" ? config.webpack : null;
  config.webpack = function edgePackStore(webpackConfig, ctx) {
    const out = declaredWebpack ? declaredWebpack(webpackConfig, ctx) : webpackConfig;
    const cache = out && out.cache;
    if (cache && cache.type === "filesystem") {
      if (cache.compression === "gzip") cache.compression = false;
      if (cache.idleTimeout === undefined || cache.idleTimeout > EDGE_PACK_STORE_IDLE_MS) {
        cache.idleTimeout = EDGE_PACK_STORE_IDLE_MS;
      }
    }
    return out;
  };

  return config;
}

export default withEdge;
