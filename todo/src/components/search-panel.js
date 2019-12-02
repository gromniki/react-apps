import React from 'react';

const SearchPanel = () => {
  const searchText = 'Type here to search';
  const searchStyle = {
    fontSize: '18px'
  };
  return <input
    placeholder={searchText}
    className="classForCss"
    style={searchStyle}
  />;
};

export default SearchPanel;
