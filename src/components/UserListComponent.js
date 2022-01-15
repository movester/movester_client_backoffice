import React from 'react';
import ListSearch from './userList/ListSearch';
import ListTable from './userList/ListTable';
import MainComponent from './utils/MainComponent';
import ContentMini from './utils/ContentMini';
import ContentComponent from './utils/ContentComponent';
import UserCount from './userList/UserCount';

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

const UserHeaders = ['#', '이메일', '이름', '출석포인트', '성별', '나이'];

const userListOptions = [
  { value: 'name', name: '이름' },
  { value: 'number', name: '번호' },
  { value: 'email', name: '이메일' },
];

function UserList() {
  return (
    <MainComponent>
      <ContentMini title="총 사용자 수">
        <UserCount list={users} />
      </ContentMini>
      <ContentComponent title="사용자 리스트">
        <ListSearch options={userListOptions} />
        <ListTable headers={UserHeaders} users={users} />
      </ContentComponent>
    </MainComponent>
  );
}

export default UserList;
