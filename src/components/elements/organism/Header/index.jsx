import React from 'react'
// import PropTypes from 'prop-types';
import FormWrapper from '../../atoms/Form'

const HeaderWrapper = () => (
  <div className="d-flex justify-content-between">
    <div>
      <p className="title-header-dash">Dashboard Control Tower</p>
      <h2 className="title-header-cap">SUMMARY</h2>
    </div>
    <FormWrapper />
  </div>
)

// HeaderWrapper.propTypes = {
//   title: PropTypes.string,
//   tooltip: PropTypes.string,
//   body: PropTypes.any,
// };

export default HeaderWrapper