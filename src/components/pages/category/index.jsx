import React, { Component } from 'react'
import { Container, Row, Col, Table } from 'react-bootstrap'
import HeaderWrapper from '../../elements/organism/Header'

class CategoryList extends Component {
  render(){
    return(
      <React.Fragment>
        <HeaderWrapper />
        <Container>
          <Row>
            <Col lg={12}>
              <h4>Top Category Project</h4>
              <Table>
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Nama</th>
                    <th>Total UMKM</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1.</td>
                    <td>Barang & Jasa Lainnya</td>
                    <td>193 UMKM</td>
                    <td>Rp. 1.400.000.000</td>
                  </tr>
                  <tr>
                    <td>2.</td>
                    <td>Jasa Advertising</td>
                    <td>1 UMKM</td>
                    <td>Rp. 250.000.000</td>
                  </tr>
                  <tr>
                    <td>3.</td>
                    <td>Jasa Perawatan Peralatan dan Mesin</td>
                    <td>1 UMKM</td>
                    <td>Rp. 125.000.000</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    )
  }
}

export default CategoryList