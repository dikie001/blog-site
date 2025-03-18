import React, { useEffect, useState } from "react";
import { auth, db } from "../firebase/config";
import { toast } from "react-hot-toast";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";

import { BsTrash } from "react-icons/bs";
import { Navigate, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Home = () => {
  const [postList, setPostList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const collectionRef = collection(db, "posts");
  const navigate = useNavigate();
  const [isDeleting, setIsDeleting] = useState(false)
  useEffect(() => {
    const getPosts = async () => {
      setIsLoading(true);
      const data = await getDocs(collectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setIsLoading(false);
    };
    getPosts();
  }, []);

  const deletePost = async (id) => {
   const deletePost = toast.loading("deleting post...")
    setIsDeleting(true)
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
  
    toast.success("Post deleted!", {id:deletePost});

    setTimeout(()=>{
      navigate(0)
    },1000)
    setIsDeleting(false)
  };

  const editPost = () => {
    toast.error("This feature is not available");
  };
  const SkeletonLoader = () => {
    return (
      <>
 
      <AiOutlineLoading3Quarters className="animate-spin text-purple-700 font-extrabold text-xl"/>
     
        <div className="bg-gray-200 p-6 rounded-lg shadow-md w-full max-md:w-[95%] max-lg:w-[80%] animate-pulse">
          <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-5/6"></div>
        </div>
        <div className="bg-gray-200 p-6 rounded-lg shadow-md w-full max-md:w-[95%] max-lg:w-[80%] animate-pulse">
          <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-5/6"></div>
        </div>
        <div className="bg-gray-200 p-6 rounded-lg shadow-md w-full max-md:w-[95%] max-lg:w-[80%] animate-pulse">
          <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-5/6"></div>
        </div>
      </>
    );
  };

  return (
    <>
    <div className="items-center justify-center flex flex-col">
      <h1 className="text-3xl  lg:text-4xl font-extrabold mt-5 text-center">
        Blogs
      </h1>

      <div className="space-y-6 max-md:w-[95%] max-lg:w-[80%] mb-10 gap-5 mt-5 flex flex-col justify-center lg:w-[60%]   items-center">
        {isLoading ? (
          <SkeletonLoader />
        ) : (
          postList.map((post, index) => (
            <div
              key={index}
              className="bg-white relative p-6 rounded-lg shadow-md shadow-purple-600 border border-gray-200 w-full "
            >
              <h1 className="text-xl font-bold text-black">{post.title}</h1>
              <BsTrash
                onClick={() => {
                  deletePost(post.id);
                }}
                className="text-2xl hover:text-red-800 absolute right-4 top-5 text-red-600"
              />
              <p className="text-gray-700 mt-2">{post.postText}</p>
              <h4 className="text-sm mb-2 text-gray-500 mt-4">
                @{post.author.name}
              </h4>
              <button
                onClick={editPost}
                className="absolute bottom-2 right-4 px-2 py-2 bg-purple-600 rounded-md text-white font-bold hover:bg-purple-800"
              >
                Edit Post
              </button>
            </div>
          ))
        )}
        
      </div>
  
    </div>
    <Footer/>
    </>
    
  );
};

export default Home;
