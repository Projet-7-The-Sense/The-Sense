export const getUsers = async () => {
    const response = await fetch(
        'http://localhost:4444/user/list', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
    )
    const users = await response.json();
    return users;
}

export const logUser = async (id, psw) => {
    const response = await fetch(
        'http://localhost:4444/user/login?id='+id+'&password='+psw, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
    )
    const user = await response.json();
    return user;
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

export const updateUser = async (id, updates) => {
    const response = await fetch(
        'http://localhost:4444/user/update?id='+id, {
            method: 'POST',
            body: JSON.stringify({...updates}),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
    )
    return response.status;
}

export const deleteUser = async (id) => {
    const response = await fetch(
        'http://localhost:4444/user/delete?id='+id, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
    )
    return response.status;
}