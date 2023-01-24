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

export const insertUser = async (id, password, firstname, lastname, phone_number, age, reduction_points=0) => {
    const response = await fetch(
        'http://localhost:4444/user/insert', {
            method: 'POST',
            body: JSON.stringify({id, password, firstname, lastname, phone_number, age, reduction_points}),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
    )
    return response.status;
}