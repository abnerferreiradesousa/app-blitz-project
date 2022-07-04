import React, { useMemo, useState } from 'react';
import { PropTypes } from 'prop-types';
import MyContext from './MyContext';

function MyProvider({ children }) {
  const [token, setToken] = useState('');
  const contextValue = useMemo(() => ({
    setToken,
    token,
  }), []);

  return (
    <MyContext.Provider value={contextValue}>
      {children}
    </MyContext.Provider>
  );
}

MyProvider.propTypes = {
  children: PropTypes.func.isRequired,
};

export default MyProvider;
