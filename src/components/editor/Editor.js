/* eslint-disable */
import React, { useRef, useMemo } from 'react';
import ReactQuill from 'react-quill';
import S3 from 'react-aws-s3';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import 'react-quill/dist/quill.snow.css';
import s3Config from '../../config/s3';
window.Buffer = window.Buffer || require('buffer').Buffer;

export const Editor = ({ value, handleEditor }) => {
  const QuillRef = useRef();

  const CustomUndo = () => (
    <svg viewBox="0 0 18 18">
      <polygon className="ql-fill ql-stroke" points="6 10 4 12 2 10 6 10" />
      <path className="ql-stroke" d="M8.09,13.91A4.6,4.6,0,0,0,9,14,5,5,0,1,0,4,9" />
    </svg>
  );

  const CustomRedo = () => (
    <svg viewBox="0 0 18 18">
      <polygon className="ql-fill ql-stroke" points="12 10 14 12 16 10 12 10" />
      <path className="ql-stroke" d="M9.91,13.91A4.6,4.6,0,0,1,9,14a5,5,0,1,1,5-5" />
    </svg>
  );

  function undoChange() {
    this.quill.history.undo();
  }
  function redoChange() {
    this.quill.history.redo();
  }

  const ImageHandler = () => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();
    input.onchange = function () {
      const file = input.files[0];
      const newFileName = uuidv4();
      if (file) {
        if (file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/jpg') {
          const ReactS3Client = new S3(s3Config);
          ReactS3Client.uploadFile(file, newFileName)
            .then(data => {
              if (data.status === 204) {
                const range = QuillRef.current?.getEditor().getSelection()?.index;

                if (range !== null && range !== undefined) {
                  let quill = QuillRef.current?.getEditor();
                  quill?.insertEmbed(range, 'image', `${data.location}`);
                  quill?.setSelection(range, 1);
                }
              } else {
                alert('error');
              }
            })
            .catch(e => console.log('err', e));
        } else {
          alert('JPEG, PNG, JPG 파일만 업로드 가능합니다.');
        }
      }
    };
  };

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ size: ['small', false, 'large', 'huge'] }, { color: [] }, { background: [] }],
          ['bold', 'italic', 'underline', 'strike', 'blockquote'],
          [{ align: [] }, { list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
          ['link', 'image', 'video'],
          ['undo', 'redo'],
        ],
        handlers: {
          undo: undoChange,
          redo: redoChange,
          image: ImageHandler,
        },
      },
      history: {
        delay: 500,
        maxStack: 100,
        userOnly: true,
      },
    }),
    [],
  );

  return (
    <div className="text-editor">
      <QuillWrapper>
        <ReactQuill
          ref={element => {
            if (element !== null) {
              QuillRef.current = element;
            }
          }}
          theme="snow"
          value={value}
          onChange={handleEditor}
          placeholder="Write something awesome..."
          modules={modules}
        />
      </QuillWrapper>
    </div>
  );
};

Editor.propTypes = {
  value: PropTypes.string.isRequired,
  handleEditor: PropTypes.func.isRequired,
};

export default Editor;

const QuillWrapper = styled.div`
  img {
    width: 30%;
    margin-right: 3%;
    line-height: 75px;
  }
`;
