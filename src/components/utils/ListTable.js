import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// 데이터 타입 확인 후 다시 작성해야 함
// 값이 중복되면

function ListTable({ headers, bodies, ratio }) {
  return (
    <StyledListTable>
      <ul className={ratio}>
        {headers.map(header => (
          <li key={header}>{header}</li>
        ))}
      </ul>
      {bodies.map(body => (
        <ul className={ratio} key={body.id ? body.id : body.month}>
          {Object.values(body).map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ))}
    </StyledListTable>
  );
}
ListTable.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.string).isRequired,
  bodies: PropTypes.arrayOf(PropTypes.object).isRequired,
  ratio: PropTypes.string,
};
ListTable.defaultProps = {
  ratio: '',
};

export default ListTable;

const StyledListTable = styled.section`
  margin-top: 20px;
  ul {
    display: flex;
    border-bottom: 1px solid #c4c4c4;
    &.half {
      li:first-child {
        width: 33%;
      }
      li:nth-child(2) {
        width: 33%;
      }
      li {
        width: 33%;
        flex-grow: 1;
      }
    }
    // cursor: pointer;
  }
  // ul:hover {
  //   background-color: gray;
  // }
  ul li:first-child {
    width: 5%;
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
