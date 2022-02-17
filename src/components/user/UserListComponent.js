import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import axios from 'axios';
import Main from '../common/Main';
import Content from '../common/Content';
import SelectBox from '../common/elements/SelectBox';
import Button from '../common/elements/Button';
import UserCount from '../common/elements/UserCount';
import { selectboxOptions } from '../../dataList/selectboxOptions';
import Input from '../common/elements/Input';
import Pagination from '../common/Pagination';
import { listHeaders } from '../../dataList/listTableHeaders';
import axios from '../../services/defaultClient';

function UserList() {
  const [users, setUser] = useState([]);
  const [page, setPage] = useState(1);
  const [searchKeyword, setSearchKeyword] = useState([]);
  const [keyWord, setKeyWord] = useState({
    input: '',
    selectBox: 'user_idx',
  });

  const [limit] = useState(10);

  const offset = (page - 1) * limit;

  const getUser = async () => {
    const userList = await (await axios.get('/users')).data.data;
    setUser(userList);
    setSearchKeyword(userList);
  };

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    setSearchKeyword([...users.filter(user => `${user[keyWord.selectBox]}`.includes(keyWord.input))]);
  }, [keyWord]);

  const searchClick = async e => {
    const $form = e.target.closest('form');
    setKeyWord({
      ...keyWord,
      input: $form.keyword.value,
      selectBox: $form.test.options[$form.test.selectedIndex].value,
    });
  };
  // 테스트
  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //     .then(res => res.json())
  //     .then(data => {
  //       setUser(data);
  //       setSearchKeyword(data);
  //     });
  // }, []);

  return (
    <Main>
      <Content title="총 사용자 수" type="half">
        <UserCount list={users} />
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
          <SelectBox options={selectboxOptions.userListOptions} />
          <Button click={searchClick} text="검색" type="search" />
        </StyledListSearch>

        <StyledListTable>
          <ul>
            {listHeaders.userHeader.map(header => (
              <li key={header}>{header}</li>
            ))}
          </ul>
          {/* 테스트 */}
          {/* {users.slice(offset, offset + limit).map(({ id, title, body }) => (
            <Link key={id} to={`/user/${id}`}>
              <ul key={id} className="column">
                <li>{id}</li>
                <li>{title}</li>
                <li>{body}</li>
              </ul>
            </Link>
          ))} */}
          {searchKeyword.slice(offset, offset + limit).map(keyword => {
            const { user_idx, email, name, kakao_id, create_at, is_email_verify } = keyword;
            return (
              <Link key={user_idx} to={`/user/${user_idx}`}>
                <ul key={user_idx} className="column">
                  <li>{user_idx}</li>
                  <li>{name}</li>
                  <li>{email || '없음'}</li>
                  <li>{kakao_id || '없음'}</li>
                  <li>{is_email_verify ? 'O' : 'X'}</li>
                  <li>{create_at ? create_at.slice(0, 10) : '없음'}</li>
                </ul>
              </Link>
            );
          })}
        </StyledListTable>
        <Pagination total={searchKeyword.length} limit={limit} page={page} setPage={setPage} />
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
