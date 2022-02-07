import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function Center({ children }) {
  return <StyledCenter>{children}</StyledCenter>;
}

Center.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Center;

const StyledCenter = styled.div`
  display: flex;
  justify-content: center;
`;
