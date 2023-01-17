import { useState } from "react";

const IterationComponentQ2 = () => {

    //1 - select태그는 컴포넌트 반복으로 option태그를 생성한다
    const select = ['HTML', 'Javascript', 'CSS', 'Java', 'Oracle', 'Mysql'];
    
    //OPTION태그에 넣기 성공
    //반복을 돌릴 때는 key값을 반드시 넣어줘야 함
    const newSelect = select.map(
        (item, index) => <option key={index}>{item}</option>)
//    console.log(newSelect.value);
    
    //2. data는 state로 관리하고 화면에 li태그로 반복을 한다
    const data = [
        {id: 1, type: 'Java', teacher: '이순신'},
        {id: 2, type: 'Java', teacher: '홍길자'},
        {id: 3, type: 'Javascript', teacher: '홍길동'},
        {id: 4, type: 'Oracle', teacher: '이순신'},
        {id: 5, type: 'Mysql', teacher: '이순신'},
        {id: 6, type: 'CSS', teacher: '박찬호'},
        {id: 7, type: 'HTML', teacher: 'coding404'},
    ];


    //state로 관리 => 화면에 태그 반복 성공!
    const [list, setList] = useState(data);
    
    const newList= list.map( item => 
                         <li key={item.id}>
                            {item.type} - {item.teacher}
                         </li>)

    
    const [subject, setSubject] = useState("");
   

    const handleChange = (e) => {
        const subject = data.filter(item => item.type === e.target.value); //원본에서 필터링 하는 이유 : state는 계속 상태가 바뀐 상태에서 필터링이 일어나기 때문에!
        console.log(subject);
        setList(subject);
    }


    //3. 셀렉트 박스가 체인지 되면, 이벤트 객체를 활용해서 선택된 값만 필터링해서 보여주면 된다

    //4. 숙제: 검색 기능 만들기



    return (
        <>
            <h3>컴포넌트 반복 실습</h3>
            <h3>검색 기능 - 대소문자를 구분하지 않고 teacher, type에 포함된 데이터만 필터링</h3>
            Search: <input type="text"></input>
            <button type="button">검색</button><br/>

            
            <select onChange={handleChange}>
                {newSelect}
            </select>
            <ul>
                {newList}
            </ul>
        </>
    )



}

export default IterationComponentQ2;