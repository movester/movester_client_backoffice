import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function StetchingOptionsWrap({ children }) {
  return <StyledStretchingOptionsWrap>{children}</StyledStretchingOptionsWrap>;
}

StetchingOptionsWrap.propTypes = {
  children: PropTypes.node.isRequired,
};
export default StetchingOptionsWrap;

const StyledStretchingOptionsWrap = styled.section`
  display: flex;
  margin: 20px 0;

  select {
    margin-right: 10px;
    flex-grow: 1;
    :last-child {
      margin-right: 0;
    }
  }
`;
