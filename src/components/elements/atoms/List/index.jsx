import React from 'react'
import { Table } from 'react-bootstrap'

const ListCategoryProject = () => (
  <Table responsive className="table-list-category">
    <tbody>
      <tr>
        <td className="text-left">1. Barang & Jasa Lainnya</td>
        <td className="pr-2 section-umkm">193 umkm</td>
        <td className="text-left section-price">Rp1.4T</td>
      </tr>
      <tr>
        <td className="text-left">2. Jasa Advertising</td>
        <td className="pr-2 section-umkm">1 umkm</td>
        <td className="text-left section-price">Rp250Jt</td>
      </tr>
      <tr>
        <td className="text-left ">3. Jasa Perawatan Peralatan dan Mesin</td>
        <td className="pr-2 section-umkm">1 umkm</td>
        <td className="text-left section-price">Rp125Jt</td>
      </tr>
    </tbody>
  </Table>
)

export default ListCategoryProject