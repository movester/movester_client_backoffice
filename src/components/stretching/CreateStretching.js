import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Main from '../common/Main';
import Content from '../common/Content';
import Button from '../common/button/Button';
import Input from '../common/elements/Input';
import InputTitle from '../common/elements/InputTitle';
import SelectBox from '../common/elements/SelectBox';
import {
  stretchingMainBody,
  stretchingSubBody,
  stretchingEffect,
  stretchingPosture,
  stretchingTool,
} from '../../util/selectboxOptions';
import Center from '../common/elements/Center';
import QuillEditor from '../editor/Editor';

function CreateStretching({
  title,
  titleMessage,
  youtubeUrl,
  mainBody,
  subBody,
  tool,
  posture1,
  posture2,
  posture3,
  effect1,
  effect2,
  effect3,
  onSelectChange,
  contents,
  handleEditor,
  onInputChange,
  onSubmit,
  handleFileInput,
}) {
  return (
    <Main>
      <Content title="스트레칭 등록">
        <InputTitle text="제목" />
        <Input name="title" value={title} onChange={onInputChange} />
        <StyledP>{titleMessage}</StyledP>

        <InputTitle text="신체부위 - 상위 카테고리" />
        <SelectBox options={stretchingMainBody} name="mainBody" value={mainBody} onChange={onSelectChange} />

        <InputTitle text="신체부위 - 하위 카위고리" />
        <SelectBox options={stretchingSubBody} name="subBody" value={subBody} onChange={onSelectChange} />

        <InputTitle text="도구" />
        <SelectBox options={stretchingTool} name="tool" value={tool} onChange={onSelectChange} />

        <InputTitle text="자세" />
        <SelectBox options={stretchingPosture} name="posture1" value={posture1} onChange={onSelectChange} />
        <SelectBox options={stretchingPosture} name="posture2" value={posture2} onChange={onSelectChange} />
        <SelectBox options={stretchingPosture} name="posture3" value={posture3} onChange={onSelectChange} />

        <InputTitle text="효과" />
        <SelectBox options={stretchingEffect} name="effect1" value={effect1} onChange={onSelectChange} />
        <SelectBox options={stretchingEffect} name="effect2" value={effect2} onChange={onSelectChange} />
        <SelectBox options={stretchingEffect} name="effect3" value={effect3} onChange={onSelectChange} />

        <InputTitle text="설명" />
        <QuillEditor contents={contents} value={contents} handleEditor={handleEditor} />

        <InputTitle text="유튜브 링크" />
        <Input name="youtubeUrl" value={youtubeUrl} onChange={onInputChange} />

        <InputTitle text="대표 이미지" />
        <Input type="file" onChange={handleFileInput} />
        <Center>
          <Button text="등록하기" click={onSubmit} />
        </Center>
      </Content>
    </Main>
  );
}

CreateStretching.propTypes = {
  title: PropTypes.string.isRequired,
  titleMessage: PropTypes.string,
  youtubeUrl: PropTypes.string.isRequired,
  contents: PropTypes.string.isRequired,
  mainBody: PropTypes.string.isRequired,
  subBody: PropTypes.string.isRequired,
  tool: PropTypes.string.isRequired,
  posture1: PropTypes.string.isRequired,
  posture2: PropTypes.string.isRequired,
  posture3: PropTypes.string.isRequired,
  effect1: PropTypes.string.isRequired,
  effect2: PropTypes.string.isRequired,
  effect3: PropTypes.string.isRequired,
  onSelectChange: PropTypes.func.isRequired,
  handleEditor: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  handleFileInput: PropTypes.func.isRequired,
};

CreateStretching.defaultProps = {
  titleMessage: '',
};

export default React.memo(CreateStretching);

const StyledP = styled.p`
  font-size: 12px;
  color: red;
  padding-left: 12px;
  margin: 5px 0 20px 0;
  text-align: left;
`;