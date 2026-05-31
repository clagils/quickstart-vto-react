# Vitraun VTO Quickstart — React + Vite

## Setup

```bash
cp .env.example .env
npm install
npm run dev
```

Open `http://localhost:3005`.

## Integration

- `import '@vitraun/webar'` registers `<vitraun-vto>`
- `subscribeVitraunVTOEvents` in `src/components/product-try-on.tsx`
- Wire `src/cart/handle-vitraun-cart-event.ts` to your cart API
