import bcrypt from 'bcryptjs';

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

const compare = async (psw, password) => {
    return await bcrypt.compare(psw, password);
}

export const logUser = async (id, psw) => {
    const response = await fetch(
        'http://localhost:4444/user/login?id='+id, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
    )
    
    const userFetched = await response.json();
    const loggedUser = await bcrypt.compare(psw, userFetched.password);
    return loggedUser ? userFetched : null;
}

export const alreadyExist = async (id) => {
    const response = await fetch(
        'http://localhost:4444/user/alreadyExist?id='+id, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
    )
    const exist = await response.json();
    return exist;
}

export const getUserById = async (_id) => {
    const response = await fetch(
        'http://localhost:4444/user/get_user_by_id?_id='+_id, {
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

export const createUser = async (id, password, firstname, lastname, phone_number, age, newsletter, reduction_points=0, admin=false) => {
    const response = await fetch(
        'http://localhost:4444/user/insert', {
            method: 'POST',
            body: JSON.stringify({id, password, firstname, lastname, phone_number, age, newsletter, reduction_points, admin}),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
    )
    const data = await response.json();

    if (!data) return null;

    return getUserById(data.insertedId);
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
    console.log('http://localhost:4444/user/delete?id='+id);
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