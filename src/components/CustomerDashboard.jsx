import React, { useState } from 'react'
import Layout from './Layout'
import { Card, CardContent, CardHeader } from './ui/Card'
import Button from './ui/Button'
import Badge from './ui/Badge'
import { ShoppingCart, Coffee, Sandwich, CupSoda, Cookie } from 'lucide-react'

const categories = [
  { key: 'makanan', label: 'Makanan', icon: Sandwich },
  { key: 'minuman', label: 'Minuman', icon: CupSoda },
  { key: 'cemilan', label: 'Cemilan', icon: Cookie },
]

const products = [
  { id: 'P001', name: 'Nasi Goreng Spesial', price: 25000, cat: 'makanan' },
  { id: 'P002', name: 'Mie Goreng Jawa', price: 22000, cat: 'makanan' },
  { id: 'P101', name: 'Kopi Latte', price: 18000, cat: 'minuman' },
  { id: 'P102', name: 'Matcha Latte', price: 20000, cat: 'minuman' },
  { id: 'P201', name: 'French Fries', price: 15000, cat: 'cemilan' },
  { id: 'P202', name: 'Chicken Pop', price: 18000, cat: 'cemilan' },
]

export default function CustomerDashboard() {
  const [activeCat, setActiveCat] = useState('makanan')
  const [cart, setCart] = useState([])

  const addToCart = (p) => {
    setCart(prev => {
      const idx = prev.findIndex(i => i.id === p.id)
      if (idx >= 0) {
        const copy = [...prev]
        copy[idx].qty += 1
        return copy
      }
      return [...prev, { ...p, qty: 1 }]
    })
  }

  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0)

  return (
    <Layout role="Customer">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr,380px] gap-6">
        <div className="space-y-6">
          <Card>
            <CardHeader title="Paket Ruangan" subtitle="Informasi penggunaan" />
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-slate-400 text-sm">Lokasi</div>
                  <div className="font-semibold">Ruang Premium 2</div>
                </div>
                <div className="text-right">
                  <Badge>Premium</Badge>
                  <div className="text-slate-300 text-sm mt-1">Sisa waktu: 1j 10m</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader title="Menu Café" subtitle="Pilih kategori" />
            <CardContent>
              <div className="flex gap-2 mb-4">
                {categories.map(cat => (
                  <button key={cat.key} onClick={() => setActiveCat(cat.key)} className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg border ${activeCat===cat.key? 'bg-purple-600/20 border-purple-700 text-purple-200' : 'bg-slate-900/50 border-slate-800 text-slate-300'}`}>
                    <cat.icon className="w-4 h-4" />
                    <span className="text-sm">{cat.label}</span>
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {products.filter(p => p.cat===activeCat).map(p => (
                  <div key={p.id} className="rounded-2xl p-4 bg-slate-900/60 border border-slate-800 hover:border-purple-700/50 transition-colors">
                    <div className="font-semibold">{p.name}</div>
                    <div className="text-sm text-slate-300">Rp {p.price.toLocaleString()}</div>
                    <Button className="mt-3 w-full" variant="primary" icon={ShoppingCart} onClick={() => addToCart(p)}>
                      Tambah ke Keranjang
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader title="Keranjang" subtitle="Ringkasan pesanan" />
            <CardContent>
              {cart.length === 0 ? (
                <div className="text-slate-400 text-sm">Belum ada item.</div>
              ) : (
                <div className="space-y-3">
                  {cart.map(item => (
                    <div key={item.id} className="flex items-center justify-between rounded-xl bg-slate-900/60 border border-slate-800 p-3">
                      <div>
                        <div className="font-medium">{item.name}</div>
                        <div className="text-xs text-slate-400">x{item.qty} • Rp {(item.price*item.qty).toLocaleString()}</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="secondary" onClick={() => setCart(prev => prev.map(i => i.id===item.id? { ...i, qty: Math.max(1, i.qty-1)}: i))}>-</Button>
                        <span className="w-6 text-center">{item.qty}</span>
                        <Button variant="secondary" onClick={() => setCart(prev => prev.map(i => i.id===item.id? { ...i, qty: i.qty+1}: i))}>+</Button>
                      </div>
                    </div>
                  ))}
                  <div className="flex items-center justify-between pt-2 border-t border-slate-800">
                    <div className="text-slate-300">Total</div>
                    <div className="text-lg font-semibold">Rp {total.toLocaleString()}</div>
                  </div>
                  <Button className="w-full" variant="primary">Checkout</Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  )
}
