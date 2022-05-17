import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import S3 from 'react-aws-s3';
import { v4 as uuidv4 } from 'uuid';
import axios from '../../services/defaultClient';

import CreateStretching from '../../components/stretching/CreateStretching';
import ConfirmModal from '../../components/common/Modal/ConfirmModal';
import s3Config from '../../config/s3';

function CreateStretchingPage() {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    title: '',
    youtubeUrl: '',
  });

  const [titleMessage, setTitleMessage] = useState('');

  const [selects, setSelects] = useState({
    mainBody: '',
    subBody: '',
    tool: '',
    posture1: '',
    posture2: '',
    posture3: '',
    effect1: '',
    effect2: '',
    effect3: '',
  });

  const { title, youtubeUrl } = inputs;
  const { mainBody, subBody, tool, posture1, posture2, posture3, effect1, effect2, effect3 } = selects;
  const [contents, setContents] = useState('');
  const handleEditor = html => {
    setContents(html);
  };

  const [image, setImage] = useState('');
  const handleImage = fileName => {
    setImage(fileName);
  };

  const [errModalOn, setErrModalOn] = useState(false);
  const [errMsg, setErrMsg] = useState('');
  const handleErrModal = () => {
    setErrModalOn(!errModalOn);
  };

  const onInputChange = e => {
    const { value, name } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });

    if (name === 'title') {
      setTitleMessage(title.length < 2 || title.length > 20 ? '제목은 2글자 이상 20글자 이하로 입력해주세요.' : '');
    }
  };

  const onSelectChange = e => {
    const { value, name } = e.target;

    setSelects({
      ...selects,
      [name]: value,
    });
  };

  const handleFileInput = e => {
    const file = e.target.files[0];
    const newFileName = uuidv4();
    if (file) {
      if (file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/jpg') {
        const ReactS3Client = new S3(s3Config);
        ReactS3Client.uploadFile(file, newFileName).catch(() => {
          alert('업로드 실패');
        });
      } else {
        alert('JPEG, PNG, JPG 파일만 업로드 가능합니다.');
      }
    }
    handleImage(newFileName);
  };

  const onSubmit = async e => {
    e.preventDefault();

    const filterValidValue = arr => arr.filter(v => v);

    try {
      const { data } = await axios.post('stretchings', {
        title,
        contents,
        mainBody: +mainBody,
        subBody: +subBody,
        tool: +tool ? +tool : null,
        youtubeUrl,
        image,
        postures: filterValidValue([+posture1, +posture2, +posture3]),
        effects: filterValidValue([+effect1, +effect2, +effect3]),
      });

      if (data.success) {
        const newStretchingIdx = data.data.stretchingIdx;
        navigate(`/stretching/${newStretchingIdx}`);
      }
    } catch (err) {
      setErrModalOn(prev => !prev);
      setErrMsg(err.response.data.error);
    }
  };

  return (
    <>
      <CreateStretching
        title={title}
        titleMessage={titleMessage}
        youtubeUrl={youtubeUrl}
        image={image}
        contents={contents}
        handleEditor={handleEditor}
        onInputChange={onInputChange}
        onSubmit={onSubmit}
        mainBody={mainBody}
        subBody={subBody}
        tool={tool}
        posture1={posture1}
        posture2={posture2}
        posture3={posture3}
        effect1={effect1}
        effect2={effect2}
        effect3={effect3}
        onSelectChange={onSelectChange}
        handleFileInput={handleFileInput}
      />
      {errModalOn && <ConfirmModal onClose={handleErrModal} title="스트레칭 등록 실패" content={errMsg} />}
    </>
  );
}

export default CreateStretchingPage;
