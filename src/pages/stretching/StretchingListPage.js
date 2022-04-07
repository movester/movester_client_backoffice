import React, { useState, useEffect } from 'react';
import axios from '../../services/defaultClient';

import Loading from '../../components/common/elements/Loading';
import StretchingList from '../../components/stretching/StretchingList';
import ConfirmModal from '../../components/common/Modal/ConfirmModal';

function StretchingListPage() {
  const [loading, setLoading] = useState(true);

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
        setLoading(true);
        const res = await axios.get(
          `/stretchings?title=${title}&mainCategory=${mainBody}&subCategory=${subBody}&posture=${posture}&effect=${effect}&tool=${tool}`,
        );
        const result = res.data.data;
          console.log(result)
        setStretchings(result);
        setTotal(result.length);
      } catch (err) {
        setErrMsg(err.response.data.error);
        handleErrModal();
      }
      setLoading(false);
    };

    getStretchingList();
    setPage(1);
  }, [title, mainBody, subBody, posture, effect, tool]);

  return loading ? (
    <Loading />
  ) : (
    <>
      <StretchingList
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
      />
      {errModalOn && <ConfirmModal onClose={handleErrModal} title="스트레칭 리스트 응답 실패" content={errMsg} />}
    </>
  );
}

export default StretchingListPage;
