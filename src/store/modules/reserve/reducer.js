import produce from 'immer'

// o reducer tem por padrão um state e uma action
export default function reserve(state = [], action){
     //console.log(state)
    
    switch(action.type) {
        case 'ADD_RESERVE':
            return produce(state, draft => {
                const tripIndex = draft.findIndex(trip => trip.id === action.trip.id)
                
                if(tripIndex >= 0) {
                    draft[tripIndex].amount +=1;
                } else {
                    draft.push({
                        ...action.trip,
                        amount: 1,
                    })
                }
            });

            case 'REMOVE_RESERVE':
                return produce(state, draft => {
                    const tripIndex = draft.findIndex(trip => trip.id === action.id)

                    // função para excluir o primeiro objeto
                    if(tripIndex >= 0){
                        draft.splice(tripIndex, 1);
                    }
                });
            
            case 'UPDATE_RESERVE': {
                if(action.amount <= 0){
                    return state;
                } 

                return produce(state, draft => {
                    const tripIndex = draft.findIndex(trip => trip.id === action.id)
                    
                    if(tripIndex >= 0 ){
                        //converte para number pq é uma string e não da pra somar/subtrair string
                        draft[tripIndex].amount = Number(action.amount)
                    }
                })
            }
        default:
            return state;
    }
}