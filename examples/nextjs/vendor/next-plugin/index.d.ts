/** The variable the runtime gives its programs: the preview's dev origins, a comma list. */
export declare const EDGE_PREVIEW_DEV_ORIGINS_ENV: string;
/** The origins the runtime states, each once; none when the variable is absent. */
export declare function previewDevOrigins(env?: Record<string, string | undefined>): string[];
/** webpack `cache.idleTimeout` (ms) under edge. */
export declare const EDGE_PACK_STORE_IDLE_MS: number;

/** Compose edge's dev-time settings into a Next config: the runtime's preview origins in `allowedDevOrigins`
 *  and webpack's persistent cache tuned for edge. The config's own values are kept. */
export declare function withEdge<T extends object>(nextConfig?: T): T;
export default withEdge;
