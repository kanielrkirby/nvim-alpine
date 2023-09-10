FROM alpine:latest AS builder

ARG BUILD_DEPS="autoconf automake cmake curl g++ git gettext gettext-dev libtool make ninja openssl pkgconfig unzip binutils wget"
ARG TARGET=stable

RUN apk add --no-cache ${BUILD_DEPS} && \
  git --version && \
  git clone https://github.com/neovim/neovim.git /tmp/neovim && \
  cd /tmp/neovim && \
  git fetch --all --tags -f && \
  git checkout ${TARGET} && \
  make CMAKE_BUILD_TYPE=RelWithDebInfo CMAKE_INSTALL_PREFIX=/usr/local/ && \
  make install && \
  strip /usr/local/bin/nvim

FROM node:20-alpine3.17

COPY --from=builder /usr/local /usr/local/
RUN true 
COPY --from=builder /lib/ld-musl-aarch64.so.1 /lib/
RUN true
COPY --from=builder /usr/lib/libgcc_s.so.1 /usr/lib/
RUN true
COPY --from=builder /usr/lib/libintl.so.8 /usr/lib/

RUN apk add --no-cache git build-base python3 curl cargo bash go php ruby openjdk11-jdk composer wget && \
    python3 -m venv /my_venv && \
    source /my_venv/bin/activate && \
    python -m ensurepip && \
    pip install --upgrade pip && \
    npm i -g @fsouza/prettierd
