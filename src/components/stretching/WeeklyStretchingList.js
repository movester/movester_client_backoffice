import React from 'react';
import styled from 'styled-components';

import TableNumbering from '../common/elements/ListTableNumbering';
import Button from '../common/button/Button';
import Content from '../common/Content';
import Main from '../common/Main';

function WeeklyStretchingList() {
  const headers = ['#', '제목', '등록일'];
  const lists = [
    { id: 1, title: '거북목 효과적인 애', createdAt: '2021.05.21' },
    { id: 2, title: '거북목 효과적인 애', createdAt: '2021.05.21' },
    { id: 3, title: '거북목 효과적인 애', createdAt: '2021.05.21' },
    { id: 4, title: '거북목 효과적인 애', createdAt: '2021.05.21' },
    { id: 5, title: '거북목 효과적인 애', createdAt: '2021.05.21' },
    { id: 6, title: '거북목 효과적인 애', createdAt: '2021.05.21' },
    { id: 7, title: '거북목 효과적인 애', createdAt: '2021.05.21' },
    { id: 8, title: '거북목 효과적인 애', createdAt: '2021.05.21' },
    { id: 9, title: '거북목 효과적인 애', createdAt: '2021.05.21' },
    { id: 10, title: '거북목 효과적인 애', createdAt: '2021.05.21' },
  ];

  return (
    <Main>
      <Content title="일주일 추천 노출 관리">
        <SubTitle>
          <h2>노출중인 루틴</h2>
        </SubTitle>
        <ButtonWrapper>
          <Button type="stretching" text="거북목 효과적인 예" />
          <Button type="search" text="검색" />
        </ButtonWrapper>
      </Content>
      <Content title="일주일 추천 리스트">
        <StyledListTable>
          <ul>
            {headers.map(header => (
              <li key={header}>{header}</li>
            ))}
          </ul>
          {lists.map(list => (
            <ul key={list.id ? list.id : list.month}>
              {Object.values(list).map(item => (
                <li key={item.id}>{item}</li>
              ))}
            </ul>
          ))}
        </StyledListTable>
        <TableNumbering />
      </Content>
    </Main>
  );
}

export default WeeklyStretchingList;

const StyledListTable = styled.section`
  margin-top: 20px;
  ul {
    display: flex;
    border-bottom: 1px solid #c4c4c4;
    // cursor: pointer;
  }
  ul:hover {
    background-color: gray;
  }
  ul li:first-child {
    width: 7%;
    flex-grow: 0;
  }
  ul li:nth-child(2) {
    width: 13%;
    flex-grow: 2;
  }

  li {
    flex-grow: 1;
    width: 10%;
    padding: 10px 5px;
    text-align: left;
  }
  div {
    margin-top: 15px;
  }
  span {
    color: ${({ theme }) => theme.darkPulple};
    margin-right: 10px;
    cursor: pointer;
  }
`;

const SubTitle = styled.div`
  margin-bottom: 8px;

  h2 {
    font-size: 24px;
    font-weight: 700;
    margin-left: 20px;
  }
`;
const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  .stretching {
    margin: 20px;
  }
  .search {
    margin-left: 20px;
  }
`;
