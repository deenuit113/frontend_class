export default function qqqq(){

    interface IProfile {
        name : string
        age: number | string
        school: string
    }

    const profile: IProfile ={
        name: "철수",
        age: 8,
        school: "다람쥐초등학교"
    }

    const add = (number1: number, number2: number, unit: string) => {
        return number1 + number2 + unit
    }
    const result = add(1000,2000,"원")

    let qqq: any = "철수"
    qqq = 123

    return <div></div>
}