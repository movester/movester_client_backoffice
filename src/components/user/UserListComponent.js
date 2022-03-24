import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import axios from '../../services/defaultClient';
import Main from '../common/Main';
import Content from '../common/Content';
import Pagination from '../common/Pagination';
import SelectBox from '../common/elements/SelectBox';
import Button from '../common/button/Button';
import UserCount from '../common/elements/UserCount';
import { selectboxOptions } from '../../dataList/selectboxOptions';
import Input from '../common/elements/Input';

import { listHeaders } from '../../dataList/listTableHeaders';

function UserList() {
  const [users, setUser] = useState([]);
  const [total, setTotal] = useState(0);

  const [page, setPage] = useState(1);
  const [sort, setSort] = useState('JOIN');
  const [cnt, setCnt] = useState(0);
  const [type, setType] = useState('USER_IDX');
  const [value, setValue] = useState('');
  const [check, setCheck] = useState(true);

  const getUser = async () => {
    const userList = await (await axios.get(`/users/list?page=${page}&sort=${sort}`)).data.data;
    setUser(userList);
    setCnt(total);
  };

  const getUserSearch = async () => {
    const userSearch = await (await axios.get(`/users/search/?type=${type}&value=${value}&page=${page}`)).data.data;
    const { searchCnt, users: searchUser } = userSearch;
    setCnt(searchCnt);
    setUser(searchUser);
  };

  const getUserCnt = async () => {
    const userCnt = await (await axios.get('/users/count')).data.data[0].count;
    setTotal(userCnt);
    setCnt(userCnt);
  };

  useEffect(() => {
    getUserCnt();
  }, []);

  useEffect(() => {
    setPage(1);
    getUser();
  }, [sort]);

  useEffect(() => {
    if (check) getUserSearch();
    else getUser();
  }, [page]);

  const searchClick = async () => {
    setPage(1);
    setCheck(true);
    getUserSearch();
  };

  const sortSelect = e => {
    setCheck(false);
    setSort(e.target.value);
  };

  const inputChange = e => {
    setValue(e.target.value);
  };

  const selectOnChange = e => {
    setType(e.target.value);
  };

  return (
    <Main>
      <Content title="총 사용자 수" type="half">
        <UserCount cnt={total} />
      </Content>
      <Content title="사용자 리스트">
        <StyledListSearch onSubmit={e => e.preventDefault()}>
          <SelectBox color="white" options={selectboxOptions.userListSearch} value={type} onChange={selectOnChange} />
          <Input
            name="keyword"
            value={value}
            onChange={inputChange}
            onKeyPress={e => {
              if (e.key === 'Enter') searchClick(e);
            }}
          />
          <Button click={searchClick} text="검색" type="search" />
          <SelectBox options={selectboxOptions.userListSort} onChange={sortSelect} value={sort} />
        </StyledListSearch>

        <StyledListTable>
          <ul>
            {listHeaders.userlistHeader.map(header => (
              <li key={header}>{header}</li>
            ))}
          </ul>
          {users.map(keyword => {
            const { userIdx, email, name, attendPoint, createAt } = keyword;
            return (
              <Link key={userIdx} to={`/user/${userIdx}`}>
                <ul key={userIdx} className="column">
                  <li>{userIdx}</li>
                  <li>{name}</li>
                  <li>{email}</li>
                  <li>{createAt}</li>
                  <li>{attendPoint}</li>
                </ul>
              </Link>
            );
          })}
        </StyledListTable>
        <Pagination total={cnt} page={page} setPage={setPage} />
      </Content>
    </Main>
  );
}

export default UserList;

const StyledListSearch = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  * {
    margin-right: 40px;
  }
  input {
    padding: 5px 30px 5px 10px;
    width: 40%;
    border-radius: 10px;
    outline: 0 none;
    border: 2px solid #615b5b;
  }
  input:focus {
    outline: 1px solid ${({ theme }) => theme.darkPulple};
  }
  .search {
    margin-right: 40px;
  }
`;
const StyledListTable = styled.section`
  margin-top: 20px;
  ul {
    display: flex;
    border-bottom: 1px solid #c4c4c4;
  }
  li {
    flex-grow: 1;
    width: 10%;
    padding: 10px 5px;
    text-align: center;
  }
  ul li:first-child {
    width: 5%;
    flex-grow: 0;
  }
  ul li:nth-child(3) {
    width: 10%;
    flex-grow: 2;
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
