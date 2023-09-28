import * as S from "./BoardWrite.styles";

export default function BoardWriteUI(props) {

    return (
        <>
            작성자: <S.RedInput type ="text" onChange={props.onClickWriter}/><br />
            제목: <input type ="text" onChange={props.onClickTitle}/><br />
            내용: <input type ="text" onChange={props.onClickContents}/><br />
            <S.BlueButton
                rrr="15px"
                qqq="purple"
                zzz={props.myColor} 
                onClick={props.onClickSubmit}
            >
                GRAPHQL-API(동기) 요청
            </S.BlueButton>
        </>
    )
}