import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function Year({ Date }) {
  return <StyledYear>&lt; {Date} &gt;</StyledYear>;
}

Year.propTypes = {
  Date: PropTypes.string,
};
Year.defaultProps = {
  Date: '2021',
};

export default Year;

const StyledYear = styled.p`
  font-weight: bold;
  font-size: 24px;
`;
