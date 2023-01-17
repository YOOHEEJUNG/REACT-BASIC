import { useEffect, useInsertionEffect, useState } from "react";


const HookEffect = () => {


    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleAge = (e) => {
        setAge(e.target.value);
    }


    //useEffect(함수) - 화면이 mount된 이후에 동작한다
   /*  
     useEffect( () => {
        console.log(`렌더링 완료. state값 ${name}`); 
    }) 
    */

   // useEffect(함수, []) - 화면이 첫번째 mount에서만 실행된다
//    useInsertionEffect(() => {
//     console.log(`처음만 실행된다`);
//    }, []);


   //useEffect(함수, [state]) - 특정값이 렌더링 될 때만 실행된다
   useEffect(() => {
        console.log(`age or name이 변경될 때 실행된다`);
   },[age, name]);

    return (
        <>
            이름:<input type="text" onChange={handleName} /><br/>
            나이:<input type="number" onChange={handleAge} /><br/>

            이름: {name}, 나이: {age}
        
        </>
    )

}

export default HookEffect;