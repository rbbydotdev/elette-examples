# Node and opencode in a browser tab

A small Node server under nodemon, with opencode beside it, that runs in [elette](https://elette.dev/): a Linux machine in your browser tab. Nothing is installed on your computer.

**Open it:** https://elette.dev/?import_gh=rbbydotdev/eggshell-demo-node

elette clones this repository into a new project and opens three panes:

| Pane | What it runs |
|---|---|
| server | `npm install && npm run dev`: the server on port 3000, restarted by nodemon on each change |
| opencode | `vault run --optional -- opencode`: the coding agent, with your model keys from the vault when you have one |
| preview | the page the server serves on port 3000 |

Edit `public/index.html` or `server.js` in the editor or ask opencode to. nodemon restarts the server and the preview shows the change.

## Make your own

The panes are files in `.egg/autostart/`, one [XDG autostart](https://specifications.freedesktop.org/autostart-spec/latest/) entry per pane, started in name order:

- A terminal pane: `Terminal=true` and the command in `Exec`.
- A preview pane: `X-Eggshell-Preview=PORT/PATH`.
- A file pane: `X-Eggshell-File=PATH`.

Put the folder in any repository and open `https://elette.dev/?import_gh=OWNER/REPO`.

The layout, files, opencode and preview side by side with the terminal below, is `.egg/config.json`: arrange the panes, then Views, Save layout writes it.

The packages the panes use are pinned in `.egg/packages` (`egg pkg pack` writes it): the import installs them before any pane starts.
