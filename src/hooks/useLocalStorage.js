//Local storage hook for dark mode
import { useState } from 'react';

export const useLocalStoarage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
    })

    return [storedValue];
};