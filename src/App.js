import { Fragment } from "react";
import MyComponent from "./component/MyComponent";
import MyComponent2 from "./component/MyComponent2";
import MyComponent3 from "./component/MyComponent3";



const App = () => {

    return (
        <Fragment>
            <h3>나의 App.js</h3>
            <MyComponent name={"홍길동"} age={20}/> { /*컴포넌트의 좋은 점 : 재활용 가능*/ }
            <MyComponent2 />
            <MyComponent3/>
        </Fragment>
    )

}

export default App; //내보내기
