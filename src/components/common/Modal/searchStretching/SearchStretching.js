import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SelectBox from '../../elements/SelectBox';
import Input from '../../elements/Input';
import Pagination from '../../Pagination';
import { mainBodyEnum, subBodyEnum, postureEnum, effectEnum } from '../../../../util/stretchingEnum';
import {
  stretchingMainBody,
  stretchingSearchOptions,
  stretchingSubBody,
  stretchingEffect,
  stretchingPosture,
  stretchingTool,
} from '../../../../util/selectboxOptions';
import { stretchingListHeaders } from '../../../../util/listTableHeaders';

function SearchStretching({
  stretchings,
  title,
  mainBody,
  subBody,
  posture,
  effect,
  tool,
  onTitleChange,
  onSelectChange,
  total,
  page,
  setPage,
  handleWeekStretching,
  onClose,
}) {
  const offset = (page - 1) * 10;
  return (
    <>
      <StyledStretchingOptionsWrap>
        <SelectBox options={stretchingMainBody} name="mainBody" value={mainBody} onChange={onSelectChange} />
        <SelectBox options={stretchingSubBody} name="subBody" value={subBody} onChange={onSelectChange} />
        <SelectBox options={stretchingEffect} name="effect" value={effect} onChange={onSelectChange} />
        <SelectBox options={stretchingPosture} name="posture" value={posture} onChange={onSelectChange} />
        <SelectBox options={stretchingTool} name="tool" value={tool} onChange={onSelectChange} />
      </StyledStretchingOptionsWrap>
      <StyledListSearch>
        <SelectBox color="white" options={stretchingSearchOptions} />
        <Input name="title" value={title} onChange={onTitleChange} />
      </StyledListSearch>
      <StyledListTable>
        <ul>
          {stretchingListHeaders.map(header => (
            <li key={header}>{header}</li>
          ))}
        </ul>
        {stretchings.slice(offset, offset + 10).map(keyword => {
          const { stretchingIdx, title, mainBody, subBody, effect, posture, difficulty } = keyword;
          return (
            <ul
              key={stretchingIdx}
              className="column"
              onClick={() => {
                handleWeekStretching(stretchingIdx,title);
                onClose();
              }}
              onKeyPress={e => {
                if (e.key === 'Enter') console.log('수정하자');
              }}
            >
              <li>{stretchingIdx}</li>
              <li>{title}</li>
              <li>
                {mainBodyEnum[mainBody]} - {subBodyEnum[subBody]}
              </li>
              <li>{effect ? effect.map(v => effectEnum[v]).join(' / ') : "-"}</li>
              <li>{posture ? posture.map(v => postureEnum[v]).join(' / ') : "-"}</li>
              <li>{difficulty}</li>
            </ul>
          );
        })}
      </StyledListTable>
      <Pagination total={total} page={page} setPage={setPage} />
    </>
  );
}

SearchStretching.propTypes = {
  stretchings: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string.isRequired,
  mainBody: PropTypes.string.isRequired,
  subBody: PropTypes.string.isRequired,
  posture: PropTypes.string.isRequired,
  effect: PropTypes.string.isRequired,
  tool: PropTypes.string.isRequired,
  onTitleChange: PropTypes.func.isRequired,
  onSelectChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
  handleWeekStretching: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default SearchStretching;

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
  height: 400px;
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
