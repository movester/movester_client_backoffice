import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Main from '../common/Main';
import Content from '../common/Content';
import SelectBox from '../common/elements/SelectBox';
import TableNumbering from '../common/elements/ListTableNumbering';
import Button from '../common/button/Button';
import { mainBodyEnum, subBodyEnum, postureEnum, effectEnum } from '../../dataList/stretchingEnum';
import {
  stretchingMainBody,
  stretchingSearchOptions,
  stretchingSubBody,
  stretchingEffect,
  stretchingPosture,
  stretchingTool,
} from '../../dataList/selectboxOptions';
import { stretchingListHeaders } from '../../dataList/listTableHeaders';

function StretchingList({ stretchings }) {
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
        <StyledListTable>
          <ul>
            {stretchingListHeaders.map(header => (
              <li key={header}>{header}</li>
            ))}
          </ul>
          {stretchings.map(keyword => {
            const { stretchingIdx, title, mainBody, subBody, effect, posture, difficulty } = keyword;
            return (
              <Link key={stretchingIdx} to={`/stretching/${stretchingIdx}`}>
                <ul key={stretchingIdx} className="column">
                  <li>{stretchingIdx}</li>
                  <li>{title}</li>
                  <li>
                    {mainBodyEnum[mainBody]} - {subBodyEnum[subBody]}
                  </li>
                  <li>{effect.map(v => effectEnum[v]).join(' / ')}</li>
                  <li>{posture.map(v => postureEnum[v]).join(' / ')}</li>
                  <li>{difficulty}</li>
                </ul>
              </Link>
            );
          })}
        </StyledListTable>
        <TableNumbering />
      </Content>
    </Main>
  );
}

StretchingList.propTypes = {
  stretchings: PropTypes.arrayOf(PropTypes.object).isRequired,
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

const StyledListTable = styled.section`
  margin-top: 20px;
  ul {
    display: flex;
    border-bottom: 1px solid #c4c4c4;
  }
  li {
    flex-grow: 1;
    width: 10%;
    padding: 10px 5px;
    text-align: center;
  }
  ul li:first-child {
    width: 5%;
    flex-grow: 0;
  }
  ul li:nth-child(3) {
    width: 10%;
    flex-grow: 2;
  }

  div {
    margin-top: 15px;
  }
  span {
    color: ${({ theme }) => theme.darkPulple};
    margin-right: 10px;
    cursor: pointer;
  }
  .column {
    &:hover {
      background-color: #c4c4c4;
    }
  }
`;
