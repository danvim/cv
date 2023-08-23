/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_TEL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
