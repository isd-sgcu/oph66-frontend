FROM ghcr.io/isd-sgcu/astro-dyn-config:latest

WORKDIR /app

COPY public package*.json .env astro.config.mjs tailwind.config.mjs tsconfig.json ./

RUN npm i

COPY src ./src
