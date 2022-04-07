import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../../services/defaultClient';

import UpdateStretching from '../../components/stretching/UpdateStretching';
import ConfirmModal from '../../components/common/Modal/ConfirmModal';

function UpdateStretchingPage() {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    title: '',
    youtubeUrl: '',
    image: '',
  });

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

  const { title, youtubeUrl, image } = inputs;
  const { mainBody, subBody, tool, posture1, posture2, posture3, effect1, effect2, effect3 } = selects;
  const [contents, setContents] = useState('');
  const handleEditor = html => {
    setContents(html);
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
  };

  const onSelectChange = e => {
    const { value, name } = e.target;

    setSelects({
      ...selects,
      [name]: value,
    });
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
      <UpdateStretching
        title={title}
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
      />
      {errModalOn && <ConfirmModal onClose={handleErrModal} title="스트레칭 등록 실패" content={errMsg} />}
    </>
  );
}

export default UpdateStretchingPage;
