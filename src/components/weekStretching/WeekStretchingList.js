import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Main from '../common/Main';
import Content from '../common/Content';
import Pagination from '../common/Pagination';
import { weekStretchingListHeaders } from '../../util/listTableHeaders';

function WeekStretchingList({ weekStretchings, exposingStretching, total, page, setPage }) {
  const offset = (page - 1) * 10;
  return (
    <Main>
      <Content title="노출중인 일주일 스트레칭">
        <Link key={exposingStretching.weekIdx} to={`/weekStretching/${exposingStretching.weekIdx}`}>
          <ExposingStretching>{exposingStretching.title}</ExposingStretching>
        </Link>
      </Content>

      <Content title="일주일 스트레칭 리스트">
        <StyledListTable>
          <ul>
            {weekStretchingListHeaders.map(header => (
              <li key={header}>{header}</li>
            ))}
          </ul>
          {weekStretchings.slice(offset, offset + 10).map(keyword => {
            const { weekIdx, title, isExpose, createAt } = keyword;
            return (
              <Link key={weekIdx} to={`/weekStretching/${weekIdx}`}>
                <ul key={weekIdx} className="column">
                  <li>{weekIdx}</li>
                  <li>{title}</li>
                  <li>{isExpose ? 'O' : 'X'}</li>

                  <li>{createAt}</li>
                </ul>
              </Link>
            );
          })}
        </StyledListTable>
        <Pagination total={total} page={page} setPage={setPage} />
      </Content>
    </Main>
  );
}

WeekStretchingList.propTypes = {
  weekStretchings: PropTypes.arrayOf(PropTypes.object).isRequired,
  exposingStretching: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])).isRequired,
  page: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
};

export default WeekStretchingList;

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

const ExposingStretching = styled.p`
  font-size: 20px;
  margin-left: 70px;
`;
