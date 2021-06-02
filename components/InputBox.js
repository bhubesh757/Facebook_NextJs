import { useSession } from "next-auth/client";
import Image from "next/image"
import {EmojiHappyIcon} from '@heroicons/react/outline'
import {CameraIcon , VideoCameraIcon} from '@heroicons/react/solid'
import { useRef, useState } from "react";
import { db, storage } from "../firebase";
import firebase from "firebase"
function InputBox() {

    const [session]  = useSession();
    const inputRef = useRef(null);
    const filepickerRef = useRef(null);
    // this shows the selected image
    const [imageToPost, setimageToPost] = useState(null);

    const sendPost = (e) => {
        e.preventDefault(); 

        if (!inputRef.current.value) return ;

        db.collection('posts').add({
            message : inputRef.current.value,
            name:session.user.name,
            email : session.user.email,
            image : session.user.image,
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
        }).then(doc => {
            if(imageToPost) {
                const uploadTask = storage.ref(`posts/${doc.id}`).putString(imageToPost,'data_url')
                
                removeImage();

                uploadTask.on('state_change' , 
                null , 
                error => console.error(error) ,() => {
                   storage.ref('posts').child(doc.id).getDownloadURL().then(url => {
                       db.collection('posts').doc(doc.id).set({
                           postImage:url
                       } , {merge: true})
                   })
                })
            }
        })

        inputRef.current.value = ""
    }

    // important adding image to post
    const addImageToPost =(e) => {
      const reader = new FileReader();
      if(e.target.files[0]) {
          reader.readAsDataURL(e.target.files[0]);
      }
      reader.onload = (readerEvent) => {
          setimageToPost(readerEvent.target.result);
      }
    }

    // removing the image from the post

    const removeImage =()=> {
      setimageToPost(null);
    }

    return (
        <div className='bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6'>
            <div className='flex space-x-4 p-4 items-center'>
            <Image
                 className='rounded-full'
                 src = {session.user.image}
                 width={30}
                 height={30}
                 layout='fixed'
                >
                </Image> 
                <form className='flex flex-1' >
                    <input ref ={inputRef} className ='rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none' type ='text' placeholder={`What's on Your Mind ${session.user.name}?`}></input>
                    <button hidden type = 'submit' onClick={sendPost}></button>
                </form>

                {/* preview */}

                {imageToPost && (
                    <div onClick = {removeImage} className='flex-col cursor-pointer filter hover:brightness-110
                    transition duration-150 transform hover:scale-105
                    '>
                        <img className='h-10 object-contain' src={imageToPost} alt=''></img>
                        <p className='text-xs text-red-500 text-center'>Remove</p>
                    </div>
                )}
            </div>

            {/* Icons  */}
            <div className='flex justify-evenly p-3 border-t'>
                <div className='inputIcon'>
                    <VideoCameraIcon className='h-7 text-red-500'></VideoCameraIcon>
                    <p className='text-xs sm:text-sm xl:text-base'>Live Video</p>
                </div>

                <div onClick = {() => filepickerRef.current.click()} className='inputIcon'>
                <CameraIcon className='h-7 text-green-500'></CameraIcon>
                    <p className='text-xs sm:text-sm xl:text-base'>Photo/Video</p>
                    <input ref ={filepickerRef} hidden  type = 'file' onChange={addImageToPost}></input>
                </div>

                <div className='inputIcon'>
                <EmojiHappyIcon className='h-7 text-yellow-500'></EmojiHappyIcon>
                    <p className='text-xs sm:text-sm xl:text-base'>Feeling/Activity</p>
                </div>


            </div>
        </div>
    )
}

export default InputBox
