import { useEffect, useState } from "react";

function loadFromLocalStorage(key) {
    const data = localStorage.getItem(key);
    
    if(data === null) {
        return [];
    }

    return JSON.parse(data);
}

function saveToLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

export default function useLocalStorage(key) {
    const [data, setData] = useState(() => loadFromLocalStorage(key));

    useEffect(() => saveToLocalStorage(key, data), [key, data]);

    console.log(data);

    return [data, setData];
}