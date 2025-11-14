import React from 'react'
import Layout from './Layout'
import { Card, CardContent, CardHeader } from './ui/Card'
import { Table, THead, TBody, TR, TH, TD } from './ui/Table'
import Badge from './ui/Badge'
import Button from './ui/Button'
import { Users, Shield, CreditCard, DoorOpen, PlusCircle, Eye } from 'lucide-react'

const customers = [
  { id: 'C-1024', name: 'Alya Prameswari', username: 'alya', member: 'Premium' },
  { id: 'C-1025', name: 'Rafi Akbar', username: 'rafi', member: 'Regular' },
  { id: 'C-1026', name: 'Nadia Putri', username: 'nadia', member: 'Premium' },
]

const staff = [
  { id: 'S-2001', name: 'Dimas', role: 'Operator' },
  { id: 'S-2002', name: 'Salsa', role: 'Kasir' },
]

const transactions = Array.from({ length: 10 }).map((_, i) => ({
  id: `TX-9${i}4`, customer: ['Alya','Rafi','Nadia','Bima'][i%4], amount: (20000 + i*5000), status: i % 2 === 0 ? 'Paid' : 'Unpaid', time: `${10+i}:3${i}`
}))

const rooms = [
  { id: 'R-01', name: 'Reguler 1', type: 'Regular', status: 'Kosong' },
  { id: 'R-02', name: 'Reguler 2', type: 'Regular', status: 'Dipakai' },
  { id: 'R-03', name: 'Reguler 3', type: 'Regular', status: 'Kosong' },
  { id: 'P-01', name: 'Premium 1', type: 'Premium', status: 'Dipakai' },
  { id: 'P-02', name: 'Premium 2', type: 'Premium', status: 'Kosong' },
  { id: 'P-03', name: 'Premium 3', type: 'Premium', status: 'Kosong' },
]

export default function AdminDashboard() {
  return (
    <Layout role="Admin">
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-6">
        <Card className="xl:col-span-2">
          <CardHeader title="Daftar Akun Customer" subtitle="Pengguna terdaftar" action={<Button variant="secondary" icon={Users}>Kelola Customer</Button>} />
          <CardContent>
            <Table>
              <THead>
                <TR>
                  <TH>ID</TH>
                  <TH>Nama</TH>
                  <TH>Username</TH>
                  <TH>Member</TH>
                  <TH>Aksi</TH>
                </TR>
              </THead>
              <TBody>
                {customers.map(c => (
                  <TR key={c.id}>
                    <TD className="text-slate-400">{c.id}</TD>
                    <TD>{c.name}</TD>
                    <TD className="text-slate-300/90">@{c.username}</TD>
                    <TD>
                      <Badge variant={c.member === 'Premium' ? 'success' : 'outline'}>
                        {c.member}
                      </Badge>
                    </TD>
                    <TD>
                      <div className="flex gap-2">
                        <Button variant="ghost" icon={Eye}>Lihat</Button>
                        <Button variant="primary" icon={PlusCircle}>Isi Billing</Button>
                      </div>
                    </TD>
                  </TR>
                ))}
              </TBody>
            </Table>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader title="Ruangan Tersedia" subtitle="3 Reguler • 3 Premium" />
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                {rooms.map(r => (
                  <div key={r.id} className={`rounded-xl p-3 border ${r.type==='Premium' ? 'border-purple-700/50 bg-purple-900/10' : 'border-slate-800 bg-slate-900/60'}`}>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm text-slate-400">{r.id}</div>
                        <div className="font-semibold">{r.name}</div>
                      </div>
                      <Badge variant={r.type==='Premium' ? 'default' : 'outline'}>{r.type}</Badge>
                    </div>
                    <div className="mt-2 text-xs {r.status==='Kosong' ? 'text-emerald-400' : 'text-amber-400' }">Status: {r.status}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader title="Tombol Cepat" />
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                <Button icon={DoorOpen} variant="secondary">Kelola Ruangan</Button>
                <Button icon={Shield} variant="secondary">Kelola Staff</Button>
                <Button icon={Users} variant="secondary">Kelola Customer</Button>
                <Button icon={CreditCard} variant="secondary">Lihat Semua Transaksi</Button>
                <Button icon={PlusCircle} variant="primary" className="col-span-2">Isi Billing</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader title="Transaksi Terkini" subtitle="10 transaksi terakhir" />
          <CardContent>
            <Table>
              <THead>
                <TR>
                  <TH>ID</TH>
                  <TH>Customer</TH>
                  <TH>Jumlah</TH>
                  <TH>Status</TH>
                  <TH>Waktu</TH>
                </TR>
              </THead>
              <TBody>
                {transactions.map(t => (
                  <TR key={t.id}>
                    <TD className="text-slate-400">{t.id}</TD>
                    <TD>{t.customer}</TD>
                    <TD>Rp {t.amount.toLocaleString()}</TD>
                    <TD>
                      <Badge variant={t.status==='Paid' ? 'success' : 'warning'}>{t.status}</Badge>
                    </TD>
                    <TD className="text-slate-400">{t.time}</TD>
                  </TR>
                ))}
              </TBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader title="Monitor Ruangan" subtitle="Dipakai / Kosong" />
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {rooms.map(r => (
                <div key={r.id} className={`rounded-2xl p-4 border ${r.status==='Kosong' ? 'border-emerald-700/40 bg-emerald-900/10' : 'border-amber-700/40 bg-amber-900/10'}`}>
                  <div className="text-xs text-slate-400">{r.id}</div>
                  <div className="font-semibold mt-1">{r.name}</div>
                  <div className={`mt-2 text-xs ${r.status==='Kosong' ? 'text-emerald-300' : 'text-amber-300'}`}>Status: {r.status}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  )
}
