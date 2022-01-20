import React from 'react';
import styled from 'styled-components';
import MainComponent from './utils/Main';
import ContentComponent from './utils/Content';
import ListTable from './utils/ListTable';
import SelectBox from './utils/SelectBox';
import Button from './utils/Button';
import TableNumbering from './utils/ListTableNumbering';
import { EventListHeaders } from '../dataList/listTableHeaders';
import { eventListSearch1, eventListSearch2 } from '../dataList/selectboxOptions';

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

function EventList() {
  return (
    <MainComponent>
      <ContentComponent title="이벤트 리스트">
        <StyledEventSearch>
          <SelectBox options={eventListSearch1} />
          <SelectBox options={eventListSearch2} />
          <Button text="검색" type="search" />
        </StyledEventSearch>
        <ListTable headers={EventListHeaders} bodies={users} />
        <TableNumbering />
      </ContentComponent>
    </MainComponent>
  );
}

export default EventList;

const StyledEventSearch = styled.section`
  display: flex;
  select {
    margin-right: 30px;
    :last-child {
      margin-right: 0;
    }
  }
`;
