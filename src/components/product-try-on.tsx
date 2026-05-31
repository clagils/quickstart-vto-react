import '@vitraun/webar'
import { useCallback, useEffect, useRef } from 'react'
import { subscribeVitraunVTOEvents } from '@vitraun/webar'
import { handleVitraunCartEvent } from '../cart/handle-vitraun-cart-event'
import { getVitraunConfig } from '../config/vitraun-config'

type VitraunWidgetElement = HTMLElement & {
  open?: () => Promise<void>
}

export const ProductTryOn = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const config = getVitraunConfig()

  useEffect(() => {
    const widget = containerRef.current?.querySelector('vitraun-vto')
    if (!widget) return
    return subscribeVitraunVTOEvents(widget, (entry) => {
      void handleVitraunCartEvent(entry.type, entry.detail)
    })
  }, [])

  const handleOpenTryOn = useCallback(async () => {
    const widget = containerRef.current?.querySelector(
      'vitraun-vto',
    ) as VitraunWidgetElement | null
    if (!widget?.open) return
    try {
      await widget.open()
    } catch (error) {
      console.error('Failed to open try-on:', error)
    }
  }, [])

  return (
    <div ref={containerRef} className="product-try-on">
      <vitraun-vto
        merchant-id={config.merchantId}
        widget-id={config.widgetId}
        lang={config.lang}
        platform="web"
        isolated-sku={config.isolatedSku}
        currency-symbol={config.currencySymbol}
        basket-opens-in="event"
        checkout-opens-in="event"
        env={config.env}
        api-port={config.apiPort}
        app-port={config.appPort}
      />
      <button
        type="button"
        className="try-on-button"
        aria-label="Open virtual try-on"
        onClick={() => {
          void handleOpenTryOn()
        }}
      >
        Try on
      </button>
    </div>
  )
}
