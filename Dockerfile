FROM node:20-bookworm-slim AS runtime
WORKDIR /app

COPY package.json ./
RUN npm install --ignore-scripts

COPY . .
COPY scripts/docker-entrypoint.sh /docker-entrypoint.sh

ENV HOST=0.0.0.0
ENV PORT=8080
EXPOSE 8080
ENTRYPOINT [ "sh" ]
CMD [ "/docker-entrypoint.sh" ]
