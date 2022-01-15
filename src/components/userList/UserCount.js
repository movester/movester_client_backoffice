import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyleduserCount = styled.p`
  text-align: center;
  font-size: 24px;
  font-weight: 700;
`;

function UserCount({ list }) {
  return <StyleduserCount>{list.length}명</StyleduserCount>;
}

UserCount.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default UserCount;
