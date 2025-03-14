import React, { useEffect, useState } from "react";
import { auth, db } from "../firebase/config";
import { toast } from "react-hot-toast";
import { collection, getDocs } from "firebase/firestore";

const Home = () => {
  const [postList, setPostList] = useState([]);

  const collectionRef = collection(db, "posts");
  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(collectionRef);
      setPostList(data.docs.map((doc)=>({...doc.data(), id:doc.id})));
    };
    getPosts();
  },[]);

  return <>
  <h1 className="text-3xl lg:text-4xl font-extrabold mt-5 text-center">Blogs</h1>
  <div className="space-y-6  gap-5 mt-5 m-5 flex flex-col lg:grid md:grid md:grid-cols-2  items-center">

  {postList.map((post, index) => (
    <div 
      key={index} 
      className="bg-white p-6 rounded-lg shadow-md border border-gray-200 w-full "
    >
      <h1 className="text-xl font-bold text-black">{post.title}</h1>
      <p className="text-gray-700 mt-2">{post.postText}</p>
      <h4 className="text-sm text-gray-500 mt-4">@{post.author.name}</h4>
    </div>
  ))}
</div>

</>
};

export default Home;
