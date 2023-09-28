import {ChangeEvent, MouseEvent} from 'react'

export interface IBoardWriteProps{
    isEdit: boolean
    data?: any //있어도 되고 없어도 되는 것은 ? 붙임
}

export interface ImyVariables {
    number: number
    writer?: string
    title?: string
    contents?: string
}


export interface IBoardWriteUIProps {
    onClickSubmit: (event: MouseEvent<HTMLButtonElement>) => void
    onClickUpdate: (event: MouseEvent<HTMLButtonElement>) => void
    onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void
    onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void
    onChangeContents: (event: ChangeEvent<HTMLInputElement>) => void
    isEdit: boolean
    data?: any
}


