import React, { useState } from "react";
import ListItem from "./ListItem";

function MyList() {

  return (
    <section className="py-10 lg:px-10 w-full px-8 h-[calc(100vh)] overflow-auto overflow-x-hidden">
      <div className="flex flex-col w-full p-5 leading-loose">
        <div className="text-4xl">
          Welcome to <span className="text-red-400">Personal Watchlist</span>
        </div>
        <div className="mt-5 font-bold text-lg">About this watchlist</div>
        <div className="flex flex-row flex-wrap items-center text-wrap">
          This list contains user's personal favourite movies list items.
        </div>
      </div>
      <ListItem/>
    </section>
  );
}

export default MyList;
