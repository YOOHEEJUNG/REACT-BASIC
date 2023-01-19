
/* 
    이미지를 가져오는 방법
    1. 외부 서버에서 경로를 참조 받음(가장 일반적인 방법)

    2. src폴더 밑에 img 파일 참조 가능 (선호 x)
       import img1 from '../img/img1.png';

    2. public 폴더 밑에 넣는 경우 이미지를 바로 참조 가능
*/

import { useState } from "react";

const IterationComponentQ = () => {

    const arr = [
        { id: 1, src: '/img/img1.png', title: '아이폰10', price: 1000 },
        { id: 2, src: '/img/img2.png', title: '아이폰11', price: 2000 },
        { id: 3, src: '/img/img3.png', title: '아이폰12', price: 3000 },
        { id: 4, src: '/img/img4.png', title: '아이폰13', price: 4000 },
    ]

    //state 
    const [list, setList] = useState(arr);
    const [list2, setList2] = useState('');

    //map 함수를 이용해서 div태그 생성
    const newList = list.map(item =>
        <div key={item.id}>
            <img src={item.src} onClick={() => handleClick(item.id)} />
            <p>상품: {item.title}</p>
            <p>가격: {item.price}</p>
        </div>
    )

    //클릭시에 화면에 그려질 내용을 state로 관리
    const handleClick = (a) => {
        const list2 = list.filter(item => item.id == a).map(item => item.src);
        console.log(...list2);
        setList2(list2)
        // const [data, setData] = useState(b);

    }

    return (
        <>
            <h3>이미지 데이터 반복하기</h3>
            {/* <img src="https://raw.githubusercontent.com/yopy0817/data_example/master/img/img1.png" alt="제목" width="100" /> */}
            {/* <img src={img1} alt="제목" width="100"/> */}
            {/* <img src="/img/img1.png"alt="제목" width="100"/> */}
            
            <div>
                <img src={list2} alt="제목" width="300" />
            </div>
            
            <div style={{ display: "flex", justifyContent: "space-around" }}>
                {/* 반복할 요소의 모형 */}
                {/* <div>
                    <img src="/img/img1.png" alt="제목" width="100" />
                    <p>상품: </p>
                    <p>가격: </p>
                </div> */}
                {newList}

            </div>
        </>
    )

}

export default IterationComponentQ;