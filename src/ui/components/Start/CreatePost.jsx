import React from "react";
import Image from "next/image";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

const CreatePost = ({ post, id, currId }) => {
  return (
    <div className={`grid lg:grid-cols-3 lg:grid-rows-2 grid-rows-1 gap-5 text-black ${id === currId ? `opacity-100` : `opacity-0`}`}>
      <div className="bg-lightGreen lg:col-start-1 lg:col-end-2 row-span-1 p-8 rounded-lg flex flex-col justify-between">
        <div className="text-black text-xl font-medium"> {post[0].title}</div>

        <IoArrowForwardCircleOutline size={50}/>

        <Image src={post[0].image} width={1000} height={500} alt="1st" className="rounded-lg"/>
      </div>

      <div className="bg-lightGreen lg:col-start-2 lg:col-end-4 row-span-1 flex max-lg:flex-col justify-between p-8 rounded-lg">
        <div className="flex flex-col gap-4">
          <div className="text-black text-xl font-medium">{post[1].title}</div>
          <div className="text-slate-700 text-sm w-[90%] tracking-wide leading-normal">{[post[1].content]}</div>
          <IoArrowForwardCircleOutline size={50} />
        </div>

          <Image src={post[1].image} width={250} height={250} alt="2nd" className="object-contain"/>
      </div>

      <div className="bg-lightGreen lg:col-start-1 lg:col-end-3 row-span-1 
      flex justify-between p-8 rounded-lg gap-6 max-lg:flex-col">

      <Image src={post[2].image} width={250} height={250} alt="2nd" className="object-contain rounded-lg"/>

        <div className="flex flex-col gap-4">
          <div className="text-black text-xl font-medium">{post[2].title}</div>
          <div className="text-slate-700 text-sm w-[90%] tracking-wide leading-normal">{[post[2].content]}</div>
          <IoArrowForwardCircleOutline size={50} />
        </div>

      </div>
      

      <div className="bg-lightGreen lg:col-start-3 lg:col-end-4 row-span-1 p-8 rounded-lg flex flex-col justify-between">
        <div className="text-black text-xl font-medium"> {post[3].title}</div>

        <IoArrowForwardCircleOutline size={50} />

        <Image src={post[3].image} width={500} height={500} alt="4nd" className="rounded-lg object-contain" />
      </div>
    </div>
  );
};

export default CreatePost;
