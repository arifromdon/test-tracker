import React from 'react'
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap'

const CardHeader = ({ title, icons, total }) => (
  <Card className="p-3 card-main">
    <div className="d-flex justify-content-between align-items-center">
      <img src={icons} style={{ width: '30%', display: 'block' }} alt="icon-card" />
      <div>
        <h4 className="text-right title-card-header">{title}</h4>
        <h4 className="text-right title-card-header">{total}</h4>
      </div>
    </div>
  </Card>
)

CardHeader.propTypes = {
  title: PropTypes.string,
  total: PropTypes.string,
  icons: PropTypes.string,
};

export default CardHeader