import React, { useEffect } from "react";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../firebase/config";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const CreatePost = ({isAuth}) => {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");
  const navigate = useNavigate()
  const collectionRef = collection(db, "posts");

  const newPost = async () => {
    const loadingToast = toast.loading('Creating post...')
    await addDoc(collectionRef, {
      title,
      postText,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
      
    });
  setTimeout(()=>{
    toast.success("Post created succesfully!", {id:loadingToast})
  },300)
    navigate('/')
  };
  useEffect(()=>{
   if(!isAuth){
      navigate('/login')
    }
  },[])
  return (
    <div className="bg-white p-5  rounded-lg  mt-10 shadow-md shadow-gray-500 w-full max-w-lg  mx-auto">
      <h1 className="text-2xl text-center font-bold text-black mb-4">
        Create A Post
      </h1>

      <div className="mb-4">
        <label className="block text-black font-medium">Title:</label>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title..."
          className="w-full p-2 border shadow-sm shadow-gray-500 border-gray-300 rounded-md focus:outline-none focus:border-2 focus:border-purple-600"
        />
      </div>

      <div className="mb-4">
        <label className="block text-black font-medium">Post:</label>
        <textarea
          placeholder="Write your post here..."
          onChange={(e) => setPostText(e.target.value)}
          className="w-full p-2 border resize-none shadow-sm shadow-gray-500 border-gray-300 rounded-md focus:border-2 focus:outline-none focus:border-purple-600"
        />
      </div>

      <button
        onClick={newPost}
        className="w-full bg-black  text-white px-4 py-2 rounded-md hover:bg-gray-900 transition"
      >
        Create Post
      </button>
    </div>
  );
};

export default CreatePost;
