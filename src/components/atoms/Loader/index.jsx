import React from 'react'
import { BoxLoading, LoopCircleLoading } from "react-loadingg";

export const Loader_intro = () => {
  return (
    <div className="flex justify-center items-center">
      <BoxLoading speed="1" />
    </div>
  );
}

export const Loader_content = () => {
  return (
    <div className="flex justify-center items-center">
      <LoopCircleLoading size="small"/>
    </div>
  );
};