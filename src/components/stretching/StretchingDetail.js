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
} from '../../dataList/selectboxOptions';
import Center from '../common/elements/Center';

function StretchingDetail({
  idx,
  title,
  youtubeUrl,
  image,
  mainBody,
  subBody,
  tool,
  posture,
  effect,
  contents,
  adminIdx,
  createAt,
  difficulty,
  isUpdate,
  onInputChange,
  handleDeleteModal,
  handleIsUpdate,
}) {
  return (
    <Main>
      <Content title={isUpdate ? '스트레칭 수정' : '스트레칭 상세'}>
        <InputTitle text="스트레칭 번호" />
        <StyledP>{idx}</StyledP>

        <InputTitle text="제목" />
        <Input name="title" value={title} onChange={onInputChange} readOnly={!isUpdate} />

        <InputTitle text="신체부위 - 상위 카테고리" />
        <SelectBox options={stretchingMainBody} name="mainBody" value={mainBody} readOnly={!isUpdate} />

        <InputTitle text="신체부위 - 하위 카위고리" />
        <SelectBox options={stretchingSubBody} name="subBody" value={subBody} readOnly={!isUpdate} />

        <InputTitle text="도구" />
        <SelectBox options={stretchingTool} name="tool" value={tool} readOnly={!isUpdate} />

        <InputTitle text="자세" />
        <SelectBox options={stretchingPosture} name="posture1" value={posture[0]} readOnly={!isUpdate} />
        <SelectBox options={stretchingPosture} name="posture2" value={posture[1]} readOnly={!isUpdate} />
        <SelectBox options={stretchingPosture} name="posture3" value={posture[2]} readOnly={!isUpdate} />

        <InputTitle text="효과" />
        <SelectBox options={stretchingEffect} name="effect1" value={effect[0]} readOnly={!isUpdate} />
        <SelectBox options={stretchingEffect} name="effect2" value={effect[1]} readOnly={!isUpdate} />
        <SelectBox options={stretchingEffect} name="effect3" value={effect[2]} readOnly={!isUpdate} />

        <InputTitle text="설명" />
        <pre dangerouslySetInnerHTML={{ __html: contents }} />

        <InputTitle text="유튜브 링크" />
        <Input name="youtubeUrl" value={youtubeUrl} onChange={onInputChange} disalbed={!isUpdate} />

        <InputTitle text="대표 이미지" />
        <Input name="image" value={image} onChange={onInputChange} disalbed={!isUpdate} />

        <InputTitle text="작성자" />
        <StyledP>{adminIdx}</StyledP>

        <InputTitle text="등록일" />
        <StyledP>{createAt}</StyledP>

        <InputTitle text="난이도" />
        <StyledP>{difficulty}</StyledP>

        <Center>
          <Button text="수정하기" click={handleIsUpdate} />
          <Button text="삭제하기" click={handleDeleteModal} />
        </Center>
      </Content>
    </Main>
  );
}

StretchingDetail.propTypes = {
  idx: PropTypes.number,
  title: PropTypes.string,
  youtubeUrl: PropTypes.string,
  image: PropTypes.string,
  contents: PropTypes.string,
  mainBody: PropTypes.number,
  subBody: PropTypes.number,
  tool: PropTypes.number,
  posture: PropTypes.arrayOf(PropTypes.object),
  effect: PropTypes.arrayOf(PropTypes.object),
  adminIdx: PropTypes.number,
  createAt: PropTypes.string,
  difficulty: PropTypes.number,
  isUpdate: PropTypes.bool,
  onInputChange: PropTypes.func,
  handleDeleteModal: PropTypes.func.isRequired,
  handleIsUpdate: PropTypes.func.isRequired,
};

StretchingDetail.defaultProps = {
  idx: null,
  title: '',
  youtubeUrl: '',
  image: '',
  contents: '',
  mainBody: 0,
  subBody: 0,
  tool: 0,
  posture: [0, 0, 0],
  effect: [0, 0, 0],
  adminIdx: null,
  createAt: '',
  difficulty: null,
  isUpdate: false,
  onInputChange: () => {},
};

export default React.memo(StretchingDetail);

const StyledP = styled.p`
  width: 100%;
  height: 40px;
  border: 1px solid gray;
  border-radius: 10px;
  padding: 0 10px;
  line-height: 40px;
`;
