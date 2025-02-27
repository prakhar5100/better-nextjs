"use client";
import React, { useEffect, useState } from "react";
import { questions } from "@/utils";
import CreatePost from "./components/Start/CreatePost";

const Questionaire = () => {
  const [questionId, setQuestionId] = useState(0);
  const styles =
    "text-mortageGreen font-semibold border-4 !border-mortageGreen";

  useEffect(() => {
    setQuestionId(0);
  }, []);

  return (
    <div className="p-6 font-poppins w-full lg:w-[80%] mx-auto">
      <div className="flex max-lg:flex-col justify-between">
        <div className="text-5xl text-black font-medium leading-snug tracking-tighter">
          Got questions? <br /> We've got answers
        </div>

        <div className="grid grid-flow-row gap-4 place-items-center">
          {questions.map((ques) => (
            <div
              key={ques.id}
              onClick={() => setQuestionId(ques.id)}
              className={`cursor-pointer grid place-content-center h-fit border border-slate-500 rounded-full p-4 py-3
                        ${ques.id === questionId && styles}`}
            >
                {ques.type}
            </div>
          ))}
        </div>

      </div>
      <div className="my-8">
            {
                questions.map((ques) => <CreatePost post={ques.posts} id={ques.id} currId={questionId} key={ques.id}/>)
            }
        </div>

    </div>
  );
};

export default Questionaire;
