

const IterationComponent = () =>{

    //반복처리
    const arr = [1, 2, 3, 4, 5];

    // const newArr= arr.map(function(item, index, arr){
    //     return item * 10;
    // })

    // const newArr = arr.map( (item, index, arr) => item * 10);
    // console.log(newArr);

    //2. 반복처리 (태그)
    // 리액트에서 반복 처리시에 ket를 태그에 작성한다 (key는 고유한 값)
    // key는 화면에서 렌더링할 때 변화를 감지하기 위해 참조하는 값이다
    const newArr = arr.map( (item, index) => <li key={index}>{item}</li> );
    console.log(newArr);

    return (
        <>
            <ul>
                {newArr}
                {/* {arr.map( (item, index) => <li key={index}>{item}</li> )} */}
            </ul>
        </>

    )
}

export default IterationComponent;