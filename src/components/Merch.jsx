import { useState, useEffect } from 'react'
import { site } from '../data/site.js'

const PRODUCTS_API = 'https://storefront-api.fourthwall.com/v1/collections/all/products'

// Repair common mojibake (Fourthwall stored some punctuation double-encoded:
// UTF-8 bytes re-read as Windows-1252). Unicode escapes used for exact matching.
function fixText(s = '') {
  return s
    .replaceAll('â€”', '—') // em dash —
    .replaceAll('â€“', '–') // en dash –
    .replaceAll('â€™', '’') // apostrophe ’
    .replaceAll('â€œ', '“') // left double quote “
    .replaceAll('â€', '”') // right double quote ”
    .replaceAll('â€¦', '…') // ellipsis …
    .replaceAll('Â ', ' ') // non-breaking space
    .replaceAll('Â', '')
}

function formatPrice(p) {
  if (!p || typeof p.value !== 'number') return ''
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: p.currency || 'USD',
  }).format(p.value)
}

export default function Merch() {
  const [products, setProducts] = useState(null) // null = loading

  useEffect(() => {
    const token = import.meta.env.VITE_FW_STOREFRONT_TOKEN
    if (!token) {
      setProducts([])
      return
    }
    fetch(`${PRODUCTS_API}?storefront_token=${token}`)
      .then((r) => r.json())
      .then((d) => {
        const items = (d.results || []).map((p) => ({
          id: p.id,
          name: fixText(p.name),
          image: p.images?.[0]?.url || '',
          price: p.variants?.[0]?.unitPrice,
          url: `${site.merchUrl}/products/${p.slug}`,
        }))
        setProducts(items)
      })
      .catch(() => setProducts([])) // fall back to just the Shop button
  }, [])

  return (
    <section className="section merch reveal" id="merch">
      <h2 className="section__title">Merch</h2>
      <p className="merch__intro">
        Raven tees, trucker hats, and more — hand-illustrated and printed to order.
      </p>

      {products && products.length > 0 && (
        <div className="merch__grid">
          {products.map((p) => (
            <a className="merch__card" key={p.id} href={p.url} target="_blank" rel="noreferrer">
              {p.image && <img src={p.image} alt={p.name} loading="lazy" />}
              <div className="merch__info">
                <span className="merch__name">{p.name}</span>
                {p.price && <span className="merch__price">{formatPrice(p.price)}</span>}
              </div>
            </a>
          ))}
        </div>
      )}

      <div className="merch__cta">
        <a className="btn" href={site.merchUrl} target="_blank" rel="noreferrer">
          Shop the store
        </a>
      </div>
    </section>
  )
}
