import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = (storedValue, setValue) => {
    const [ darkMode, setDarkMode ] = useLocalStorage('enabled')

    useEffect(() => {
        const className = 'dark-mode';
        const element = window.document.body;
        if (darkMode === true) {
            element.classList.add(className);
        } else {
            element.classList.remove(className);
        }
    }, [darkMode])
    
    return [ darkMode, setDarkMode, storedValue, setValue ]
}