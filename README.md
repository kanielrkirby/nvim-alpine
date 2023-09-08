# nvim-alpine

## Overview

nvim-alpine is a personalized Neovim configuration that utilizes Docker containers and volumes to provide a consistent and isolated development environment. With built-in clipboard support using `pbcopy`, `xclip`, and `xsel`, you can seamlessly copy and paste text between your editor and other applications.

## Features

- Utilizes Docker containers for an isolated Neovim environment.
- Docker volumes are used for persistent configurations and state.
- Clipboard support using `pbcopy`, `xclip`, and `xsel`.

## Prerequisites

- Requires Docker
- `pbcopy`, `xsel`, or `xclip` if you want system clipboard register to work in NeoVim.

## Setup

#### Step 1: Clone the Repository

Clone the repository to your local machine:

```bash
git clone https://github.com/piratey7007/nvim-alpine.git
```

#### Step 2: Add an Alias or Symlink

##### Option 1: Add an Alias

I personally opt for `dvim` as my alias, but you can use anything.

Add the following line to your shell profile (~/.bashrc, ~/.zshrc, etc.):

```bash
alias dvim='path/to/cloned/repo/nvim'
```

##### Option 2: Create a Symlink

Create a symbolic link to the nvim script and place it in a directory that's in your PATH:

```bash
ln -s path/to/cloned/repo/nvim /usr/local/bin/dvim
```

Don't forget to change `path/to/cloned/repo` to where you actually cloned it, and to source your shell profile if you are using the alias:

```bash
source ~/.bashrc  # or ~/.zshrc, etc.
```


## Caveat

The initial installation will take a short bit, as it will need to pull the Alpine image, and install the plugins.

## Usage

Now you can run `dvim` from any terminal window:

```bash
dvim ./dev
```

## Contributions

If you find any issues with this, make an issue or pull request. I'm happy to answer any questions or add to it.
