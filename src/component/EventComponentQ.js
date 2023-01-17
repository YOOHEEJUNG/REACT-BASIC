import { useState } from "react";

const EventComponentQ = () =>{
    
    const [food, setFood] = useState("메뉴를 선택하셈");

    //셀렉트 태그에서는 option태그가 기본 value가 된다
    const change = (e) => {
        setFood(e.target.value);
        // console.log(e.target.value);
    }    

    return (
        <>
        <hr/>
        <h3>셀렉트 태그 핸들링(실습)</h3>
        <p>셀렉트 태그가 체인지 될 때 선택한 결과를 아래에 출력</p>
        <select onChange={change}>
            {/* <option value="">선택</option> */}
            <option>곱창</option>
            <option>닭발</option>
            <option>엽떡 오리지널</option>
            <option>엽떡 로제</option>
        </select>
        <h3>선택한 결과</h3>
        <p> {food}</p>
        </>
    )
}

export default EventComponentQ; 