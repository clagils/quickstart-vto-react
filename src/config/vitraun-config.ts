import { TRYON_ENV_KEYS } from '../constants/tryon-env-keys'

const readEnvValue = (key: string): string | undefined => {
  const raw = import.meta.env[key as keyof ImportMetaEnv]
  if (typeof raw !== 'string') return undefined
  const trimmed = raw.trim()
  return trimmed.length > 0 ? trimmed : undefined
}

const readRequiredEnv = (key: string): string => {
  const value = readEnvValue(key)
  if (!value) {
    throw new Error(`Missing ${key} in .env — copy .env.example to .env`)
  }
  return value
}

export type VitraunConfig = {
  readonly merchantId: string
  readonly widgetId: string
  readonly lang: string
  readonly env?: string
  readonly apiPort?: string
  readonly appPort?: string
  readonly isolatedSku?: string
  readonly currencySymbol: string
}

export const getVitraunConfig = (): VitraunConfig => ({
  merchantId: readRequiredEnv(TRYON_ENV_KEYS.merchantId),
  widgetId: readRequiredEnv(TRYON_ENV_KEYS.widgetId),
  lang: readRequiredEnv(TRYON_ENV_KEYS.lang),
  env: readEnvValue(TRYON_ENV_KEYS.env),
  apiPort: readEnvValue(TRYON_ENV_KEYS.apiPort),
  appPort: readEnvValue(TRYON_ENV_KEYS.appPort),
  isolatedSku: readEnvValue(TRYON_ENV_KEYS.isolatedSku),
  currencySymbol: readRequiredEnv(TRYON_ENV_KEYS.currencySymbol),
})
