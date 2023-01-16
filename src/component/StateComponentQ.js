import { useState } from "react";

const StateComponentQ = () =>{
    
    // < 내 답안 >
    // let [number, setNumber] = useState("0");
    // let plus = () => setNumber(number+1);
    // let minus = () => setNumber(number-1);
    // let reset = () => setNumber(0);


    // return(
    //     <>
    //     <h3>카운트: {number}</h3>
    //     <button onClick={plus}>증가</button>
    //     <button onClick={minus}>감소</button>
    //     <button onClick={reset}>초기화</button>   
    //     </>
    // )


    // < 선생님 답안 >
    const [number, setNumber] = useState("0");  // count++로 state를 직접 수정하는 것은 불가능 
                                                // 👩‍💻 이게 const 때문이야 아니면 그냥 state라서 그런 거야?

    return(
            <>
            <h3>카운트: {number}</h3>
            <button onClick={() => setNumber( number + 1 )}>증가</button>
            <button onClick={() => setNumber( number - 1 )}>감소</button>
            <button onClick={() => setNumber(0)}>초기화</button>   
            </>
    )


}

export default StateComponentQ;