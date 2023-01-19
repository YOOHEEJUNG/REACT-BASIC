import { useEffect, useRef, useState } from "react";


const HookEffect_again = () => {


    /*
        1.컴포넌트가 마운트된 이후 한번만 id태그에 포커스를 준다

        2.id, pw는 state로 관리한다
        로그인 버튼 클릭시 공백이라면 공백인 태그에 포커스를 주세요
        로그인 버튼 클릭시 공백이 아니라면 경고창으로 id와 pw를 출력해주세요
    */

    //컴포넌트가 마운트된 이후 딱 한 번 id태그에 포커스 주기
    useEffect (() => {
        inputId.current.focus();
    },[]);

    const inputId = useRef(null);
    const inputPw = useRef(null);


    //id, pw state로 관리
    const [data, setData] = useState({id:'', pw:''});

    //id, pw창에 값이 입력되었을 때, 사용자가 입력한 값을 state에 저장 => 태그의 value에 값을 넣어야 화면 출력
    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value});
        // console.log(e.target.value);
        // console.log(setData);
    }

    //로그인 버튼 클릭
    const handleClick =() =>{
       
        if(inputId.current.value === ''){
            inputId.current.focus();
        }else if(inputPw.current.value === ''){
            inputPw.current.focus();
        } else{
            alert(`아이디: ${data.id}, 비밀번호: ${data.pw}`);
        }
        
    }


    return (
        <div>
            <h3>훅 실습</h3>
            <input type="text" name="id" placeholder="아이디" value={data.id} onChange={handleChange} ref={inputId} /><br />
            <input type="password" name="pw" placeholder="비밀번호" value={data.pw} onChange={handleChange} ref={inputPw} /><br />
            <button onClick={handleClick}>로그인</button>
        </div>
    )
}

export default HookEffect_again;