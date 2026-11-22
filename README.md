# elette examples

Each folder under `examples/` is a project that opens in [elette](https://elette.dev/), a Linux machine in your browser tab. elette clones the folder alone and opens its panes.

| Example | What it runs | Open it |
|---|---|---|
| node | a Node server under nodemon, opencode, a preview | https://elette.dev/?import_gh=https://github.com/rbbydotdev/elette-examples/tree/main/examples/node |
| bun | `bun init --react` and `bun dev`, pi, a preview | https://elette.dev/?import_gh=https://github.com/rbbydotdev/elette-examples/tree/main/examples/bun |
| nextjs | a Next.js app on `bun dev`, pi, a preview | https://elette.dev/?import_gh=https://github.com/rbbydotdev/elette-examples/tree/main/examples/nextjs |
| emdash | an emdash blog on `bun dev`, opencode, a preview | https://elette.dev/?import_gh=https://github.com/rbbydotdev/elette-examples/tree/main/examples/emdash |

## Addresses elette takes

- A repository: `?import_gh=OWNER/REPO`
- A folder of it: `?import_gh=https://github.com/OWNER/REPO/tree/BRANCH/FOLDER`, or `?import_gh=OWNER/REPO&path=FOLDER`
- A branch: `&branch=NAME`, or its tree address
- A commit by its full id: `&commit=ID`, or `https://github.com/OWNER/REPO/commit/ID`

Each example's README says how its panes, layout and packages are made.
