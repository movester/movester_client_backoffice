import React from 'react';
import styled from 'styled-components';
import Main from '../common/Main';
import Content from '../common/Content';
import SelectBox from '../common/elements/SelectBox';
import Button from '../common/button/Button';
import ListTable from '../common/elements/ListTable';
import TableNumbering from '../common/elements/ListTableNumbering';
import UserCount from '../common/elements/UserCount';
import { userListOptions } from '../../dataList/selectboxOptions';
import Input from '../common/elements/Input';
import { UserListHeaders } from '../../dataList/listTableHeaders';

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

function AdminListComponent() {
  // TODO: adminIdx가 1인 admin만 admin 삭제 버튼 보이도록, 본인 제외하고
  return (
    <Main>
      <Content title="총 관리자 수" type="half">
        <UserCount list={users} />
      </Content>
      <Content title="관리자 리스트">
        <StyledListSearch>
          <SelectBox color="white" options={userListOptions} />
          <Input />
          <Button text="검색" type="search" />
        </StyledListSearch>
        <ListTable headers={UserListHeaders} columns={users} />
        <TableNumbering />
      </Content>
    </Main>
  );
}

export default AdminListComponent;

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
