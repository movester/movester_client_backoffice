import React from 'react';
import styled from 'styled-components';

import Button from '../common/button/Button';
import Main from '../common/Main';
import Content from '../common/Content';
import InputTitle from '../common/elements/InputTitle';
import Winner from '../common/Winner';
import RegisterWinner from './RegisterWinner';
import SelectBox from '../common/elements/SelectBox';
import InputBox from '../common/elements/InputBox';
import ContentBox from '../common/elements/ContentBox';

function EventDetail() {
  return (
    <>
      <Main>
        <Content title="1번 이벤트">
          <DetailWrapper>
            <InputTitle text="처리상태" />
            <SelectBox
              options={[
                { value: 'progress', name: '진행중' },
                { value: 'deadline', name: '마감' },
              ]}
            />
            <InputTitle text="작성자" />
            <InputBox>뭅대장</InputBox>
            <InputTitle text="작성일" />
            <InputBox>2021.04.15</InputBox>
            <InputTitle text="제목" />
            <InputBox>5월 출석 이벤트</InputBox>
            <InputTitle text="기간" />
            <SelectBox options={[{ value: 'start', name: '2021.05.21' }]} />
            &nbsp;&nbsp;~&nbsp;&nbsp;
            <SelectBox options={[{ value: 'end', name: '2021.05.31' }]} />
            <InputTitle text="당첨자 유무" />
            <SelectBox
              options={[
                { value: 'on', name: '있음' },
                { value: 'off', name: '없음' },
              ]}
            />
            <InputTitle text="설명" />
            <ContentBox>설명설명</ContentBox>
            <InputTitle text="대표 이미지" />
            <div />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Button text="수정하기" />
              <Button text="삭제하기" />
            </div>
          </DetailWrapper>
        </Content>
      </Main>
      <Winner />
      <RegisterWinner />
    </>
  );
}

export default EventDetail;

const DetailWrapper = styled.div``;
