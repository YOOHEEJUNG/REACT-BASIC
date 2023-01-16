import { useState } from "react";

const EventComponentQ2 = () =>{

    

    const [text, setText] = useState({input: '', result:''});

    const handleClick = () => {
        //INPUT은 공백, RESULT는 data로 변경
        const copy = {...text, ['result'] : text.input, ['input']: ''};
        //setText({input:'', result:text.input});
        setText(copy);
    }
    
    const handleChange = (e) =>{
        //INPUT은 사용자의 입력값으로, RESULT는 유지
        const copy = {...text, ['input'] : e.target.value};
        //setText({input:e.target.value, result:text.result});
        setText(copy);
    }

    const handlePress = (e) => {  //엔터키 처리
        console.log(e);
        if(e.keyCode === 13){
            handleClick();
        }
    }

    return(
        <>
            <hr/>
            <h3>인풋데이터 핸들링(실습)</h3>
            <p>클릭시 데이터는 공백으로, 결과는 인풋이 입력한 값으로 처리</p>
            <p>힌트는? 아마도 state는 두 개가 필요할듯?</p>
            
            <input type="text" name="name" onChange={handleChange} onKeyUp={handlePress} value={text.input}/>
            <button type="button" onClick={handleClick}> 추가하기 </button>

            <h3>결과</h3>
            <p>{text.result}</p>   
        </>
    )
}

export default EventComponentQ2;