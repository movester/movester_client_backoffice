import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../../services/defaultClient';

import CreateWeekStretching from '../../components/weekStretching/CreateWeekStretching';
import ModalPortal from '../../components/common/Modal/ModalPortal';
import ConfirmModal from '../../components/common/Modal/ConfirmModal';

function CreateWeekStretchingPage() {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    title: '',
  });


  const { title } = inputs;


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

  const onSearchStretching = () => {
    console.log("hello")
  }

  const onSubmit = async e => {
    e.preventDefault();

    try {
      const { data } = await axios.post('stretchings', {
        title,

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
      <CreateWeekStretching
        title={title}
        onSearchStretching={onSearchStretching}
        onInputChange={onInputChange}
        onSubmit={onSubmit}
      />
      <ModalPortal>
        {errModalOn && <ConfirmModal onClose={handleErrModal} title="일주일 스트레칭 등록 실패" content={errMsg} />}
      </ModalPortal>
    </>
  );
}

export default CreateWeekStretchingPage;
