export const getUser = async (credential) => {
    const response = await fetch(
        'https://www.googleapis.com/oauth2/v2/userinfo?access_token='+credential, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
    )
}