import {useState, useEffect} from 'react'

export default function SignupStatePage() {

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const [emailError, setEmailError] = useState("")

    function onChangeEmail(event){
        setEmail(event.target.value)
    }

    function onChangePassword(event){
        setPassword(event.target.value)
    }

    function onClickSignup(){
        if(email.includes("@")===false){
            //alert("이메일이 올바르지 않습니다.")
            setEmailError("이메일이 올바르지 않습니다.")
        }
        else{
            setEmailError("회원가입을 축하합니다.")
            //API 요청
        }
    }

    return (
        <>
            Email: <input type="text" onChange={onChangeEmail} />
            <div>{emailError}</div>
            Password: <input type="password" onChange={onChangePassword} />
            <button>회원가입</button>
        </>
    )
}