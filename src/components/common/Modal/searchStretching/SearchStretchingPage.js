import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from '../../../../services/defaultClient'

import SearchStretching from './SearchStretching';
import ModalPortal from '../ModalPortal';
import ConfirmModal from '../ConfirmModal';

function SearchStretchingPage({handleWeekStretching, onClose}) {
  const [stretchings, setStretchings] = useState([]);
  const [title, setTitle] = useState('');
  const onTitleChange = e => {
    setTitle(e.target.value);
  };
  const [selects, setSelects] = useState({
    mainBody: '',
    subBody: '',
    posture: '',
    effect: '',
    tool: '',
  });

  const { mainBody, subBody, posture, effect, tool } = selects;

  const onSelectChange = e => {
    const { value, name } = e.target;

    setSelects({
      ...selects,
      [name]: value,
    });
  };

  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  const [errModalOn, setErrModalOn] = useState(false);
  const [errMsg, setErrMsg] = useState('');
  const handleErrModal = () => {
    setErrModalOn(!errModalOn);
  };

  useEffect(() => {
    const getStretchingList = async () => {
      try {
        const result = await axios.get(
          `/stretchings?title=${title}&mainCategory=${mainBody}&subCategory=${subBody}&posture=${posture}&effect=${effect}&tool=${tool}`,
        );

        setStretchings([...result.data.data]);
        setTotal([...result.data.data].length);
      } catch (err) {
        setErrMsg(err.response.data.error);
        handleErrModal();
      }
    };

    getStretchingList();
    setPage(1);
  }, [title, mainBody, subBody, posture, effect, tool]);

  return (
    <>
      <SearchStretching
        stretchings={stretchings}
        title={title}
        mainBody={mainBody}
        subBody={subBody}
        posture={posture}
        effect={effect}
        tool={tool}
        onTitleChange={onTitleChange}
        onSelectChange={onSelectChange}
        total={total}
        page={page}
        setPage={setPage}
        handleWeekStretching={handleWeekStretching}
        onClose={onClose}
      />
      <ModalPortal>
        {errModalOn && <ConfirmModal onClose={handleErrModal} title="스트레칭 리스트 응답 실패" content={errMsg} />}
      </ModalPortal>
    </>
  );
}

SearchStretchingPage.propTypes = {
  handleWeekStretching: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default SearchStretchingPage;
