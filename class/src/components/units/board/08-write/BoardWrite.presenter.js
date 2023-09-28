import * as S from "./BoardWrite.styles";

export default function BoardWriteUI(props) {

    return (
        <>
            작성자: <S.RedInput type ="text" onChange={props.onClickWriter}/><br />
            제목: <input type ="text" onChange={props.onClickTitle}/><br />
            내용: <input type ="text" onChange={props.onClickContents}/><br />
            <S.BlueButton
                rrr="20px"
                qqq="yellow"
                zzz={props.myColor} 
                onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}
            >
                {props.isEdit ? "수정하기" : "등록하기"}
            </S.BlueButton>
        </>
    )
}