import { useRef, useState } from "react";


const HookRef = () => {

    //사용자 입력값 data, 화면에 출력값 result
    const [form, setForm] = useState({data: '', result: ''})

    //input
    const handleChange = (e) =>{
        setForm({...form, ["data"]:e.target.value})
    }
    
    //등록
    const handleClick = () => {
        setForm({data:'', result:form.data});

        //Ref 사용
        // console.log(inputTag);
        //useRef의사용 - current로 ref의 현재태그에 접근가능
        console.log(inputTag.current)
        console.log(inputTag.current.value)
        inputTag.current.focus();

    }

    //특정 태그에 이름달기 useRef()
    //반환된 이름을 사용할 태그에 ref속성을 넣는다 
    const inputTag = useRef();
    // console.log(inputTag);

    return (

        <>
            내용: <input type="text" onChange={handleChange} value={form.data} ref={inputTag}/>
            <button onClick={handleClick}>등록하기</button>
            <br/>
            결과: {form.result} 
        </>
    )

}

export default HookRef;