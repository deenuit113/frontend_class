interface IProfile {
    name: string
    age: number
    school: string
    hobby?: string
}

// 1. Partial 타입 모두 ? 넣는 것 
type aaa = Partial<IProfile>

// 2. Required 타입 모두 ? 빼는 것
type bbb = Required<IProfile>

// 3. Pick 타입 고르는 것
type ccc = Pick<IProfile, "name" | "age">

// 4. Omit 타입 빼는 것
type ddd = Omit<IProfile, "school">

// 5. Union 타입
type eee = "철수" | "영희" | "훈이" //Union 타입 셋만 됨
let child1 : eee = "철수"
let child2 : string = "사과" // String 이면 다 됨
// Record 타입
type fff = Record<eee, IProfile>

// 6. 객체의 key들로 Union타입 만들기
type ggg = keyof IProfile //keyof
let myProfile: ggg = "hobby"

// 7. type vs interface 차이 => 선언병합 type은 안 됨
interface IProfile{
    candy: number //선언병합으로 추가됨
}

// 8. 응용
let profile: Partial<IProfile> = {
    candy: 10
}
 
 