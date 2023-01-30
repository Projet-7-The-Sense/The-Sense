

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
    return response.status;
}