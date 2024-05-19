import React from 'react';
import { useTheme } from '../context/ThemeContext';

const ToggleThemeButton: React.FC = () => {
  const { toggleTheme } = useTheme();

  return <a className='menuOption' onClick={toggleTheme}>Change Theme</a>;
};

export default ToggleThemeButton;