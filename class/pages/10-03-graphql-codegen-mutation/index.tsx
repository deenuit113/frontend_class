import { gql, useMutation } from "@apollo/client"
import { useState } from "react"
import { IMutation, IMutationCreateBoardArgs } from "../../src/commons/types/generated/types"

const 나의그래프큐엘세팅 = gql`
    mutation createBoard($writer: String, $title: String, $contents: String){
        createBoard(writer: $writer, title: $title, contents:$contents){
            _id
            number
            message
        }
    }
`



export default function GraphqlMutationPage(){
    const [writer, setWrite] = useState("")
    //const [내함수] = useMutation<결과타입, 변수타입>(나의그래프큐엘세팅)
    const [내함수] = useMutation<Pick<IMutation, "createBoard">, IMutationCreateBoardArgs>(나의그래프큐엘세팅)

    const onClickSubmit = async () => {
        const result = await 내함수({
            variables: {
                writer:"철수",
                title:"제목입니다",
                contents:"내용입니다"
            }
        })
        console.log(result)
        
    }

    return(
        <button onClick={onClickSubmit}>GRAPHQL-API(동기) 요청</button>
    )
}