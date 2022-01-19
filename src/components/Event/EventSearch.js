import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function EventSearch({ children }) {
  return <StyledEventSearch>{children}</StyledEventSearch>;
}

EventSearch.propTypes = {
  children: PropTypes.node.isRequired,
};
export default EventSearch;

const StyledEventSearch = styled.section`
  display: flex;
  margin: 20px 0;

  select {
    margin-right: 10px;
    :last-child {
      margin-right: 0;
    }
  }
`;
