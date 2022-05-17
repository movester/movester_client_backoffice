import React from 'react';
import styled from 'styled-components';
import MainComponent from '../common/Main';
import ContentComponent from '../common/Content';
import ListTable from '../common/elements/ListTable';
import SelectBox from '../common/elements/SelectBox';
import Button from '../common/button/Button';
import TableNumbering from '../common/elements/ListTableNumbering';
import { EventListHeaders } from '../../util/listTableHeaders';
import { eventListSearch1, eventListSearch2 } from '../../util/selectboxOptions';

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
        <ListTable headers={EventListHeaders} columns={users} />
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
