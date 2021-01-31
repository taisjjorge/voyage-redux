export function addReserve(trip) {
    return {
        type: 'ADD_RESERVE',
        trip
        //o 'ADD_RESERVE' é passado para o reducer
    }
}

export function removeReserve(id) {
    return {
        type: 'REMOVE_RESERVE',
        id,
    }
}

export function updateAmountReserve(id, amount) {
    return {
        type: 'UPDATE_RESERVE',
        id,
        amount 
    }
}