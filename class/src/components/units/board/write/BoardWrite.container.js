import BoardWriteUI from "./BoardWrite.presenter"
import { useMutation } from "@apollo/client"
import { useState } from "react"
import { CREATE_BOARD } from "./BoardWrite.queries"



export default function BoardWrite() {

    const [writer, setWriter] = useState("")
    const [title, setTitle] = useState("")
    const [contents, setContents] = useState("")
    const [내함수] = useMutation(CREATE_BOARD)

    const onClickSubmit = async () => {
        const result = await 내함수({
            variables: {
                writer: writer,
                title: title,
                contents:contents
            }
        })
        console.log(result)
        alert(result.data.createBoard.message)
    }

    const onChangeWriter = (event) => {
        setWriter(event.target.value)
    }

    const onChangeTitle = (event) => {
        setTitle(event.target.value)
    }

    const onChangeContents = (event) => {
        setContents(event.target.value)
    }

    return (
        <BoardWriteUI
            aaa={onClickSubmit}
            bbb={onChangeWriter}
            ccc={onChangeTitle}
            ddd={onChangeContents}
         />
    )
}