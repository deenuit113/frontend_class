import BoardWriteUI from "./BoardWrite.presenter"
import { useMutation } from "@apollo/client"
import { useState } from "react"
import { CREATE_BOARD } from "./BoardWrite.queries"



export default function BoardWrite() {
    const [myColor, setMyColor] = useState(false)
    
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
        if(event.target.value&&title&&contents){
            setMyColor(true)
        }
    }

    const onChangeTitle = (event) => {
        setTitle(event.target.value)
        if(writer&&event.target.value&&contents){
            setMyColor(true)
        }
    }

    const onChangeContents = (event) => {
        setContents(event.target.value)
        if(writer&&title&&event.target.value){
            setMyColor(true)
        }
    }

    return (
        <BoardWriteUI
            onClickSubmit={onClickSubmit}
            onChangeWriter={onChangeWriter}
            onChangeTitle={onChangeTitle}
            onChangeContents={onChangeContents}
            myColor={myColor}
         />
    )
}