import { useRef, useState } from "react";

const HookQ2_mine = () => {
    /*
     실습(할 일 목록 만들기)
        1. state {todo:'', list:[]}로 관리하기
        2. 할 일 목록을 작성하고, 클릭시 list에 인풋의 입력값을 추가하고 map을 통해서 화면을 그린다
        3. 등록된 이후에는 ref를 활용해서 input태그에 포커싱을 준다
    */

        // 1. state {todo:'', list:[]}로 관리하기
        const [data,setData] = useState({todo:'', list:[]});

        const inputId = useRef(null);


        //2. 할 일 목록을 작성하고 (이벤트 객체 이용)
        const handleChange = (e) => {
            setData({...data, [e.target.name]: e.target.value});
        }
        
        // 클릭시 list에 인풋의 입력값을 추가하고 map을 통해서 화면을 그린다
        const handleClick = () => {
            let newList3 = data.list.concat(data.todo);
            setData({...data, ['todo']:'' , ['list']:newList3});
            inputId.current.focus(); // 등록된 이후 포커싱    
        }
        
        
        //화면에 출력
        const newData = data.list.map((item, index) => 
        <li key={index}>
            {item}
        </li>
        )
        
        
        //엔터키 처리
        const handlePress =(e) =>{
            if(e.keyCode == 13){
                handleClick();
            }
        }

    
    return(
        <div>
            <h3>ref로 할 일 목록 만들기</h3>
            <input type="text" name="todo" onChange={handleChange} onKeyDown={handlePress}  placeholder="할 일 목록" value={data.todo} ref={inputId}/>
            <button onClick = {handleClick} >등록하기</button>
            <ul>
                {newData}
            </ul>
        </div>
    )

    }
    
export default HookQ2_mine;