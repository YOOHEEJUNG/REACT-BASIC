import { useState } from "react";
import { unstable_renderSubtreeIntoContainer } from "react-dom";



const StateComponent = () => {

    /*
        p.103
        state란 컴포넌트에서 변화하는 값을 의미한다
        state가 변경되면 컴포넌트 리렌더링 시킨다
        함수형 컴포넌트에서는 useState()을 사용한다
    */


    // 1st
    // let data = useState('초기값');
    // console.log(data);
    // let a = data[0];  - 현재값
    // let b = data[1];  - 함수

    //2nd
    let [data, setData] = useState('초기값');
    // console.log(data);     //state값
    // console.log(setData);  //state setter함수

    // data = '1'; 👉 직접 값을 바꾸게 되면 값이 바뀌어서 나타나지만 나중에 문제 발생할 수 있음
    // setData('변경할값');

    let func = () => setData("변경");
    let enter = () => setData("입장");
    let exit = () => setData("퇴장");
    // 값을 변경할 때마다 렌더링이 일어나고 있다!

    // state는 여러개일 수 있다
    let [color, setColor] = useState("pink");
    console.log(color);


    return (
        <>
            <h3 style={{ 'color': color }}> state값 : {data} </h3>
            <button onClick={func}> 값 변경하기 </button>
            <button onClick={enter}> 입장 </button>
            <button onClick={exit}> 퇴장 </button>

            <hr />
            <button onClick={() => setColor("red")}>붉은색</button>
            <button onClick={() => setColor("blue")}>푸른색</button>
            <button onClick={() => setColor("green")}>그 사이 3초 그 짧은색</button>
            
        </>
    )
}

export default StateComponent;