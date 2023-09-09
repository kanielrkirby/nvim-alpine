FROM node:20-alpine3.17

RUN apk add --no-cache neovim git build-base cargo bash go php ruby openjdk11-jdk composer wget && \
    python3 -m venv /my_venv && \
    source /my_venv/bin/activate && \
    python -m ensurepip && \
    pip install --upgrade pip && \
    curl -fsSL "https://bun.sh/install" | bash && \
    bun add -g @fsouza/prettierd

