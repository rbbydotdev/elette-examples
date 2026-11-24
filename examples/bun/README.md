# A Bun app and pi in a browser tab

A React app made by `bun init --react`, its versions pinned in `bun.lock`, served by `bun dev` (Bun.serve with HTML imports and hot reload), with the [pi](https://www.npmjs.com/package/@earendil-works/pi-coding-agent) coding agent beside it, in [elette](https://elette.dev/): a Linux machine in your browser tab. Nothing is installed on your computer.

**Open it:** https://elette.dev/?import_gh=rbbydotdev/elette-bun-demo

elette clones this repository into a new project and opens three panes:

| Pane | What it runs |
|---|---|
| server | `bun install --frozen-lockfile`, then `bun dev` |
| pi | `vault run --optional -- pi --approve` (the egg package pi, trusting this folder for the run): the coding agent, with your model keys from the vault when you have one |
| preview | the app on port 3000 |

Edit the app in the editor or ask pi to; Bun reloads the page in the preview.

## Make your own

The panes are files in `.egg/autostart/`, one [XDG autostart](https://specifications.freedesktop.org/autostart-spec/latest/) entry per pane, started in name order:

- A terminal pane: `Terminal=true` and the command in `Exec`.
- A preview pane: `X-Eggshell-Preview=PORT/PATH`.
- A file pane: `X-Eggshell-File=PATH`.

The layout, files, pi and preview side by side with the terminal below, is `.egg/config.json`: arrange the panes, then Views, Save layout writes it.

The packages the panes use are pinned in `.egg/packages` (`egg pkg pack` writes it): the import installs them before any pane starts.
