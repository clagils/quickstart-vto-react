/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_TRYON_MERCHANT_ID: string
  readonly VITE_TRYON_WIDGET_ID: string
  readonly VITE_TRYON_ENV: string
  readonly VITE_TRYON_API_PORT: string
  readonly VITE_TRYON_APP_PORT: string
  readonly VITE_TRYON_LANG: string
  readonly VITE_TRYON_ISOLATED_SKU: string
  readonly VITE_TRYON_CURRENCY_SYMBOL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
