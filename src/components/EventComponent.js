import React from 'react';
import MainComponent from './utils/Main';
import ContentComponent from './utils/Content';
import ListTable from './userList/ListTable';
import EventSearch from './Event/EventSearch';
import SelectBox from './userList/SelectBox';
import WhiteButtonComponent from './utils/WhiteButton';
import TableNumbering from './userList/TableNumbering';

const users = [
  {
    id: '1',
    title: '2021년 4월 출석왕 이벤트',
    date: '2021.04.01 ~ 2021.04.30',
    winning: '있음',
  },
  {
    id: '2',
    title: '2021년 4월 출석왕 이벤트',
    date: '2021.04.01 ~ 2021.04.30',
    winning: '있음',
  },
  {
    id: '3',
    title: '2021년 4월 출석왕 이벤트',
    date: '2021.04.01 ~ 2021.04.30',
    winning: '있음',
  },
];

const stretchingListOptions = [
  { value: 'name', name: '당첨자 유무' },
  { value: 'title', name: '부위-소분류' },
  { value: 'part', name: '부위-자세' },
  { value: 'posture', name: '효과' },
  { value: 'efect', name: '도구' },
];

const UserHeaders = ['#', '제목', '기간', '당첨자'];

function EventComponent() {
  return (
    <MainComponent>
      <ContentComponent title="이벤트 리스트">
        <EventSearch>
          <SelectBox options={stretchingListOptions} />
          <SelectBox options={stretchingListOptions} />
          <WhiteButtonComponent text="검색" />
        </EventSearch>
        <ListTable headers={UserHeaders} users={users} />
        <TableNumbering />
      </ContentComponent>
    </MainComponent>
  );
}

export default EventComponent;
