import { useState } from "react";




const EventComponent2 = () =>{

    //state를 객체로 관리
    const [data, setData] = useState({name: '', topic: ''});

    //한 개의 state로 여러 개의 데이터 관리

    const handleChange = (e) =>{
        //객체 안에서 key를 바꾸는 방법["키"] : 값
        const copy = {...data, [e.target.name] :e.target.value}; //데이터 복사 👉 데이터 형식을 복사해서 데이터 내부의 키에 대한 값만 변경
        setData(copy); //state 변경
    }

    
    //    const handleTopic = (e) =>{
    //     //객체 안에서 key를 바꾸는 방법["키"] : 값

    //      console.log(e.target.name);

    //      const copy = {...data, ["topic"] :e.target.value}; //데이터 복사 👉 데이터 형식을 복사해서 데이터 내부의 키에 대한 값만 변경
    //      setData(copy);

    //      }
    

    const handleClick = () =>{
        alert(`${data.name}님 할 일: ${data.topic}`)
        setData({name:'', topic:''}); //state초기화 (객체라서)
    }

    return (
        <>
            <h3>리액트 이벤트 핸들링(객체로)</h3>
        
            <input type="text" name="name" onChange={handleChange} value={data.name}/>
            <h5>결과: {data.name}</h5>
            <br/> <input type="text" name="topic" onChange={handleTopic} value={data.topic}/>
            <h5>결과: {data.topic}</h5>
            <br/><button type="button" onClick={handleClick}>ClickMe</button>
        </>
    )

}

export default EventComponent2;