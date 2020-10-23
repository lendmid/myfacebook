import {useCallback, useState} from 'react';

export const useHttp = () => {
    const [loading, setLoading] = useState(false);
    const [newAPIError, setNewAPIError] = useState(null);
    
    const request = useCallback(async (url, method = 'GET', body = null, headers = {}) => {
        setLoading(true);
        try {
            const response = await fetch(url, {method, body, headers});
            const data = await response.json();
            
            if (!response.ok) new Error(data.message || 'Something went wrong');
            
            return data;
        } catch (e) {
            setNewAPIError(e.message);
            throw e;
    
        } finally {
            setLoading(true);
        }
    }, []);
    
    const clearError = () => setNewAPIError(null);
    
    return {loading, request, newAPIError, clearError};
};