'use client'
import { useMortgage } from "@/contexts/MotgageProvider";
import React from "react";

const Input = ({ props }) => {
  const changedValue = props.context
  const {monthly, values, setValues} = useMortgage()
  return (
    <div className="flex max-md:flex-col justify-between relative w-full">
      <div
        className="absolute h-[17px] w-[6px] left-3 top-1/2 transform -translate-y-1/2 rounded-lg"
        style={{ backgroundColor: props.color }}
      ></div>

      <h1 className="pl-7 text-slate-700 text-base tracking-wide my-auto">
        {props.title}
      </h1>

      {props.type ? (
        <div className="relative w-48 max-md:mx-auto">
            <span
            className="absolute left-3 top-1/2 transform -translate-y-1/2 font-medium tracking-wider text-lg" 
            >$</span>
          <input
            defaultValue={props.value}
            type="number"
            className="p-4 border w-full lg:w-48 border-black/30 rounded-lg font-medium tracking-loose 
focus:outline-none focus:border-2 focus:border-green-800 text-right"
            onChange={(e) => {
              setValues((prev) => ({
                ...prev,
                [changedValue] : e.target.value
              })
            )
            }}
          />
        </div>
      ) : (
        <div className="my-auto w-48 flex justify-start max-md:mx-auto"> ${monthly.initial} </div>
      )}
    </div>
  );
};

export default Input;
