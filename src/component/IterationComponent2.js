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

    //4. 추가하기 버튼 클릭시 input의 값을 list의 마지막에 추가
    const handleClick = () => {
      let obj = {id : list[list.length-1].id + 1 , topic : data};
      // list.push(obj); // 이렇게 하면 안 됨! (값을 직접 바꾸면 안 되기 때문 :state의 규칙)
      let newList2 = list.concat(obj); //원본 리스트를 수정하지는 않고 새로운 배열을 반환
      setList(newList2); //state 변경
      setData(''); //input값 초기화
    }

    //5. 삭제기능
    //화살표 함수는 익명함수이기 때문에 호이스팅 불가능
    //이벤트 안에서 함수를 호출로 연결하는 방법
    //onClick = { () => 함수호출() }
    const handleRemove = (a) => {
        // console.log(x); // 삭제를 하기 위한 중요한 키!
        //filter - 콜백의 리턴이 true인 값을 가지고 새로운 배열 생성
        //const ex = [1, 2, 3, 4, 5].filter ( (item) => item != 3 );
        
        const newList = list.filter( item => item.id != a);
        setList(newList);
        
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