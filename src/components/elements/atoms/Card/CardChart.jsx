import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'

const CardChart = ({ title, body, tooltip, link }) => (
  <Card className="card-content">
    <Card.Body>
      <div className="d-flex justify-content-between align-items-center">
        <Card.Title className="title-card-content">{title}</Card.Title>
        <Link to={link}>Selengkapnya</Link>
      </div>
      {body}
    </Card.Body>
  </Card>
)

CardChart.propTypes = {
  title: PropTypes.string,
  tooltip: PropTypes.string,
  link: PropTypes.string,
  body: PropTypes.any,
};

export default CardChart