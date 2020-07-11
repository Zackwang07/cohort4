import React from 'react';

export const themes = {
    light: {
        foreground: '#eeeeee',
        background: '#444444',
    },
    dark: {
        foreground: '#ffffff',
        background: '#282c34',
    },
};

export const ThemeContext = React.createContext({
    theme: themes.dark,
    toggleTheme: () => { },
});