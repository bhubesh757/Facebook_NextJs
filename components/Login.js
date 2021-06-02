import Image from "next/image"

import { signIn } from "next-auth/client";
function Login() {
    return (
        <div className='grid place-items-center'>
             <Image src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png' 
             height = {400} 
             width = {400}
             objectFit = 'contain'
             >

             </Image>
             <h1
             onClick={signIn} 
              className=' mt-20 p-5 bg-blue-500 rounded-full text-white text-center cursor-pointer'>Login With Facebook</h1>
        </div>
    )
}

export default Login
