import styles from './new-component.module.scss';
import './new-component.css';
import { useState } from 'react';

export const NewComponent = () => {
    const [themeType, setThemeType] = useState('light');
    const handleClick = () => {
        setThemeType(themeType === 'light' ? 'dark' : 'light');
    };

    return (
        <>
            <div className={`text`}>Theme: {themeType}</div>
            <button className={`btn theme-${themeType}`} onClick={handleClick}>
                Change theme
            </button>
        </>
    );
};
