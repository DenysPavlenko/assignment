import React from 'react';
// Styles
import './styles.sass';
import { useTheme } from 'context/theme-context';
// Assets
import { ReactComponent as Sun } from 'assets/images/icons/sun.svg';
import { ReactComponent as Moon } from 'assets/images/icons/moon.svg';

const ToggleTheme = () => {
  const { dark, toggleTheme } = useTheme();

  return (
    <div className="switch">
      <input type="checkbox" className="switch__input" id="switch" onChange={toggleTheme} checked={dark} />
      <label htmlFor="switch" className="switch__label">
        <div className="switch__label-dot">
          {dark ?
            <Moon className="switch__label-icon" />
            :
            <Sun className="switch__label-icon" />
          }
        </div>
      </label>
    </div>
  );
};

export default ToggleTheme;
