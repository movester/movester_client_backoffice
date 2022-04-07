import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Main from '../common/Main';
import Content from '../common/Content';
import Button from '../common/button/Button';
import Input from '../common/elements/Input';
import InputTitle from '../common/elements/InputTitle';
import Center from '../common/elements/Center';

function UpdateWeekStretching({
  title,
  onTitleChange,
  weekStretching,
  dailyStretching,
  onSubmit,
  handleSearchStretchingModal,
  handleActiveDay,
}) {
  return (
    <Main>
      <Content title="일주일 스트레칭 수정">
        <InputTitle text="인덱스" />
        <StyledDiv>{weekStretching.weekIdx}</StyledDiv>

        <InputTitle text="제목" />
        <Input name="title" value={title} onChange={onTitleChange} />

        {['월', '화', '수', '목', '금', '토', '일'].map((day, index) => (
          <>
            <InputTitle text={day} />
            <StyledWrap>
              <StyledButton
                onClick={() => {
                  handleSearchStretchingModal();
                  handleActiveDay(index);
                }}
              >
                스트레칭 검색
              </StyledButton>
              <StyledDiv>{dailyStretching[index].title}</StyledDiv>
            </StyledWrap>
          </>
        ))}

        <Center>
          <Button text="수정하기" click={onSubmit} />
        </Center>
      </Content>
    </Main>
  );
}

UpdateWeekStretching.propTypes = {
  title: PropTypes.string.isRequired,
  onTitleChange: PropTypes.func.isRequired,
  weekStretching: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.arrayOf(PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))),
    ]),
  ).isRequired,
  dailyStretching: PropTypes.arrayOf(PropTypes.object).isRequired,
  onSubmit: PropTypes.func.isRequired,
  handleSearchStretchingModal: PropTypes.func.isRequired,
  handleActiveDay: PropTypes.func.isRequired,
};

export default React.memo(UpdateWeekStretching);

const StyledWrap = styled.div`
  display: grid;
  height: 40px;
  grid-template-columns: 1fr 4fr;
  column-gap: 40px;
`;

const StyledButton = styled.button`
  border-radius: 10px;
  background-color: #c4c4c4;
  padding: 0 10px;
`;

const StyledDiv = styled.div`
  border: 1px solid black;
  border-radius: 10px;
  padding: 0 10px;
  line-height: 40px;
  height: 40px;
`;
