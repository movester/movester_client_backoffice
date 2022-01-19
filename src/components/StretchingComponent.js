import React from 'react';
import MainComponent from './utils/Main';
import ContentComponent from './utils/Content';
import ListSearch from './userList/ListSearch';
import ListTable from './userList/ListTable';
import StetchingOptionsWrap from './stretching/StetchingOptions';
import SelectBox from './userList/SelectBox';
import TableNumbering from './userList/TableNumbering';

const users = [
  {
    id: '1333',
    title: '팔 벌려뛰기',
    part: '상체>목/어깨',
    posture: '서서,앉아서',
    efect: '거북목, 일자목',
    level: '1.0',
  },
  {
    id: '333',
    title: '팔 벌려뛰기',
    part: '상체>목/어깨',
    posture: '서서,앉아서',
    efect: '거북목, 일자목',
    level: '1.0',
  },
  {
    id: '22',
    title: '팔 벌려뛰기',
    part: '상체>목/어깨',
    posture: '서서,앉아서',
    efect: '거북목, 일자목',
    level: '1.0',
  },
  {
    id: '1',
    title: '팔 벌려뛰기',
    part: '상체>목/어깨',
    posture: '서서,앉아서',
    efect: '거북목, 일자목',
    level: '1.0',
  },
  {
    id: '4',
    title: '팔 벌려뛰기',
    part: '상체>목/어깨',
    posture: '서서,앉아서',
    efect: '거북목, 일자목',
    level: '1.0',
  },
  {
    id: '5',
    title: '팔 벌려뛰기',
    part: '상체>목/어깨',
    posture: '서서,앉아서',
    efect: '거북목, 일자목',
    level: '1.0',
  },
  {
    id: '6',
    title: '팔 벌려뛰기',
    part: '상체>목/어깨',
    posture: '서서,앉아서',
    efect: '거북목, 일자목',
    level: '1.0',
  },
  {
    id: '7',
    title: '팔 벌려뛰기',
    part: '상체>목/어깨',
    posture: '서서,앉아서',
    efect: '거북목, 일자목',
    level: '1.0',
  },
  {
    id: '8',
    title: '팔 벌려뛰기',
    part: '상체>목/어깨',
    posture: '서서,앉아서',
    efect: '거북목, 일자목',
    level: '1.0',
  },
  {
    id: '9',
    title: '팔 벌려뛰기',
    part: '상체>목/어깨',
    posture: '서서,앉아서',
    efect: '거북목, 일자목',
    level: '1.0',
  },
];

const stretchingListOptions = [
  { value: 'name', name: '부위-대분류' },
  { value: 'title', name: '부위-소분류' },
  { value: 'part', name: '부위-자세' },
  { value: 'posture', name: '효과' },
  { value: 'efect', name: '도구' },
];

const userListOptions = [
  { value: 'name', name: '이름' },
  { value: 'number', name: '번호' },
  { value: 'email', name: '이메일' },
];
const UserHeaders = ['#', '제목', '부위', '자세', '효과', '난이도'];

function StretchingComponent() {
  return (
    <MainComponent>
      <ContentComponent title="스트레칭 리스트">
        <StetchingOptionsWrap>
          <SelectBox options={stretchingListOptions} />
          <SelectBox options={stretchingListOptions} />
          <SelectBox options={stretchingListOptions} />
          <SelectBox options={stretchingListOptions} />
          <SelectBox options={stretchingListOptions} />
        </StetchingOptionsWrap>
        <ListSearch options={userListOptions} />
        <ListTable headers={UserHeaders} users={users} />
        <TableNumbering />
      </ContentComponent>
    </MainComponent>
  );
}

export default StretchingComponent;
