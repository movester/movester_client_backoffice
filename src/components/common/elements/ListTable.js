import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// 데이터 타입 확인 후 다시 작성해야 함
// 값이 중복되면

function ListTable({ headers, columns, link }) {
  return (
    <StyledListTable>
      <ul>
        {headers.map(header => (
          <li key={header}>{header}</li>
        ))}
      </ul>
      {columns.map(column =>
        link ? (
          <Link key={column.id} to={`/${link}/${column.id}`}>
            <ul className="column" key={column.id ? column.id : column.month}>
              {Object.values(column).map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Link>
        ) : (
          <ul key={column.id ? column.id : column.month}>
            {Object.values(column).map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ),
      )}
    </StyledListTable>
  );
}
ListTable.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.string).isRequired,
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  link: PropTypes.string,
};
ListTable.defaultProps = {
  link: null,
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
  }
  li {
    flex-grow: 1;
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
  .column {
    &:hover {
      background-color: #c4c4c4;
    }
  }
`;
