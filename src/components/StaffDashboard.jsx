import React from 'react'
import Layout from './Layout'
import { Card, CardContent, CardHeader } from './ui/Card'
import { Table, THead, TBody, TR, TH, TD } from './ui/Table'
import Badge from './ui/Badge'
import Button from './ui/Button'
import { Users, PlusCircle, Pencil, Trash2 } from 'lucide-react'

const customers = [
  { id: 'C-1024', name: 'Alya Prameswari', username: 'alya', member: 'Premium', sisa: '1j 20m' },
  { id: 'C-1025', name: 'Rafi Akbar', username: 'rafi', member: 'Regular', sisa: '45m' },
]

const billings = [
  { id: 'B-5001', customer: 'Alya', paket: 'Premium', waktu: '2 Jam', status: 'Aktif' },
  { id: 'B-5002', customer: 'Rafi', paket: 'Regular', waktu: '1 Jam', status: 'Selesai' },
]

export default function StaffDashboard() {
  return (
    <Layout role="Staff">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader title="Daftar Customer" subtitle="Fokus pada pelanggan & billing" action={<Button variant="secondary" icon={Users}>Tambah Customer</Button>} />
          <CardContent>
            <Table>
              <THead>
                <TR>
                  <TH>Nama</TH>
                  <TH>Member</TH>
                  <TH>Sisa Waktu</TH>
                  <TH>Aksi</TH>
                </TR>
              </THead>
              <TBody>
                {customers.map(c => (
                  <TR key={c.id}>
                    <TD>{c.name}</TD>
                    <TD><Badge variant={c.member==='Premium'?'default':'outline'}>{c.member}</Badge></TD>
                    <TD className="text-slate-300">{c.sisa}</TD>
                    <TD>
                      <div className="flex gap-2">
                        <Button variant="primary" icon={PlusCircle}>Isi Billing</Button>
                      </div>
                    </TD>
                  </TR>
                ))}
              </TBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader title="Kelola Billing" subtitle="CRUD sederhana" action={<Button variant="secondary" icon={PlusCircle}>Buat Billing</Button>} />
          <CardContent>
            <Table>
              <THead>
                <TR>
                  <TH>ID</TH>
                  <TH>Customer</TH>
                  <TH>Paket</TH>
                  <TH>Waktu</TH>
                  <TH>Status</TH>
                  <TH></TH>
                </TR>
              </THead>
              <TBody>
                {billings.map(b => (
                  <TR key={b.id}>
                    <TD className="text-slate-400">{b.id}</TD>
                    <TD>{b.customer}</TD>
                    <TD><Badge variant={b.paket==='Premium'?'default':'outline'}>{b.paket}</Badge></TD>
                    <TD className="text-slate-300">{b.waktu}</TD>
                    <TD><Badge variant={b.status==='Aktif'?'success':'warning'}>{b.status}</Badge></TD>
                    <TD>
                      <div className="flex gap-2">
                        <Button variant="ghost" icon={Pencil}>Edit</Button>
                        <Button variant="danger" icon={Trash2}>Hapus</Button>
                      </div>
                    </TD>
                  </TR>
                ))}
              </TBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </Layout>
  )
}
