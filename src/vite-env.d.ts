/// <reference types="vite/client" />
interface ImportMetaEnv {
    readonly VITE_APP_BASE_URL: string
    // 他の環境変数もここに追加できます
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }