import React from 'react';
import styled from 'styled-components';
import Main from '../utils/Main';
import Content from '../utils/Content';
import Button from '../utils/Button';

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

function RegisterStretching() {
  return (
    <Main>
      <Content title="스트레칭 등록">
        <div>
          <h2>제목</h2>
          <StyledInput type="text" />
        </div>
        <div>
          <h2>부위</h2>
          <StyledSelect>
            <option value="">상체</option>
          </StyledSelect>
          <StyledSelect>
            <option value="">하체</option>
          </StyledSelect>
        </div>
        <div>
          <h2>자세</h2>
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
          <h2>효과</h2>
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
          <h2>도구</h2>
          <StyledSelect>
            <option value="">도구</option>
          </StyledSelect>
        </div>
        <div>
          <h2>유튜브 링크</h2>
          <StyledInput />
        </div>
        <div>
          <h2>설명</h2>
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
