import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function UserCount({ cnt }) {
  return <StyleduserCount>{cnt}명</StyleduserCount>;
}

UserCount.propTypes = {
  cnt: PropTypes.number.isRequired,
};

export default UserCount;

const StyleduserCount = styled.p`
  text-align: right;
  font-size: 24px;
  font-weight: 700;
`;
