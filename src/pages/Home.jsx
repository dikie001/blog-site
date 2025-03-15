import React, { useEffect, useState } from "react";
import { auth, db } from "../firebase/config";
import { toast } from "react-hot-toast";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";

import { BsTrash } from "react-icons/bs";

const Home = () => {
  const [postList, setPostList] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const collectionRef = collection(db, "posts");
  useEffect(() => {
    const getPosts = async () => {
      setIsLoading(true)
      const data = await getDocs(collectionRef);
      setPostList(data.docs.map((doc)=>({...doc.data(), id:doc.id})));
    setIsLoading(false)
    };
    getPosts();
  },[]);

  const deletePost = async (id)=>{
    const postDoc = doc(db, "posts",id )
    await deleteDoc(postDoc);
    toast.success("Post deleted!")
  }

  const SkeletonLoader = () => {
    return (<>
      <div className="bg-gray-200 p-6 rounded-lg shadow-md w-full max-w-md animate-pulse">
        <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>
        <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
        <div className="h-4 bg-gray-300 rounded w-5/6"></div>
      </div>
      <div className="bg-gray-200 p-6 rounded-lg shadow-md w-full max-w-md animate-pulse">
      <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>
      <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
      <div className="h-4 bg-gray-300 rounded w-5/6"></div>
    </div>
    <div className="bg-gray-200 p-6 rounded-lg shadow-md w-full max-w-md animate-pulse">
      <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>
      <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
      <div className="h-4 bg-gray-300 rounded w-5/6"></div>
    </div>
    
    </>
    );
  };
  
 
  

  return <>
 

  
  <h1 className="text-3xl lg:text-4xl font-extrabold mt-5 text-center">Blogs</h1>
  
  <div className="space-y-6  gap-5 mt-5 ml-5 mr-5 flex flex-col lg:w-[60%] m-auto items-center">

  {isLoading? <SkeletonLoader/> : postList.map((post, index) => (
    <div 
      key={index} 
      className="bg-white relative p-6 rounded-lg shadow-md border border-gray-200 w-full "
    >
      <h1 className="text-xl font-bold text-black">{post.title}</h1>
      <BsTrash className="text-2xl hover:text-red-800 absolute right-4 top-5 text-red-600"/>
      <p className="text-gray-700 mt-2">{post.postText}</p>
      <h4 className="text-sm mb-2 text-gray-500 mt-4">@{post.author.name}</h4>
    <button onClick={()=>{deletePost(post.id)}} className="absolute bottom-2 right-4 px-2 py-2 bg-purple-600 rounded-md text-white font-bold hover:bg-purple-800">Edit Post</button>
    </div>
  ))}
</div>

</>
};

export default Home;
