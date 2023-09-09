# nvim-alpine

## Overview

nvim-alpine is a personalized Neovim configuration that utilizes Docker containers and volumes to provide a consistent and isolated development environment. With built-in clipboard support using `pbcopy`, `xclip`, and `xsel`, you can seamlessly copy and paste text between your editor and other applications.

## Features

- Utilizes Docker containers for an isolated Neovim environment.
- Docker volumes are used for persistent configurations and state.
- Clipboard support using `pbcopy`, `xclip`, and `xsel`.

## Prerequisites

- Requires `docker` CLI or `nerdctl`.
- `pbcopy`, `xsel`, or `xclip` if you want system clipboard register to work in NeoVim.

## Setup

#### Step 1: Clone the Repository

Clone the repository to your local machine:

```bash
git clone https://github.com/piratey7007/nvim-alpine.git
```

#### Step 2: Add to path

I personally opt for `dvim` for mine, but you can rename it to anything.

You can run the following line when you're ready:

```bash
cp /path/to/nvim/executable /usr/local/bin
```

## Caveats

- The initial installation will take a short bit, as it will need to pull the Alpine image, and install the plugins.
- Sometimes I've noticed permissions issues come up relating to the volume mounting. If you find any, let me know, or submit a PR please!

## Usage

Now you can run `dvim` from any terminal window:

```bash
dvim ./dev
```

## Customization

The `Dockerfile`, `clipboard.txt`, and `.config` get stored in `$HOME/.local/share/nvim-alpine/` after running the first time. If you want to customize anything, it's all stored there, so either delete or replace it.

## Contributions

If you find any issues with this, make an issue or pull request. I'm happy to answer any questions or add to it.
