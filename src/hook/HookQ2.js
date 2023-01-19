import { useEffect, useRef, useState } from "react";

const HookQ2 = () => {
    /*
     실습(할 일 목록 만들기)
        1. state {todo:'', list:[]}로 관리하기
        2. 할 일 목록을 작성하고, 클릭시 list에 인풋의 입력값을 추가하고 map을 통해서 화면을 그린다
        3. 등록된 이후에는 ref를 활용해서 input태그에 포커싱을 준다
    */

    //state로 데이터 관리하기
    const [data, setData] = useState({todo:'', list:[]});
    

    //할 일 목록 작성하기
    const handleChange = (e) => {
        //할 일 작성값 저장
        setData({...data, [e.target.name] : e.target.value});
        
    }
    
    const inputId = useRef();
    
    //버튼 클릭 시에 작성한 할 일 추가하기
    const handleClick = () => {
        let newList3 = data.list.concat(data.todo); 
        setData({...data, ["todo"]:'', ["list"]: newList3}); 
        inputId.current.focus();
          
    }
    
    //화면에 렌더링
    const newData = data.list.map((item, index) => 
            <li key= {index} onClick={() => handleRemove(index)}>
              {item}
            </li>
      )
      
      const handleRemove = (a) => {
        console.log(a);
          const remove = data.list.filter( (item, index ) => index != a);
          //console.log(remove);
       
          setData({...data, ["list"]: remove});    
      }
    


      const handlePress = (e) => {
        console.log(e);
        if(e.keyCode === 13){
            handleClick();
        }
    }
    return(
        <div>
            <h3>ref로 할 일 목록 만들기</h3>
            <input type="text" name="todo" onChange = {handleChange} onKeyUp={handlePress} placeholder="할 일 목록" value={data.todo} ref={inputId}/>
            <button onClick = {handleClick} >등록하기</button>
            <ul>
                {newData}
            </ul>
        </div>
    )
}
export default HookQ2;