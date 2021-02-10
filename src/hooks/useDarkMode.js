//Custom hook for dark mode
import { useLocalStorage } from './useLocalStorage'

export const useDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage('dark', false);
    return [darkMode, setDarkMode];
};