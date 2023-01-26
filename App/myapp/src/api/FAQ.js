export const getQuestion = async () => {
    const response = await fetch(
        'http://localhost:4444/FAQ/list', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
    )
    return response.status;
}

export const insertQuestion = async (question, answer) => {
    const response = await fetch(
        'http://localhost:4444/FAQ/insert', {
            method: 'POST',
            body: JSON.stringify({question, answer}),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
    )
    return response.status;
}

export const updateQuestion = async (id, updates) => {
    const response = await fetch(
        'http://localhost:4444/FAQ/update?id='+id, {
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

export const deleteQuestion = async (id) => {
    const response = await fetch(
        'http://localhost:4444/FAQ/delete?id='+id, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
    )
    return response.status;
}