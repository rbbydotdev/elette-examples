# A Next.js app and fx in a browser tab

A Next.js app as `egg create-app next` makes it (create-next-app with webpack), its versions pinned in `bun.lock`, served by `bun dev`, with the [fx](https://github.com/vercel-labs/fx) coding agent beside it, in [elette](https://elette.dev/): a Linux machine in your browser tab. Nothing is installed on your computer.

**Open it:** https://elette.dev/?import_gh=https://github.com/rbbydotdev/elette-examples/tree/main/examples/nextjs-fx

elette clones this folder into a new project and opens three panes:

| Pane | What it runs |
|---|---|
| server | `bun install --frozen-lockfile`, then `bun dev` |
| fx | `vault run --optional -- fx` (the egg package fx): the coding agent, with your model keys from the vault when you have one; `fx login` signs in |
| preview | the app on port 3000 |

The first start installs the packages, which takes a few minutes. Edit the app in the editor or ask fx to; the dev server reloads the preview.

## Make your own

The panes are files in `.egg/autostart/`, one [XDG autostart](https://specifications.freedesktop.org/autostart-spec/latest/) entry per pane, started in name order:

- A terminal pane: `Terminal=true` and the command in `Exec`.
- A preview pane: `X-Eggshell-Preview=PORT/PATH`.
- A file pane: `X-Eggshell-File=PATH`.

The layout, files, fx and preview side by side with the terminal below, is `.egg/config.json`: arrange the panes, then Views, Save layout writes it.

The packages the panes use are pinned in `.egg/packages` (`egg pkg pack` writes it): the import installs them before any pane starts.
