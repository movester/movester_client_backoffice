import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../../services/defaultClient';

import CreateWeekStretching from '../../components/weekStretching/CreateWeekStretching';
import SearchStretchingModal from '../../components/common/Modal/searchStretching/SearchStretchingModal';
import ConfirmModal from '../../components/common/Modal/ConfirmModal';

function CreateWeekStretchingPage() {
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const onTitleChange = e => {
    setTitle(e.target.value);
  };

  const [activeDay, setActiveDay] = useState(null);
  const handleActiveDay = day => {
    setActiveDay(day);
  };

  // const [weekStretching, setWeekStretching] = useState([
  //   { idx: '', title: '' },
  //   { idx: '', title: '' },
  //   { idx: '', title: '' },
  //   { idx: '', title: '' },
  //   { idx: '', title: '' },
  //   { idx: '', title: '' },
  //   { idx: '', title: '' },
  // ]);
  const [weekStretching, setWeekStretching] = useState([
    { idx: '', title: '' },
    { idx: '', title: '' },
    { idx: '', title: '' },
    { idx: '', title: '' },
    { idx: '', title: '' },
    { idx: '', title: '' },
    { idx: '', title: '' },
  ]);
  const handleWeekStretching = (stretchingIdx, title) => {
    const newWeekStretching = [...weekStretching];
    newWeekStretching[activeDay] = { idx: stretchingIdx, title };
    setWeekStretching(newWeekStretching);
    console.log(weekStretching);
  };
  const [errModalOn, setErrModalOn] = useState(false);
  const [errMsg, setErrMsg] = useState('');
  const handleErrModal = () => {
    setErrModalOn(!errModalOn);
  };

  const [searchStretchinModalOn, setSearchStretchinModalOn] = useState(false);
  const handleSearchStretchingModal = () => {
    setSearchStretchinModalOn(prev => !prev);
  };

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
        onTitleChange={onTitleChange}
        weekStretching={weekStretching}
        handleSearchStretchingModal={handleSearchStretchingModal}
        onSubmit={onSubmit}
        handleActiveDay={handleActiveDay}
      />
      {searchStretchinModalOn && (
        <SearchStretchingModal onClose={handleSearchStretchingModal} handleWeekStretching={handleWeekStretching} />
      )}
      {errModalOn && <ConfirmModal onClose={handleErrModal} title="일주일 스트레칭 등록 실패" content={errMsg} />}
    </>
  );
}

export default CreateWeekStretchingPage;
