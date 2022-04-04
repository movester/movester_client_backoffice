import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../../services/defaultClient';

import CreateStretching from '../../components/stretching/CreateStretching';
import ModalPortal from '../../components/common/Modal/ModalPortal';
import ConfirmModal from '../../components/common/Modal/ConfirmModal';

function CreateStretchingPage() {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    title: '',
    mainBody: '',
    subBody: '',
    tool: '',
    youtubeUrl: '',
    image: '',
    postures: [],
    effects: [],
    contents: '',
  });

  // const { title, mainBody, subBody, tool, youtubeUrl, image, postures, effects, contents } = inputs;
  const { title } = inputs;
  const [contents,setContents] = useState('');
  const handleEditor = html => {
    setContents(html);
  };

  const [errModalOn, setErrModalOn] = useState(false);
  const [errMsg, setErrMsg] = useState('');
  const handleErrModal = () => {
    setErrModalOn(!errModalOn);
  };

  const onChange = e => {
    const { value, name } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onSubmit = async e => {
    e.preventDefault();

    try {
      const { data } = await axios.post('stretchings', {
        title,
        contents,
        mainBody: 1,
        subBody: 2,
        tool: null,
        youtubeUrl: 'hi',
        image: 'hi',
        postures: [1],
        effects: [2, 3],
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
      <CreateStretching title={title} contents={contents} handleEditor={handleEditor} onChange={onChange} onSubmit={onSubmit} />
      <ModalPortal>
        {errModalOn && <ConfirmModal onClose={handleErrModal} title="로그인 실패" content={errMsg} />}
      </ModalPortal>
    </>
  );
}

export default CreateStretchingPage;
