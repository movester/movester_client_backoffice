import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Main from '../common/Main';
import Content from '../common/Content';
import Button from '../common/button/Button';
import InputTitle from '../common/elements/InputTitle';
import { mainBodyEnum, subBodyEnum, postureEnum, effectEnum, toolEnum } from '../../util/stretchingEnum';
import Center from '../common/elements/Center';

function StretchingDetail({ stretching, onLinkUpdate, handleDeleteModal }) {
  return (
    <Main>
      <Content title="스트레칭 상세">
        <InputTitle text="스트레칭 번호" />
        <StyledP>{stretching.stretchingIdx}</StyledP>
        <InputTitle text="제목" />
        <StyledP>{stretching.title}</StyledP>
        <InputTitle text="신체부위 - 상위 카테고리" />
        <StyledP>{mainBodyEnum[stretching.mainBody]}</StyledP>
        <InputTitle text="신체부위 - 하위 카위고리" />
        <StyledP>{subBodyEnum[stretching.subBody]}</StyledP>
        <InputTitle text="도구" />
        <StyledP>{toolEnum[stretching.tool]}</StyledP>
        <InputTitle text="자세" />
        {Object.keys(stretching.posture).length ? (
          stretching.posture.map(posture => <StyledP key={posture}>{postureEnum[posture]}</StyledP>)
        ) : (
          <StyledP />
        )}
        <InputTitle text="효과" />
        {Object.keys(stretching.effect).length ? (
          stretching.effect.map(effect => <StyledP key={effect}>{effectEnum[effect]}</StyledP>)
        ) : (
          <StyledP />
        )}
        <InputTitle text="설명" />
        <StyledPre dangerouslySetInnerHTML={{ __html: stretching.contents }} />
        <InputTitle text="유튜브 링크" />
        <StyledP>{stretching.youtube_url}</StyledP>
        <InputTitle text="대표 이미지" />
        <StyledImg
          src={`https://movester-bucket.s3.ap-northeast-2.amazonaws.com/${stretching.image}.png`}
          alt="대표 이미지"
        />
        <InputTitle text="작성자" />
        <StyledP>{stretching.adminIdx}</StyledP>
        <InputTitle text="등록일" />
        <StyledP>{stretching.createAt}</StyledP>
        <InputTitle text="난이도" />
        <StyledP>{stretching.difficulty}</StyledP>
        <Center>
          <Button text="수정하기" click={onLinkUpdate} />
          <Button text="삭제하기" click={handleDeleteModal} />
        </Center>
      </Content>
    </Main>
  );
}

StretchingDetail.propTypes = {
  stretching: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
    ]),
  ).isRequired,
  onLinkUpdate: PropTypes.func.isRequired,
  handleDeleteModal: PropTypes.func.isRequired,
};

export default React.memo(StretchingDetail);

const StyledP = styled.p`
  border: 1px solid black;
  border-radius: 10px;
  padding: 0 10px;
  line-height: 40px;
  height: 40px;

  & + & {
    margin-top: 10px;
  }
`;

const StyledPre = styled.pre`
  border: 1px solid black;
  border-radius: 10px;
  padding: 10px;
  min-height: 40px;
`;

const StyledImg = styled.img`
  width: 300px;
  height: 300px;
`;
