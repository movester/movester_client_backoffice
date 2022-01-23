import React, { useState } from 'react';
import Main from './utils/Main';
import Content from './utils/Content';
import Button from './utils/Button';
import Center from './utils/Center';
import InputTitle from './utils/InputTitle';
import Input from './utils/Input';
import SearchStretching from './stretching/SearchStretching';
import ModalPortal from './utils/Modal/ModalPortal';
import SearchModal from './utils/Modal/SearchModal';

function StretchingCreate() {
  const [modalOn, setModalOn] = useState(true);
  const handleModal = () => {
    setModalOn(!modalOn);
  };
  return (
    <div>
      <Main>
        <ModalPortal>{modalOn && <SearchModal onClose={handleModal} title="스트레칭 검색" />}</ModalPortal>
        <Content title="일주일 스트레칭 등록">
          <InputTitle text="제목" />
          <Input />
          <SearchStretching day="월" />
          <SearchStretching day="화" />
          <SearchStretching day="수" />
          <SearchStretching day="목" />
          <SearchStretching day="금" />
          <SearchStretching day="토" />
          <SearchStretching day="일" />
          <Center>
            <Button text="등록 하기" />
          </Center>
        </Content>
      </Main>
    </div>
  );
}

export default StretchingCreate;
