

//리듀서 선언(현재 state, 업데이트에 필요한 정보)
//state값을 밖에서 관리할 수 있음 (HookReducerComponent)

import { useEffect, useReducer } from "react";

import {myReducer} from './HookReducerComponent';


//action을 판단해서 state를 체인지
// const myReducer = (state, action) => {
    
//     //action은 객체
//     // console.log(state);
//     // console.log(action);

//     if(action.type === 'increase'){
//         state = {value : state.value + 1}

//     }else if(action.type === 'decrease'){
//         state = {value : state.value - 1}

//     }else if(action.type === 'reset'){
//         state = {value : 0}

//     }

//     return state;
// }



const HookReducer = () => {
    
    //const [현재값, 리듀서를 업데이트할 수 있는 함수] = useReducer(외부에서 사용할 리듀서함수, 리듀서의 초기값)
    const [state, func] = useReducer(myReducer, {value:0});
    
    /*
    useEffect(() => {
        func({type:'reset'}); //리듀서를 실행시키고, myReducer의 action으로 전달
    },[]);

    console.log(state);
    */

    const up = () => {
        func({type: "increase"})
    }

    return (
        <>
            <button onClick={up}>증가</button>
            <button onClick={() => func({type:"decrease"})}>감소</button>
            <button onClick={() => func({type: "reset"})}>초기화</button>
            결과 {state.value}
        </>
    )
}

export default HookReducer;