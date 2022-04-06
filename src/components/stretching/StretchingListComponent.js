import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Main from '../common/Main';
import Content from '../common/Content';
import ListTable from '../common/elements/ListTable';
import SelectBox from '../common/elements/SelectBox';
import TableNumbering from '../common/elements/ListTableNumbering';
import Button from '../common/button/Button';
import {
  stretchingMainBody,
  stretchingSearchOptions,
  stretchingSubBody,
  stretchingEffect,
  stretchingPosture,
  stretchingTool,
} from '../../dataList/selectboxOptions';
import { stretchingListHeaders } from '../../dataList/listTableHeaders';

function StretchingList({stretchings}) {
  return (
    <Main>
      <Content title="스트레칭 리스트">
        <StyledStretchingOptionsWrap>
          <SelectBox options={stretchingMainBody} />
          <SelectBox options={stretchingSubBody} />
          <SelectBox options={stretchingEffect} />
          <SelectBox options={stretchingPosture} />
          <SelectBox options={stretchingTool} />
        </StyledStretchingOptionsWrap>
        <StyledListSearch>
          <SelectBox color="white" options={stretchingSearchOptions} />
          <input />
          <Button text="검색" type="search" />
        </StyledListSearch>
        <ListTable headers={stretchingListHeaders} columns={stretchings} />
        <TableNumbering />
      </Content>
    </Main>
  );
}

StretchingList.propTypes = {
  stretchings: PropTypes.arrayOf(PropTypes.object),
};

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
