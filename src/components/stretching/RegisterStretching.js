import React, { useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { changeField, clearField } from '../../store/stretching/wirteSlice';

import Main from '../common/Main';
import Content from '../common/Content';
import Button from '../common/button/Button';
import Editor from '../editor/Editor';

// useMemo : 컴포넌트 최적화

function RegisterStretching() {
  const dispatch = useDispatch();
  const { title, content } = useSelector(({ write }) => ({
    title: write.title,
    content: write.content,
  }));

  const onChangeField = useCallback(payload => dispatch(changeField(payload)), [dispatch]);

  const onChangeInput = e => {
    dispatch(onChangeField({ key: 'title', value: e.target.value }));
  };

  useEffect(
    () => () => {
      dispatch(clearField());
    },
    [dispatch],
  );

  return (
    <Main>
      <Content title="스트레칭 등록">
        <div>
          <StyledTitle>제목</StyledTitle>
          <StyledInput type="text" value={title} onChange={onChangeInput} />
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
          <Editor content={content} onChangeField={onChangeField} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button text="등록하기" />
        </div>
      </Content>
    </Main>
  );
}

export default React.memo(RegisterStretching);

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
