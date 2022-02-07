import React from 'react';
import styled from 'styled-components';
import Button from '../common/elements/Button';
import Content from '../common/Content';
import InputBox from '../common/elements/InputBox';
import Main from '../common/Main';
import SelectBox from '../common/elements/SelectBox';

function RegisterWinner() {
  return (
    <Main>
      <Content title="당첨자 등록">
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button text="추가" type="search" style={{ marginRight: '10px' }} />
          {/* 공백 태그 임시 방안 */}
          &nbsp;&nbsp;&nbsp;&nbsp;
          {/* TODO: 등수 상태에 따라 1등 2등 3등 출력 */}
          <SelectBox
            style={{ marginLeft: '10px' }}
            options={[
              { value: 'on', name: '있음' },
              { value: 'off', name: '없음' },
            ]}
          />
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <StyledTitle>1등</StyledTitle>
          <InputBox type="half">abcd@abcd.com</InputBox>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <StyledTitle>2등</StyledTitle>
          <InputBox type="half">abcd@abcd.com</InputBox>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <StyledTitle>3등</StyledTitle>
          <InputBox type="half">abcd@abcd.com</InputBox>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button text="수정하기" />
        </div>
      </Content>
    </Main>
  );
}

export default RegisterWinner;

const StyledTitle = styled.span`
  min-width: 50px;
  font-size: 16px;
  font-weight: 700;
`;
