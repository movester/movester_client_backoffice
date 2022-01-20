import React from 'react';
import ListTable from './userList/ListTable';
import Main from './utils/Main';
import Content from './utils/Content';
import UserDetail from './userList/UserDetail';
import Year from './userList/Year';
import Button from './utils/Button';
import Center from './utils/Center';

const users = [
  {
    id: '1',
    email: 'ysh1111@gmail.com',
    name: '유송현1',
    age: '9',
    sholder: '22.5',
    legs: '10',
  },
];

const UserHeaders = ['#', '이메일', '이름', '출석포인트', '성별', '나이'];

const check = ['월', '포인트'];
const point = [
  { month: '1월', point: '10' },
  { month: '2월', point: '20' },
  { month: '3월', point: '30' },
  { month: '4월', point: '40' },
  { month: '5월', point: '50' },
  { month: '6월', point: '60' },
  { month: '7월', point: '70' },
  { month: '8월', point: '80' },
  { month: '9월', point: '90' },
  { month: '10월', point: '100' },
  { month: '11월', point: '110' },
  { month: '12월', point: '120' },
];

const recordHeader = ['월', '어깨', '다리'];

const record = [
  { month: '1월', sholder: '10', leg: '11' },
  { month: '2월', sholder: '20', leg: '22' },
  { month: '3월', sholder: '30', leg: '33' },
  { month: '4월', sholder: '40', leg: '44' },
  { month: '5월', sholder: '50', leg: '55' },
  { month: '6월', sholder: '60', leg: '66' },
  { month: '7월', sholder: '70', leg: '77' },
  { month: '8월', sholder: '80', leg: '81' },
  { month: '9월', sholder: '90', leg: '91' },
  { month: '10월', sholder: '100', leg: '101' },
  { month: '11월', sholder: '110', leg: '111' },
  { month: '12월', sholder: '120', leg: '121' },
];

function UserSpecificity() {
  return (
    <div>
      <Main>
        <Content title="사용자 상세#543333">
          <ListTable headers={UserHeaders} users={users} />
        </Content>
        <UserDetail>
          <Content title="출석 포인트" type="half">
            <Year Date="2021" />
            <ListTable headers={check} users={point} />
          </Content>
          <Content title="기록" type="half">
            <Year Date="2021" />
            <ListTable headers={recordHeader} users={record} />
          </Content>
        </UserDetail>
        <Center>
          <Button text="계정 삭제" />
        </Center>
      </Main>
    </div>
  );
}

export default UserSpecificity;
