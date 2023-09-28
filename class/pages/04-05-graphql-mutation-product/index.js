import { gql, useMutation } from "@apollo/client"
import { useState } from "react"

const CREATE_PRODUCT = gql`
    mutation createProduct($seller: String, $createProductInput: CreateProductInput!){
        createProduct(seller: $seller, createProductInput: $createProductInput){
            _id
            number
            message
        }
    }
`



export default function GraphqlMutationPage(){

    const [내함수] = useMutation(CREATE_PRODUCT)

    const onClickSubmit = async () => {
        const result = await 내함수({
            variables: {
                seller: "철수",
                createProductInput: {
                    name: "마우스",
                    detail: "좋은 마우스",
                    price: 3000

                }
            }
        })
        console.log(result)
        alert(result.data.createProduct.message)
    }

    return(
            <button onClick={onClickSubmit}>GRAPHQL-API(동기) 요청</button>
    )
}