import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function ContentBox({ children }) {
  return <StyledBox>{children}</StyledBox>;
}

ContentBox.propTypes = {
  children: PropTypes.element.isRequired,
};
export default ContentBox;

const StyledBox = styled.div`
  width: 100%;
  min-height: 200px;
  border: 1px solid black;
  border-radius: 10px;
  padding: 10px;
`;
