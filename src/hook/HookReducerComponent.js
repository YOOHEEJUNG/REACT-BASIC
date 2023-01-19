
const myReducer = (state, action) => {
    
    //action은 객체
    // console.log(state);
    // console.log(action);

    if(action.type === 'increase'){
        state = {value : state.value + 1}

    }else if(action.type === 'decrease'){
        state = {value : state.value - 1}

    }else if(action.type === 'reset'){
        state = {value : 0}

    }

    return state;
}

//기본 모형 ( 객체를 반환 )
export {myReducer};


const nameReducer = (state, action) => {

    // console.log(action.name) = e.target.name
    if(action.name == "name"){
        state = {...state, ["name"]:action.value};
    }else if(action.name == "age"){
        state = {...state, ["age"]:action.value};
    }




    state = {...state, [action.name]:action.value};

    return state;
}

export {nameReducer};
