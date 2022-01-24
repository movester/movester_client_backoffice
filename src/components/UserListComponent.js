import React from 'react';
import styled from 'styled-components';
import Main from './utils/Main';
import Content from './utils/Content';
import SelectBox from './utils/SelectBox';
import Button from './utils/Button';
import ListTable from './utils/ListTable';
import TableNumbering from './utils/ListTableNumbering';
import UserCount from './user/UserCount';
import { userListOptions } from '../dataList/selectboxOptions';
import Input from './utils/Input';
import { UserListHeaders } from '../dataList/listTableHeaders';

const users = [
  {
    id: '1',
    email: 'ysh1111@gmail.com',
    name: '유송현1',
    age: '9',
    sholder: '22.5',
    legs: '10',
  },
  {
    id: '2',
    email: 'ysh2222@gmail.com',
    name: '유송현2',
    age: '17',
    sholder: '10.5',
    legs: '10',
  },
  {
    id: '3',
    email: 'ysh3333@gmail.com',
    name: '유송현3',
    age: '20',
    sholder: '28.5',
    legs: '8',
  },
  {
    id: '4',
    email: 'ysh4444@gmail.com',
    name: '유송현4',
    age: '45',
    sholder: '24.5',
    legs: '87',
  },
  {
    id: '5',
    email: 'ysh5555@gmail.com',
    name: '유송현5',
    age: '36',
    sholder: '72.5',
    legs: '25',
  },
  {
    id: '6',
    email: 'ysh6666@gmail.com',
    name: '유송현6',
    age: '39',
    sholder: '42.5',
    legs: '67',
  },
  {
    id: '7',
    email: 'ysh7777@gmail.com',
    name: '유송현7',
    age: '37',
    sholder: '23.5',
    legs: '26',
  },
  {
    id: '8',
    email: 'ysh8888@gmail.com',
    name: '유송현8',
    age: '38',
    sholder: '29.5',
    legs: '27',
  },
];

function UserList() {
  return (
    <Main>
      <Content title="총 사용자 수" type="half">
        <UserCount list={users} />
      </Content>
      <Content title="사용자 리스트">
        <StyledListSearch>
          <SelectBox color="white" options={userListOptions} />
          <Input />
          <SelectBox options={userListOptions} />
          <SelectBox options={userListOptions} />
          <Button text="검색" type="search" />
        </StyledListSearch>
        <ListTable headers={UserListHeaders} bodies={users} />
        <TableNumbering />
      </Content>
    </Main>
  );
}

export default UserList;

const StyledListSearch = styled.section`
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
