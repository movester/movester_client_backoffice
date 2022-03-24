import React, { useRef, useState } from 'react';
import styled from 'styled-components';

import Main from '../common/Main';
import Button from '../common/button/Button';
import Content from '../common/Content';
import Input from '../common/elements/Input';
import InputTitle from '../common/elements/InputTitle';
import SelectBox from '../common/elements/SelectBox';

function RegisterEvent() {
  const [selectedImages, setSelectedImages] = useState([]);
  const fileRef = useRef();

  const handleFileOnChange = e => {
    e.preventDefault();
    const { files } = e.target;
    const filesArray = Array.from(files).map(file => URL.createObjectURL(file));
    setSelectedImages([...filesArray]);
    Array.from(files).map(file => URL.revokeObjectURL(file));
    // URL.createObjectURL()을 통해 생성한 객체 URL을 해제, 🧐 서비스워커에서 사용할 수 없음
  };

  const handleFileButtonClick = e => {
    e.preventDefault();
    fileRef.current.click();
  };

  const renderPhotos = source => source.map(photoURL => <img src={photoURL} alt="미리보기 이미지" key={photoURL} />);

  return (
    <Main>
      <Content title="이벤트 등록">
        <InputTitle text="제목" />
        <Input text="이벤트 제목을 입력해 주세요." />
        <InputTitle text="기간" />
        {/* TODO: date picker Component → calendar */}
        <SelectBox options={[{ value: 'start', name: '시작일' }]} />
        &nbsp;&nbsp;~&nbsp;&nbsp;
        <SelectBox options={[{ value: 'end', name: '종료일' }]} />
        <InputTitle text="당첨자 유무" />
        <SelectBox
          options={[
            { value: 'on', name: '있음' },
            { value: 'off', name: '없음' },
          ]}
        />
        <InputTitle text="설명" />
        <textarea style={{ width: '100%', height: '300px' }} />
        <InputTitle text="대표 이미지" />
        {/* TODO: 이미지 업로더 컴포넌트화 */}
        <UploadWrapper>
          <div className="upload__box">
            <div className="upload__btn">
              <button type="button" onClick={handleFileButtonClick}>
                이미지 등록하기
              </button>
              <input
                type="file"
                multiple
                data-max_length="20"
                className="upload__inputfile"
                ref={fileRef}
                onChange={handleFileOnChange}
              />
            </div>
          </div>
          <PreviewWrapper>{selectedImages.length !== 0 && renderPhotos(selectedImages)}</PreviewWrapper>
        </UploadWrapper>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button text="등록하기" />
        </div>
      </Content>
    </Main>
  );
}

export default RegisterEvent;

const UploadWrapper = styled.div`
  .upload__box {
    margin-bottom: 10px;
  }

  .upload__btn {
    display: inline-block;
    font-weight: 600;
    text-align: center;
    min-width: 116px;
    padding: 5px;
    transition: all 0.3s ease;
    cursor: pointer;
    color: #fff;
    border: 2px solid rgba(109, 102, 170, 0.7);
    background: rgba(109, 102, 170, 0.7);
    border-radius: 10px;
    line-height: 26px;
    font-size: 14px;

    &:hover {
      background-color: unset;
      color: rgba(109, 102, 170, 0.7);
      transition: all 0.3s ease;
    }
  }

  button {
    color: inherit;
  }

  .upload__inputfile {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
  }
`;

const PreviewWrapper = styled.div`
  min-height: 500px;
  width: 100%;
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: left;

  img {
    width: 500px;
    height: 300px;
    object-fit: cover;
    padding: 0.75rem;
  }
`;
