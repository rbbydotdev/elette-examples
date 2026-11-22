# An emdash site and opencode in a browser tab

An [emdash](https://www.npmjs.com/package/create-emdash) blog from elette's emdash template, served by `bun dev`, with opencode beside it, in [elette](https://elette.dev/): a Linux machine in your browser tab. Nothing is installed on your computer.

**Open it:** https://elette.dev/?import_gh=rbbydotdev/elette-emdash-demo

elette clones this repository into a new project and opens three panes:

| Pane | What it runs |
|---|---|
| server | `egg create-app emdash site` the first time (emdash's blog on Node), then `bun dev` in `site/` |
| opencode | `vault run --optional -- opencode`: the coding agent, with your model keys from the vault when you have one |
| preview | the site on port 4321 |

The first start makes the site and installs its packages, which takes a few minutes. Edit the site in the editor or ask opencode to; the dev server reloads the preview.

## Make your own

The panes are files in `.egg/autostart/`, one [XDG autostart](https://specifications.freedesktop.org/autostart-spec/latest/) entry per pane, started in name order:

- A terminal pane: `Terminal=true` and the command in `Exec`.
- A preview pane: `X-Eggshell-Preview=PORT/PATH`.
- A file pane: `X-Eggshell-File=PATH`.

The layout, files, opencode and preview side by side with the terminal below, is `.egg/config.json`: arrange the panes, then Views, Save layout writes it.

The packages the panes use are pinned in `.egg/packages` (`egg pkg pack` writes it): the import installs them before any pane starts.
