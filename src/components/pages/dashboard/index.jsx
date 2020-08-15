import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import CardChart from '../../elements/atoms/Card/CardChart'
import CardHeader from '../../elements/atoms/Card'
import PieChart from '../../elements/atoms/Charts/PieChart'
import GraphChart from '../../elements/atoms/Charts/GraphChart'
import ProgressBar from '../../elements/atoms/Progress'
import ListCategoryProject from '../../elements/atoms/List'
import HeaderWrapper from '../../elements/organism/Header'
import icBuild from '../../../assets/image/ic-build.png'
import icGroup from '../../../assets/image/ic-group.png'
import icHand from '../../../assets/image/ic-hand.png'
import icMoney from '../../../assets/image/ic-money.png'

class Dashboard extends Component {
  render(){
    return(
      <Container fluid>
        <HeaderWrapper />
        <Row className="mb-4">
          <Col>
            <CardHeader
              title="JUMLAH BUMN"
              icons={icBuild}
              total="1"
            />
          </Col>
          <Col>
            <CardHeader
              title="JUMLAH UMKM REGISTER"
              icons={icGroup}
              total="13,465"
            />
          </Col>
          <Col>
            <CardHeader
              title="JUMLAH UMKM HANDLE PROJECT"
              icons={icGroup}
              total="327"
            />
          </Col>
          <Col>
            <CardHeader
              title="ORDER TRANSAKSI"
              icons={icHand}
              total="34,866"
            />
          </Col>
          <Col>
            <CardHeader
              title="NILAI TRANSAKSI"
              icons={icMoney}
              total="Rp1.4T"
            />
          </Col>
        </Row>

        <h3 className="title-header-content">BUMN</h3>
        <Row className="mb-4">
          <Col lg={6}>
            <CardChart
              title="Tren Nilai Projek"
               body={<GraphChart/>}
            />
          </Col>
          <Col lg={3}>
            <CardChart
              title="Source of Budget"
              body={<PieChart/>}
            />
          </Col>
          <Col lg={3}>
            <CardChart
              title="TOP 10 SELLER by Project Value"
              body={<ProgressBar />}
            />
          </Col>
        </Row>

        <h3 className="title-header-content">UMKM</h3>
        <Row>
          <Col lg={3}>
            <CardChart
              title="Level UMKM by Register"
              body={<PieChart/>}
            />
          </Col>
          <Col lg={3}>
            <CardChart
              title="Level UMKM by Handle Project"
              body={<PieChart/>}
            />
          </Col>
          <Col lg={6}>
            <CardChart
              title="Top Category Project"
              body={<ListCategoryProject/>}
              link="/category"
            />
          </Col>
        </Row>

      </Container>
    )
  }
}

export default Dashboard