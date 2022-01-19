import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// 데이터 타입 확인 후 다시 작성해야 함
// 값이 중복되면

function ListTable({ headers, users }) {
  return (
    <StyledListTable>
      <ul>
        {headers.map(header => (
          <li key={header}>{header}</li>
        ))}
      </ul>
      {users.map(user => (
        <ul key={user.id ? user.id : user.month}>
          {Object.values(user).map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ))}
    </StyledListTable>
  );
}
ListTable.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.string).isRequired,
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ListTable;

const StyledListTable = styled.section`
  margin-top: 20px;
  ul {
    display: flex;
    border-bottom: 1px solid #c4c4c4;
    // cursor: pointer;
  }
  ul:hover {
    background-color: gray;
  }
  ul li:first-child {
    width: 7%;
    flex-grow: 0;
  }
  ul li:nth-child(2) {
    width: 13%;
    flex-grow: 2;
  }

  li {
    flex-grow: 1;
    width: 10%;
    padding: 10px 5px;
    text-align: left;
  }
  div {
    margin-top: 15px;
  }
  span {
    color: ${({ theme }) => theme.darkPulple};
    margin-right: 10px;
    cursor: pointer;
  }
`;
