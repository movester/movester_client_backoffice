import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function ListTable({ headers, columns, link, type }) {
  return (
    <StyledListTable className={type}>
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
                <li className={type} key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </Link>
        ) : (
          <ul key={column.id ? column.id : column.month}>
            {Object.values(column).map((item, index) => (
              <li key={index}>{item}</li>
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
  type: PropTypes.string,
};
ListTable.defaultProps = {
  link: null,
  type: null,
};

export default ListTable;

const StyledListTable = styled.section`
  margin-top: 20px;
  &.half {
    li {
      width: 50%;
    }
  }
  &.triple {
    li {
      width: 33.3%;
    }
  }
  ul {
    display: flex;
    border-bottom: 1px solid #c4c4c4;
  }
  li {
    padding: 10px 5px;
    text-align: center;
  }
  .column {
    &:hover {
      background-color: #c4c4c4;
    }
  }
`;
