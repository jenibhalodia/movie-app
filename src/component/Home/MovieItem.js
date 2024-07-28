import React from "react";
import { BsBookmarkDashFill, BsBookmarkPlusFill } from "react-icons/bs";

function MovieItem({ movies, handleRemove,handleAdd, favourites }) {
	return (

    
		<>
			{movies.map((movie, index) => {
				return (
					
						<div className="relative rounded-xl shadow-xl bg-base-100 h-[475px] ">
							{favourites.findIndex(
								(favEle) => favEle.imdbID === movie.imdbID
							) === -1 ? (
								<>
									<BsBookmarkPlusFill
										onClick={() => handleAdd(movie)}
										className="text-3xl cursor-pointer  text-green-600  m-1 absolute left-0 top-0"
									/>
								</>
							) : (
								<>
									<BsBookmarkDashFill
										onClick={() => handleRemove(movie)}
										className=" text-3xl cursor-pointer  text-red-500 m-1 absolute left-0 top-0"
									/>
								</>
							)}

							
								<img
									className="h-[350px] w-full object-none rounded-t-xl "
									src={
										movie.Poster
											? movie.Poster
											: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFpd6CaO3lsT0DLsZlPz8QNdsNRfv9kWFAbA&s"
									}
                 
									alt="img"
								/>
							
							<div className="p-3">
								<h2 className=" text-xl font-semibold ">
									{movie.Title.slice(0, 18)}{movie.Title.length > 17 ? "..." : ""}
								</h2>
								<p className="text-sm">Year-({movie.Year})</p>
							</div>
						
					</div>
				);
			})}
		</>
	);
}

export default MovieItem;
