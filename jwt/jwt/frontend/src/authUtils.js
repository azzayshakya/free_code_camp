export const refreshAuthToken = async () => {
    const refreshToken = localStorage.getItem("refreshToken");
    console.log(refreshToken,"refreshtoken at authutils")
    if (!refreshToken) return;

    try {
        const response = await fetch("http://localhost:1000/refreshToken", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ token: refreshToken })
        });

        if (!response.ok) {
            throw new Error(`HTTP status ${response.status}`);
        }

        const json = await response.json();
        console.log("utilss response is here ", response)

        if (json.accessToken) {
            console.log(`New access token received: ${json.accessToken}`);
            localStorage.setItem("accessToken", json.accessToken);
        } else {
            console.log('Failed to refresh token:', json);
        }
    } catch (error) {
        console.error('Error refreshing token:', error.message);
        // Optionally handle token refresh failure (e.g., log out the user)
    }
};

// Initialize token refresh interval
export const initializeTokenRefresh = () => {
    refreshAuthToken(); // Initial call to refresh token
    setInterval(refreshAuthToken, 14 * 60 * 1000); // Refresh token every 14 minutes
};
