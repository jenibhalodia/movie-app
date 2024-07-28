import React from "react";
import { BsBookmarkPlusFill } from "react-icons/bs";
import Movie from "./Movie";

function Home() {
  return (
    <section className="py-10 lg:px-10 w-full px-8 h-[calc(100vh)] overflow-auto overflow-x-hidden">
      <div className="flex flex-col w-full p-5 border-2 border-[#C49C9A] rounded-lg leading-loose">
        <div className="text-4xl">
          Welcome to <span className="text-red-400">Watchlists</span>
        </div>
        <div className="mt-5 ">
          Browse movies, add them to watchlists and share them with friends.
        </div>
        <div className="flex flex-row flex-wrap items-center text-wrap">
          <>Just click the </>
          <BsBookmarkPlusFill className="opacity-50 m-1" />
          to add a movie, the poster to see more details, or to mark the movie
          as watched.
        </div>
      </div>  
      <Movie/>
    </section>
  );
}

export default Home;
