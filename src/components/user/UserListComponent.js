import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Main from '../common/Main';
import Content from '../common/Content';
import SelectBox from '../common/elements/SelectBox';
import Button from '../common/elements/Button';
import UserCount from '../common/elements/UserCount';
import { selectboxOptions } from '../../dataList/selectboxOptions';
import Input from '../common/elements/Input';
import Pagination from '../common/Pagination';
import { listHeaders } from '../../dataList/listTableHeaders';
import axios from '../../lib/defaultClient';

function UserList() {
  const [users, setUser] = useState([]);
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState('JOIN');

  const [cnt, setCnt] = useState(0);

  // const [keyWord, setKeyWord] = useState({
  //   input: '',
  //   selectBox: 'user_idx',
  // });

  const getUser = async () => {
    const userList = await (await axios.get(`/users/list?page=${page}&sort=${sort}`)).data.data;
    console.log(userList);
    setUser(userList);
  };
  const getUserCnt = async () => {
    const userCnt = await (await axios.get('/users/count')).data.data[0].count;
    setCnt(userCnt);
  };

  useEffect(() => {
    getUserCnt();
  }, []);

  useEffect(() => {
    getUser();
  }, [page]);

  useEffect(() => {
    getUser();
  }, [sort]);

  const searchClick = async e => {
    // const $form = e.target.closest('form');
    // setKeyWord({
    //   ...keyWord,
    //   input: $form.keyword.value,
    //   selectBox: $form.test.options[$form.test.selectedIndex].value,
    // });
    console.log(e.target);
  };

  const handleSelect = e => {
    setSort(e.target.value);
  };
  // console.log(cnt);
  return (
    <Main>
      <Content title="총 사용자 수" type="half">
        <UserCount cnt={cnt} />
      </Content>
      <Content title="사용자 리스트">
        <StyledListSearch onSubmit={e => e.preventDefault()}>
          <SelectBox color="white" options={selectboxOptions.userListOptions} name="test" />
          <Input
            name="keyword"
            onKeyPress={e => {
              if (e.key === 'Enter') searchClick(e);
            }}
          />
          <SelectBox options={selectboxOptions.userListOptions} onChange={handleSelect} value={sort} />
          <Button click={searchClick} text="검색" type="search" />
        </StyledListSearch>

        <StyledListTable>
          <ul>
            {listHeaders.userHeader.map(header => (
              <li key={header}>{header}</li>
            ))}
          </ul>
          {users.map(keyword => {
            const { userIdx, email, name, attendPoint, attendCnt } = keyword;
            return (
              <Link key={userIdx} to={`/user/${userIdx}`}>
                <ul key={userIdx} className="column">
                  <li>{userIdx}</li>
                  <li>{name}</li>
                  <li>{email || '없음'}</li>
                  <li>{attendPoint}</li>
                  <li>{attendCnt}</li>
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
