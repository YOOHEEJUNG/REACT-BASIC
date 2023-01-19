import { useState } from "react";



const IterationComponentQ2 = () => {

    //1 - select는 컴포넌트반복으로 option태그를 생성합니다.
    const select = ['HTML', 'Javascript', 'CSS', 'Java', 'Oracle', 'Mysql'];
    const newSelect = select.map( (item, index) => <option key={index}>{item}</option> )


    //2 - 아래 데이터는 state로 관리하고 화면에 li태그로 반복해주세요 .
    const data = [
        {id: 1, type: 'Java', teacher: '이순신'},
        {id: 2, type: 'Java', teacher: '홍길자'},
        {id: 3, type: 'Javascript', teacher: '홍길동'},
        {id: 4, type: 'Oracle', teacher: '이순신'},
        {id: 5, type: 'Mysql', teacher: '이순신'},
        {id: 6, type: 'CSS', teacher: '박찬호'},
        {id: 7, type: 'HTML', teacher: 'coding404'},
    ];
    
    const [list, setList] = useState(data);
    const newList = list.map( item => <li key={item.id}>{item.type}-{item.teacher}</li>)

    //3 - 셀렉트박스가 체인지되면 이벤트객체를 활용해서 선택된 값만 필터링해주세요.
    const handleChange = (e) => {
        //console.log( e.target.value );
        //원본데이터에서 filter를 수행
        let newList = data.filter( item => item.type === e.target.value );
        setList(newList);
    }

    //4 - 숙제: 검색 기능 만들기
    const [search, setSearch] = useState('');
    const searchChange = (e) => {
        setSearch(e.target.value);
    }
	const searchClick = () => {
		//search //사용자의 검색값
		//data객체에서 조회
		let newList = data.filter( obj => obj.type.toLowerCase().includes(search) ||
										  obj.teacher.includes(search) )
		setList(newList);
    }


    return (
        <div>

            <h3>실습</h3>
            <h3>검색기능- 대소문자를 구분하지 않고 teacher, type에 포함된 데이터만 필터링</h3>
            Search: <input type="text" onChange={searchChange} value={search}/>
            <button onClick={searchClick}>검색</button>

            <br/>
            과목찾기:
            <select onChange={handleChange}>
                {newSelect}
            </select>
            <ul>
                {newList}
            </ul>
        </div>
    )


}

export default IterationComponentQ2;
