FROM alpine:latest AS builder

RUN apk add --no-cache neovim git build-base npm cargo bash curl go php ruby openjdk11-jdk python3 composer unzip gzip wget && \
    python3 -m venv /my_venv && \
    source /my_venv/bin/activate && \
    python -m ensurepip && \
    pip install --upgrade pip && \
    npm install -g @fsouza/prettierd && \
    curl -fsSL "https://bun.sh/install" | bash

