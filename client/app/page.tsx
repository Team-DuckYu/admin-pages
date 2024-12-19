import Link from "next/link";

interface InputProps {
  name: string;
  placeholder: string;
}


const Input = ({name, placeholder}:InputProps) => {
  return <input className="w-full px-2 py-3 border rounded-md outline-blue-400" name={name} placeholder={placeholder}/>
}

export default function Home() {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <form>
        <div className="flex flex-col items-center justify-center w-[480px] bg-white px-28 py-16 gap-4 rounded-md border shadow-md mx-auto">
          <h1 className="font-semibold text-2xl mb-8">ROO FAMILY</h1>
          <Input name="username" placeholder="아이디"/>
          <Input name="password" placeholder="비밀번호"/>
          <button className="w-full bg-blue-500 text-gray-100 py-2 rounded-md hover:bg-blue-600">로그인</button>
          <button className="w-full bg-transparent text-gray-400 py-2 rounded-md border">회원가입</button>
          <Link href="/home" className="text-gray-400">비밀번호를 잊으셨나요?</Link>
        </div>
      </form>
    </div>
  );
}
