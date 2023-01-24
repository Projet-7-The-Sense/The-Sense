export const getUsers = async () => {
    const response = await fetch(
        'http://localhost:4444/user/list', {
            method: 'GET',
            'headers': {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
    )
    const users = await response.json();
    return users;
}