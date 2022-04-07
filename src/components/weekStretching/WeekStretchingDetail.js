import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Main from '../common/Main';
import Content from '../common/Content';
import Button from '../common/button/Button';
import InputTitle from '../common/elements/InputTitle';
import Center from '../common/elements/Center';

function WeekStretchingDetail({ weekStretching, onLinkUpdate, handleDeleteModal, onUpdateExpose, onDeleteExpose }) {
  return (
    <Main>
      <Content title="일주일 스트레칭 상세">
        <InputTitle text="인덱스" />
        <StyledDiv>{weekStretching.weekIdx}</StyledDiv>

        <InputTitle text="제목" />
        <StyledDiv>{weekStretching.title}</StyledDiv>

        {['월', '화', '수', '목', '금', '토', '일'].map((day, index) => (
          <>
            <InputTitle text={day} />
            <StyledDiv>{weekStretching.days[index].title}</StyledDiv>
          </>
        ))}

        <InputTitle text="작성자" />
        <StyledDiv>{weekStretching.adminIdx}</StyledDiv>

        <InputTitle text="등록일" />
        <StyledDiv>{weekStretching.createAt}</StyledDiv>

        <InputTitle text="노출여부" />
        <StyledDiv>{weekStretching.isExpose ? '노출 중' : '노출 안함'}</StyledDiv>

        <Center>
          {weekStretching.isExpose ? (
            <Button text="노출 취소" click={onDeleteExpose} />
          ) : (
            <Button text="노출하기" click={onUpdateExpose} />
          )}
          <Button text="수정하기" click={onLinkUpdate} />
          <Button text="삭제하기" click={handleDeleteModal} />
        </Center>
      </Content>
    </Main>
  );
}

WeekStretchingDetail.propTypes = {
  weekStretching: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.arrayOf(PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))),
    ]),
  ).isRequired,
  onLinkUpdate: PropTypes.func.isRequired,
  handleDeleteModal: PropTypes.func.isRequired,
  onUpdateExpose: PropTypes.func.isRequired,
  onDeleteExpose: PropTypes.func.isRequired,
};

export default React.memo(WeekStretchingDetail);

const StyledDiv = styled.div`
  border: 1px solid black;
  border-radius: 10px;
  padding: 0 10px;
  line-height: 40px;
  height: 40px;
`;
