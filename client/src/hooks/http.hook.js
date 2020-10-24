import {useCallback, useState} from 'react';

export const useHttp = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    
    const request = useCallback(async (url, method = 'GET', body = null, headers = {}) => {
        setLoading(true);
        try {
            if(body) {
                body = JSON.stringify(body);
                headers['Content-Type'] = 'application/json';
            }
            const response = await fetch(url, {method, body, headers});
            const data = await response.json();
            
            if (!response.ok) new Error(data.message || 'Something went wrong');
            
            return data;
        } catch (e) {
            setError(e.message);
            throw e;
    
        } finally {
            setLoading(true);
        }
    }, []);
    
    const clearError = useCallback(() => setError(null), []);
    
    return {loading, request, error, clearError};
};