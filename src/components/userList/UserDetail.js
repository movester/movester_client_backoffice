import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function UserDetail({ children }) {
  return <StyledUserDetail>{children}</StyledUserDetail>;
}

UserDetail.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserDetail;

const StyledUserDetail = styled.section`
  display: flex;
  div:nth-child(1) {
    margin-right: 50px;
  }
  li {
    flex-grow: 1;
    text-align: center;
  }
  ul li:nth-child(1) {
    width: auto;
    flex-grow: 1;
  }
  ul li:nth-child(2) {
    width: auto;
    flex-grow: 1;
  }
`;
