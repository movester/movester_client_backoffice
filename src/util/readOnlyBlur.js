const readOnlyBlur = (str, rank) => {
  if (!str || !str.length) return str;
  return rank === 2 ? str.slice(0, 2) + '*'.repeat(str.length - 2) : str;
};

export default readOnlyBlur;
