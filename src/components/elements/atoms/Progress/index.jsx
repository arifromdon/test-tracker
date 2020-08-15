import React from 'react'
import { ProgressBar } from 'react-bootstrap'

const ProgressWrapper = () => (
  <div className="d-flex align-items-center justify-content-between">
    <p className="truncate mb-0">LANCS ARMADA</p>
    <ProgressBar className="w-100" now='60' label='60%' />
    <span>60%</span>
  </div>
)

export default ProgressWrapper