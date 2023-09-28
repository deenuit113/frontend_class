import { BlueButton, RedInput } from "./BoardWrite.styles";

export default function BoardWriteUI(props) {

    return (
        <>
            작성자: <RedInput type ="text" onChange={props.bbb}/><br />
            제목: <input type ="text" onChange={props.ccc}/><br />
            내용: <input type ="text" onChange={props.ddd}/><br />
            <BlueButton onClick={props.aaa}>GRAPHQL-API(동기) 요청</BlueButton>
        </>
    )
}