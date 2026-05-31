/** Maps runtime config fields to `.env` variable names (no secret values). */
export const TRYON_ENV_KEYS = {
  merchantId: 'VITE_TRYON_MERCHANT_ID',
  widgetId: 'VITE_TRYON_WIDGET_ID',
  env: 'VITE_TRYON_ENV',
  apiPort: 'VITE_TRYON_API_PORT',
  appPort: 'VITE_TRYON_APP_PORT',
  lang: 'VITE_TRYON_LANG',
  isolatedSku: 'VITE_TRYON_ISOLATED_SKU',
  currencySymbol: 'VITE_TRYON_CURRENCY_SYMBOL',
} as const

export const REQUIRED_TRYON_ENV_KEYS = [
  TRYON_ENV_KEYS.merchantId,
  TRYON_ENV_KEYS.widgetId,
  TRYON_ENV_KEYS.lang,
  TRYON_ENV_KEYS.currencySymbol,
] as const
