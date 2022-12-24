
export const originReducer =(state,action)=>{


    switch(action.type){
        case 'ADD_ORIGIN':
            return {
                longitude:action.payload.longitude,
                latitude:action.payload.latitude,
                address:action.payload.address,
                name:action.payload.name
            }

            default :
            return state
    }
}


export const destinationReducer =(state,action)=>{


    switch(action.type){
        case 'ADD_DESTINATION':
            return {
                longitude:action.payload.longitude,
                latitude:action.payload.latitude,
                address:action.payload.address,
                name:action.payload.name
            }

            default :
            return state
    }
}