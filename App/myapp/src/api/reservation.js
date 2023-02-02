

export const getReservation = async () => {
    const response = await fetch(
        'http://localhost:4444/reservation/list', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
    )
    const reservation = await response.json();
    return reservation;
}

export const InsertReservation = async (data) => {
    const response = await fetch(
        'http://localhost:4444/reservation/insert', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
    )
    return response.status;
}

