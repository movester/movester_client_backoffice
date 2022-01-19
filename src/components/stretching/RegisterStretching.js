import React from 'react';
import styled from 'styled-components';
import Main from '../utils/Main';
import Content from '../utils/Content';
import Button from '../utils/Button';

function RegisterStretching() {
  return (
    <Main>
      <Content title="스트레칭 등록">
        <div>
          <StyledTitle>제목</StyledTitle>
          <StyledInput type="text" />
        </div>
        <div>
          <StyledTitle>부위</StyledTitle>
          <StyledSelect>
            <option value="">상체</option>
          </StyledSelect>
          <StyledSelect>
            <option value="">하체</option>
          </StyledSelect>
        </div>
        <div>
          <StyledTitle>자세</StyledTitle>
          <StyledSelect>
            <option value="">자세1</option>
          </StyledSelect>
          <StyledSelect>
            <option value="">자세2</option>
          </StyledSelect>
          <StyledSelect>
            <option value="">자세3</option>
          </StyledSelect>
        </div>
        <div>
          <StyledTitle>효과</StyledTitle>
          <StyledSelect>
            <option value="">효과1</option>
          </StyledSelect>
          <StyledSelect>
            <option value="">효과2</option>
          </StyledSelect>
          <StyledSelect>
            <option value="">효과3</option>
          </StyledSelect>
        </div>
        <div>
          <StyledTitle>도구</StyledTitle>
          <StyledSelect>
            <option value="">도구</option>
          </StyledSelect>
        </div>
        <div>
          <StyledTitle>유튜브 링크</StyledTitle>
          <StyledInput />
        </div>
        <div>
          <StyledTitle>설명</StyledTitle>
          {/* 에디터 */}
          <textarea style={{ width: '90%', height: '400px' }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button text="등록하기" />
        </div>
      </Content>
    </Main>
  );
}

export default RegisterStretching;

const StyledSelect = styled.select`
  width: 150px;
  border-radius: 10px;
  background: rgba(196, 196, 196, 1);
  text-align: center;
  padding: 5px;

  & + & {
    margin-left: 22px;
  }
`;

const StyledInput = styled.input`
  width: 70%;
  border-radius: 10px;
  padding: 5px;
`;

const StyledTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  margin: 20px 0;
`;
