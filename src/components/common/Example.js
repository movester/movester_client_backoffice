import React, { useState } from 'react';
import Main from './Main';
import Content from './Content';
import Button from './elements/Button';
import Input from './elements/OldInput';
import WhiteButton from './elements/WhiteButton';
import ModalPortal from './Modal/ModalPortal';
import DeleteModal from './Modal/DeleteModal';

function Example() {
  const [modalOn, setModalOn] = useState(true);
  const handleModal = () => {
    setModalOn(!modalOn);
  };
  return (
    <Main>
      <Content title="사용자 리스트">
        {/* defaultProps = "90" */}
        <WhiteButton />
        <WhiteButton size="500" />
        <Input />
        <Input label="제목" />
        {/* defaultProps = "제출하기" */}
        <Button text="예시 텍스트" />
        <ModalPortal>{modalOn && <DeleteModal onClose={handleModal} title="계정 삭제" />}</ModalPortal>
      </Content>

      <Content title="사용자 리스트">
        <WhiteButton />
        <WhiteButton size="500" />
        <Input />
        <Input label="제목" />
        <Button text="예시 텍스트" />
      </Content>
    </Main>
  );
}

export default Example;
