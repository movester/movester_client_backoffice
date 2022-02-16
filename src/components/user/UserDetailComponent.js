import React from 'react';
import styled from 'styled-components';
import ListTable from '../common/elements/ListTable';
import Main from '../common/Main';
import Content from '../common/Content';
import Year from '../common/elements/Year';
import Button from '../common/button/Button';
import Center from '../common/elements/Center';
import { UserListHeaders, UserDetailRecord, UserDetailAttendance } from '../../dataList/listTableHeaders';

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

function UserDetail() {
  return (
    <div>
      <Main>
        <Content title="사용자 상세#543333">
          <ListTable headers={UserListHeaders} bodies={users} />
        </Content>
        <StyledUserDetail>
          <Content title="출석 포인트" type="half">
            <Year Date="2021" />
            <ListTable ratio="half" headers={UserDetailRecord} bodies={point} />
          </Content>
          <Content title="기록" type="half">
            <Year Date="2021" />
            <ListTable headers={UserDetailAttendance} bodies={record} />
          </Content>
        </StyledUserDetail>
        <Center>
          <Button text="계정 삭제" />
        </Center>
      </Main>
    </div>
  );
}

export default UserDetail;

const StyledUserDetail = styled.section`
  display: flex;
  div {
    margin-bottom: 0;
  }
  div:nth-child(1) {
    margin-right: 50px;
  }
  li {
    flex-grow: 1;
    text-align: center;
  }
  ul li:nth-child(1) {
    width: auto;
    flex-grow: 1;
  }
  ul li:nth-child(2) {
    width: auto;
    flex-grow: 1;
  }
`;
