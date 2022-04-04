import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Main from '../common/Main';
import Content from '../common/Content';
import Button from '../common/button/Button';
import Input from '../common/elements/Input';
import InputTitle from '../common/elements/InputTitle';
import Center from '../common/elements/Center';
import QuillEditor from '../editor/Editor';

function CreateStretching({ title, contents, handleEditor, onChange, onSubmit }) {
  return (
    <Main>
      <Content title="스트레칭 등록">
        <InputTitle text="제목" />
        <Input name="title" value={title} onChange={onChange} />
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
        <InputTitle text="유튜브 링크" />
        <Input name="tool" value={title} onChange={onChange} />


          <InputTitle text="설명" />
          <QuillEditor contents={contents} value={contents} handleEditor={handleEditor} />

          <Center>
          <Button text="등록하기" click={onSubmit} />
        </Center>
      </Content>
    </Main>
  );
}

CreateStretching.propTypes = {
  title: PropTypes.string.isRequired,
  contents: PropTypes.string.isRequired,
  handleEditor: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default React.memo(CreateStretching);

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

const StyledTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  margin: 20px 0;
`;
