/// <reference types="astro/client" />

interface ImportMetaEnv {
  PUBLIC_API_BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
