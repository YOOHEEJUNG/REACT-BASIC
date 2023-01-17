import { useState } from "react";



const IterationComponent2 = () => {

    //1. 반복할 데이터(state로 관리)
    const arr = [
        {id: 1, topic: 'hello'},
        {id: 2, topic: 'bye'},
        {id: 3, topic: 'see you'},
    ];

    const [list, setList]= useState(arr);


    //2. map 함수를 이용해서 li태그로 생성
    const newList = list.map( item => 
        <li key ={item.id} 
            onDoubleClick = { () => handleRemove(item.id)}>
            {item.topic}
        </li>  )

    //3. 인풋데이터 관리
    const [data, setData] = useState('');
    const handleChange = (e) => {
        setData(e.target.value);
    }

    return (
        <>
            <h3>목록 추가하기</h3>
            <input type="text" onChange={handleChange} value={data}/>
            <button type="button" onClick={handleClick}>추가하기</button>

            <ul>    
                {newList}
                
            </ul>
       
       
        </>


    )
}

export default IterationComponent2;