import { useQuery, gql } from "@apollo/client"

const FETCH_BOARD = gql`
    query fetchBoard($number: Int){
        fetchBoard(number: $number){
            writer
            title
            contents
        }
    }
`

export default function StaticRoutedPage() {
    const {data} = useQuery(FETCH_BOARD, {
        variables: {
            number: 2
        }
    })

    console.log(data)

    return (
        <>
            <div>2번 페이지 이동 완료</div>
            <div>작성자: {data ? data.fetchBoard.writer : "로딩중"} </div>
            <div>제목: {data ? data.fetchBoard.title : "로딩중"} </div>
            <div>내용: {data ? data.fetchBoard.contents : "로딩중"} </div>
        </>
        
    )
}