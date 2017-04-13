const INITIAL_STATE = {all : [], product : null};

export default function (state = INITIAL_STATE, action){

    switch(action.type){
        case 'FETCH_PRODUCTS':
            return {...state, all : action.payload.data};

        case 'SHOW_PRODUCT':
            return {...state, product : action.payload};

        default: 
            return state;
    }
}