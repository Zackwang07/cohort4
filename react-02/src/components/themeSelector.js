import {ThemeContext} from './themeContext';
import React from 'react'

const ThemeSelector = () => {
    return (
        <ThemeContext.Consumer>
            {({theme, toggleTheme}) => (
                <div>
                    <h1>Theme Manager</h1>
                        <button onClick={toggleTheme}>Toggle Theme</button>                   
                </div>
            )}
        </ThemeContext.Consumer>
    )
}

export default ThemeSelector;