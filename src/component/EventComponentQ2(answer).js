import { useState } from "react";

const EventComponentQ2_answer = () =>{

    const [data, setData] = useState('');      //인풋데이터
    const [result, setResult] = useState('');  //결과데이터

    
    const handleChange = (e) =>{
        setData(e.target.value); // 비동기적으로 변경 (기존 state값이 출력)
        //    console.log(data);  // 이전 값이 출력됨 (정상!)
    }
    
    const handleClick = (e) => {
       setResult(data); // 사용자가 입력한 값으로 변경
       setData('');
    }

    return(
        <>
            <hr/>
            <h3>인풋데이터 핸들링(실습)</h3>
            <p>클릭시 데이터는 공백으로, 결과는 인풋이 입력한 값으로 처리</p>
            <p>힌트는? 아마도 state는 두 개가 필요할듯?</p>
            
            <input type="text" name="name" onChange={handleChange} value={data}/>
            <button type="button" onClick={handleClick}>추가하기</button>

            <h3>결과</h3>
            <p>{result}</p>   
        </>
    )
}

export default EventComponentQ2_answer;