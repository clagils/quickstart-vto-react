import { ProductTryOn } from './components/product-try-on'
import './styles/app.css'

export const App = () => (
  <main className="page">
    <header className="page__header">
      <p className="page__eyebrow">Vitraun quickstart</p>
      <h1 className="page__title">Virtual try-on — React + Vite</h1>
      <p className="page__description">
        React SPA with <code>@vitraun/webar</code>, events via{' '}
        <code>subscribeVitraunVTOEvents</code>, and the{' '}
        <code>useVitraunVTOEventLogs</code> hook.
      </p>
    </header>
    <section className="product-card" aria-labelledby="product-name">
      <h2 id="product-name" className="product-card__name">
        Sample product
      </h2>
      <p className="product-card__price">$89.90</p>
      <ProductTryOn />
    </section>
  </main>
)
