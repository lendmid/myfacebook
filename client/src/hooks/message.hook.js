import {useCallback} from 'react';


export const useMessage = () => {
    return useCallback(text => {
        if (!text) return;
        let wrapper = document.querySelector('#alerts');
        let div = document.createElement('div');
        div.className = "alert";
        div.innerHTML = `${text}`;
        wrapper.append(div);
        setTimeout(() => div.remove(), 5000)
    }, [])
};