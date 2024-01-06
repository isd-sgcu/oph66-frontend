FROM ghcr.io/isd-sgcu/astro-dyn-config:v0.0.2

WORKDIR /app

COPY package*.json astro.config.mjs tailwind.config.mjs tsconfig.json ./

RUN npm i

COPY src ./src

COPY public ./public
