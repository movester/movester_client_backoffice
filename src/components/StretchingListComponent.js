import React from 'react';
import styled from 'styled-components';
import Main from './utils/Main';
import Content from './utils/Content';
import ListTable from './utils/ListTable';
import SelectBox from './utils/SelectBox';
import TableNumbering from './utils/ListTableNumbering';
import Button from './utils/Button';
import {
  stretchingMainCatrgory,
  stretchingSearchOptions,
  stretchingSubCatrgory,
  stretchingEffect,
  stretchingPosture,
  stretchingTool,
} from '../dataList/selectboxOptions';
import { stretchingListHeaders } from '../dataList/listTableHeaders';

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

function StretchingList() {
  return (
    <Main>
      <Content title="스트레칭 리스트">
        <StyledStretchingOptionsWrap>
          <SelectBox options={stretchingMainCatrgory} />
          <SelectBox options={stretchingSubCatrgory} />
          <SelectBox options={stretchingEffect} />
          <SelectBox options={stretchingPosture} />
          <SelectBox options={stretchingTool} />
        </StyledStretchingOptionsWrap>
        <StyledListSearch>
          <SelectBox color="white" options={stretchingSearchOptions} />
          <input />
          <Button text="검색" type="search" />
        </StyledListSearch>
        <ListTable headers={stretchingListHeaders} bodies={users} />
        <TableNumbering />
      </Content>
    </Main>
  );
}

export default StretchingList;

const StyledListSearch = styled.section`
  width: 100%;
  display: flex;
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

const StyledStretchingOptionsWrap = styled.section`
  display: flex;
  margin-bottom: 20px;

  select {
    margin-right: 10px;
    flex-grow: 1;
    :last-child {
      margin-right: 0;
    }
  }
`;
