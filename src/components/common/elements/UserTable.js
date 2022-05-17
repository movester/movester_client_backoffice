import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import readOnlyBlur from '../../../util/readOnlyBlur';

function UserTable({ headers, columns, link }) {
  const adminRank = useSelector(state => state.auth.admin?.rank);
  return (
    <StyledUserTable>
      <ul>
        {headers.map(header => (
          <li key={header}>{header}</li>
        ))}
      </ul>
      {columns.map(column => {
        const { userIdx, email, name, kakaoId, isEmailAuth, createAt } = column;

        return link ? (
          <Link key={userIdx} to={`/${link}/${userIdx}`}>
            <ul className="column" key={userIdx}>
              {Object.values(column).map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Link>
        ) : (
          <ul key={userIdx}>
            <li>{userIdx}</li>
            <li>{readOnlyBlur(name, adminRank) || '-'}</li>
            <li>{readOnlyBlur(email, adminRank) || '-'}</li>
            <li>{readOnlyBlur(kakaoId, adminRank) || '-'}</li>
            <li>{isEmailAuth ? '인증 완료' : '미인증'}</li>
            <li>{createAt}</li>
          </ul>
        );
      })}
    </StyledUserTable>
  );
}
UserTable.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.string).isRequired,
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  link: PropTypes.string,
};
UserTable.defaultProps = {
  link: null,
};

export default UserTable;

const StyledUserTable = styled.section`
  margin-top: 20px;
  ul {
    display: flex;
    border-bottom: 1px solid #c4c4c4;
  }
  li {
    width: 20%;
    padding: 10px 5px;
    text-align: center;
    &:nth-child(1) {
      width: 5%;
    }
    &:nth-child(2) {
      width: 15%;
    }
  }
`;
