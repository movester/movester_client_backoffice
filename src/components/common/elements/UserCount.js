import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function UserCount({ list }) {
  return <StyleduserCount>{list.length}명</StyleduserCount>;
}

UserCount.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default UserCount;

const StyleduserCount = styled.p`
  text-align: right;
  font-size: 24px;
  font-weight: 700;
`;