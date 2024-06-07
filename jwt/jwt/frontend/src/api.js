// src/api.js

import { refreshAuthToken } from './authUtils';

const fetchWithAuth = async (url, options = {}) => {
    console.log('fetchWithAuth called for URL:', url);
    
    // Check if token needs to be refreshed
    console.log('Checking if token needs to be refreshed...');
    await refreshAuthToken();
    console.log('Token refreshed if necessary');

    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
        options.headers = {
            ...options.headers,
            'Authorization': `Bearer ${accessToken}`
        };
    }

    console.log('Making fetch request with options:', options);
    let response = await fetch(url, options);
    console.log('Initial response status:', response.status);

    if (response.status === 401) {
        console.log('Token expired, trying to refresh...');
        // Token might have expired, try to refresh again
        await refreshAuthToken();
        options.headers['Authorization'] = `Bearer ${localStorage.getItem("accessToken")}`;
        console.log('Retrying fetch request with new token');
        response = await fetch(url, options); // Retry the request
        console.log('Retry response status:', response.status);
    }

    return response;
};

export default fetchWithAuth;
