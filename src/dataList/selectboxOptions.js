const selectboxOptions = {
  userListSort: [
    { value: 'JOIN', name: '번호순' },
    { value: 'ATTEND_POINT', name: '출석 포인트순' },
  ],
  userListSearch: [
    { value: 'USER_IDX', name: '번호' },
    { value: 'EMAIL', name: '이메일' },
    { value: 'NAME', name: '이름' },
  ],
};

const userListOptions = [
  { value: 'name', name: '이름' },
  { value: 'email', name: '이메일' },
  { value: 'gender', name: '성별' },
  { value: 'job', name: '직업' },
];

const stretchingMainBody = [
  { value: '', name: '상위 부위 카테고리' },
  { value: 1, name: '전신' },
  { value: 2, name: '상체' },
  { value: 3, name: '하체' },
  { value: 4, name: '코어' },
];

const stretchingSubBody = [
  { value: '', name: '하위 부위 카테고리' },
  { value: 1, name: '얼굴 / 머리' },
  { value: 2, name: '목 / 어깨' },
  { value: 3, name: '팔 / 손목 / 손' },
  { value: 4, name: '등 / 허리' },
  { value: 5, name: '골반 / 엉덩이' },
  { value: 6, name: '무릎 / 다리' },
  { value: 7, name: '발목 / 발' },
];

const stretchingPosture = [
  { value: '', name: '자세 없음' },
  { value: 1, name: '앉아서' },
  { value: 2, name: '의자에 앉아서' },
  { value: 3, name: '일어서서' },
  { value: 4, name: '누워서' },
  { value: 5, name: '엎드려서' },
];

const stretchingEffect = [
  { value: '', name: '효과 없음' },
  { value: 1, name: '근이완' },
  { value: 2, name: '근강화' },
  { value: 3, name: '바른 자세' },
  { value: 4, name: '통증 완화' },
  { value: 5, name: '혈액 순환 촉진' },
  { value: 6, name: '거북목 개션' },
  { value: 7, name: '라운드숄더 개선' },
];
const stretchingTool = [
  { value: '', name: '도구 없음' },
  { value: 1, name: '폼롤러' },
  { value: 2, name: '마사지 볼' },
  { value: 3, name: '라텍스 밴드' },
  { value: 4, name: '요가 링' },
  { value: 5, name: '짐볼' },
];

const stretchingSearchOptions = [
  { value: 'title', name: '제목' },
];

const eventListSearch1 = [
  { value: 'name', name: '당첨자 유무' },
  { value: 'title', name: '부위-소분류' },
  { value: 'part', name: '부위-자세' },
  { value: 'posture', name: '효과' },
  { value: 'efect', name: '도구' },
];

const eventListSearch2 = [
  { value: 'name', name: '당첨자 유무' },
  { value: 'title', name: '부위-소분류' },
  { value: 'part', name: '부위-자세' },
  { value: 'posture', name: '효과' },
  { value: 'efect', name: '도구' },
];

export {
  userListOptions,
  stretchingMainBody,
  stretchingSubBody,
  stretchingEffect,
  stretchingPosture,
  stretchingTool,
  stretchingSearchOptions,
  eventListSearch1,
  eventListSearch2,
  selectboxOptions,
};
