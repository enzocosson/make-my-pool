/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const AppContext = createContext({});

export const AppContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(false);

  const appProps = {
    currentUser,
    setCurrentUser,
  };

  return <AppContext.Provider value={appProps}>{children}</AppContext.Provider>;
};

AppContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useAppContext = () => useContext(AppContext);
