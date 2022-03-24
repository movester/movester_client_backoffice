import React, { useEffect, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import styled from 'styled-components';

function Editor({ content, onChangeField }) {
  const quillElement = useRef(null); // Quill을 적용할 DivElement를 설정
  const quillInstance = useRef(null); // Quill 인스턴스를 설정

  /* image Handler 함수 */
  const imageHandler = useCallback(async (dataUrl, type, imageData) => {
    const quill = quillInstance.current;
    // TODO: api 연결 → preSignedUrl은 서버에서 AWS 모듈 통해서 생성
    const { preSignedUrl, fileName } = {
      preSignedUrl: 'https://google.com',
      fileName: `admin1_asdfasdfsdafasdadsgsg.jpeg`,
    };
    console.log(preSignedUrl, dataUrl, type, imageData);
    // const imageFile = imageData.toFile(fileName);
    const imageUrl = `/${fileName}`;
    // const imageUrl = `https://hola-post-image.s3.ap-northeast-2.amazonaws.com/${fileName}`;

    /* bucket image upload */
    // await studyService.uploadImageToS3(preSignedUrl, imageFile);
    let { index } = quill.getSelection() || {};
    if (index === undefined || index < 0) index = quill.getLength();
    quill.insertEmbed(index, 'image', imageUrl, 'user');
    quill.setSelection(quill.getSelection().index + 1, 0); // image upload 후 cursor 이동
  }, []);

  // 이미지 리사이징
  useEffect(() => {
    quillInstance.current = new Quill(quillElement.current, {
      modules: {
        toolbar: [
          [{ header: [1, 2, false] }, { size: ['small', false, 'large', 'huge'] }],
          [{ align: ['', 'center', 'right'] }],
          [
            {
              color: [
                'black',
                '#fff',
                '#FA1A11',
                '#FFE10B',
                '#FFAA1E',
                '#00DB4F',
                '#0E44DB',
                '#2C0DDB',
                '#6503DB',
                '#c4c4c4',
              ],
            },
            {
              background: [
                'black',
                '#fff',
                '#FA1A11',
                '#FFE10B',
                '#FFAA1E',
                '#00DB4F',
                '#0E44DB',
                '#2C0DDB',
                '#6503DB',
                '#c4c4c4',
              ],
            },
            'bold',
            'italic',
            'underline',
          ],
          ['blockquote', 'image', 'link'],
        ],
      },
      theme: 'snow', // or 'bubble'
    });

    quillInstance.current.getModule('toolbar').addHandler('image', clicked => {
      if (clicked) {
        let fileInput = quillInstance.current.container.querySelector('input.ql-image[type=file]');
        if (fileInput == null) {
          fileInput = document.createElement('input');
          fileInput.setAttribute('type', 'file');
          fileInput.setAttribute('accept', 'image/*');
          fileInput.classList.add('ql-image');
          fileInput.addEventListener('change', e => {
            const { files } = e.target;
            let file;
            if (files.length > 0) {
              // eslint-disable-next-line prefer-destructuring
              file = files[0]; // → 이미지 객체
              const { type } = file; // → png, jpeg
              const reader = new FileReader();
              reader.onload = e => {
                // handle the inserted image
                const dataUrl = e.target.result;
                imageHandler(dataUrl, type, new ImageData(200, 200));
                fileInput.value = '';
              };
              reader.readAsDataURL(file);
            }
          });
        }
        fileInput.click();
      }
    });
  }, []);

  useEffect(() => {
    const quill = quillInstance.current;
    quill.on('text-change', (delta, oldDelta, source) => {
      if (source === 'user') {
        onChangeField({ key: 'content', value: quill.root.innerHTML });
      }
    });
  }, [onChangeField]);

  return (
    <QuillWrapper>
      <div ref={quillElement} value={content} />;
    </QuillWrapper>
  );
}

Editor.propTypes = {
  content: PropTypes.string.isRequired,
  onChangeField: PropTypes.func.isRequired,
};

export default React.memo(Editor, (prev, next) => prev.content === next.content);

const QuillWrapper = styled.div`
  /* 최소 크기 지정 및 padding 제거 */
  .ql-editor {
    padding: 10px;
    max-height: 600px;
    min-height: 320px;
    font-size: 1.125rem;
    line-height: 1.5;
  }
  .ql-editor.ql-blank::before {
    left: 10px;
  }
  img {
    width: 30%;
    margin-right: 3%;
    line-height: 75px;
  }
`;
