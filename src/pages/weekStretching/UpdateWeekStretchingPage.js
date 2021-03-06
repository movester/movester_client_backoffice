import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from '../../services/defaultClient';

import Loading from '../../components/common/elements/Loading';
import UpdateWeekStretching from '../../components/weekStretching/UpdateWeekStretching';
import SearchStretchingModal from '../../components/common/Modal/searchStretching/SearchStretchingModal';
import ConfirmModal from '../../components/common/Modal/ConfirmModal';

function UpdateWeekStretchingPage() {
  const navigate = useNavigate();
  const { idx } = useParams();
  const [loading, setLoading] = useState(true);
  const [weekStretching, setWeekStretching] = useState({});

  const [title, setTitle] = useState('');
  const [titleMessage, setTitleMessage] = useState('');
  const onTitleChange = e => {
    setTitle(e.target.value);
    setTitleMessage(title.length < 2 || title.length > 20 ? '제목은 2글자 이상 20글자 이하로 입력해주세요.' : '');
  };

  const [activeDay, setActiveDay] = useState(null);
  const handleActiveDay = day => {
    setActiveDay(day);
  };

  const [dailyStretching, setDailyStretching] = useState([
    { idx: '', title: '' },
    { idx: '', title: '' },
    { idx: '', title: '' },
    { idx: '', title: '' },
    { idx: '', title: '' },
    { idx: '', title: '' },
    { idx: '', title: '' },
  ]);

  const handleDailyStretching = (stretchingIdx, title) => {
    const newDailyStretching = [...dailyStretching];
    newDailyStretching[activeDay] = { stretchingIdx, title };
    setDailyStretching(newDailyStretching);
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

  useEffect(() => {
    const getWeekStretching = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`/weeks/${idx}`);
        const result = res.data.data;
        setWeekStretching(result);
        setTitle(result.title);
        setDailyStretching(result.days);
      } catch (err) {
        setErrMsg(err.response.data.error);
        handleErrModal();
      }
      setLoading(false);
    };
    getWeekStretching();
  }, []);

  const onSubmit = async e => {
    e.preventDefault();
    const week = dailyStretching.map(day => day.stretchingIdx);

    if (title === '' || !week.every(day => typeof day === 'number')) {
      setErrModalOn(prev => !prev);
      setErrMsg('제목 및 모든 요일별 스트레칭을 입력해주세요.');
    } else {
      try {
        const { data } = await axios.put('weeks', {
          weekIdx: idx,
          title,
          week,
        });
        if (data.success) {
          navigate(`/weekStretching/${idx}`);
        }
      } catch (err) {
        setErrModalOn(prev => !prev);
        setErrMsg(err.response.data.error);
      }
    }
  };

  return loading ? (
    <Loading />
  ) : (
    <>
      <UpdateWeekStretching
        title={title}
        titleMessage={titleMessage}
        onTitleChange={onTitleChange}
        weekStretching={weekStretching}
        dailyStretching={dailyStretching}
        handleSearchStretchingModal={handleSearchStretchingModal}
        onSubmit={onSubmit}
        handleActiveDay={handleActiveDay}
      />
      {searchStretchinModalOn && (
        <SearchStretchingModal onClose={handleSearchStretchingModal} handleWeekStretching={handleDailyStretching} />
      )}
      {errModalOn && <ConfirmModal onClose={handleErrModal} title="일주일 스트레칭 등록 실패" content={errMsg} />}
    </>
  );
}

export default UpdateWeekStretchingPage;
