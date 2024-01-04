FROM ghcr.io/isd-sgcu/astro-dyn-config:v0.0.2

WORKDIR /app

COPY public package*.json .env astro.config.mjs tailwind.config.mjs tsconfig.json ./

RUN npm i

COPY src ./src
