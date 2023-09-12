# nvim-alpine

## Overview

nvim-alpine is a personalized Neovim configuration that utilizes Docker containers and volumes to provide a consistent and isolated development environment. With built-in clipboard support using `pbcopy`, `xclip`, `xsel`, and `wl-copy`, you can seamlessly copy and paste text between your editor and other applications.

## Features

- Utilizes Docker containers for an isolated Neovim environment.
- Docker volumes are used for persistent configurations and state.
- Clipboard support using `pbcopy`, `xclip`, `xsel`, and `wl-copy`.

## Prerequisites

- Requires `docker` CLI or `nerdctl`.
- `pbcopy`, `xclip`, `xsel`, or `wl-copy` if you want system clipboard register to work in NeoVim.

## Setup

#### Step 1: Clone the Repository

Clone the repository to your local machine:

```bash
git clone https://github.com/piratey7007/nvim-alpine.git
```

#### Step 2: Run the `setup` Script

I personally opt for `dvim` for mine, but you can rename it to anything in the script.

```bash
cd /path/to/setup
./setup
```

This will copy the necessary files into a new `~/.local/share/nvim-alpine/` folder, as well as add the `dvim` command to your `/usr/local/bin`. You can now remove the cloned repository if you want.

## Caveats

- The initial installation will take a short bit, as it will need to pull the Alpine image, and install the plugins.
- Sometimes I've noticed permissions issues come up relating to the volume mounting. If you find any, let me know, or submit a PR please!
- If you want *intellisense* in your projects, you will need to `dvim` into the directory that contains your `node_modules` and `package.json`, reason being that it will automatically isolate that folder into it's own `docker` or `nerdctl` container.
- `nerdctl` can be troublesome for beginners to make use of (believe me, I know), so if you want something working faster, I would use `docker`.

## Usage

Now you can run `dvim` from any terminal window:

```bash
dvim ./dev
```

## Customization

The `Dockerfile`, `clipboard.txt`, and `.config` get stored in `~/.local/share/nvim-alpine/` after running the setup for the first time. If you want to customize anything, it's all stored there, so either delete or replace it.

## Contributions

If you find any issues with this, make an issue or pull request. I'm happy to answer any questions or add to it.
