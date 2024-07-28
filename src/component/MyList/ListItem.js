import { useEffect, useState } from "react";
import MovieItem from "../Home/MovieItem";

function ListItem() {
  const [favourite, setFavourite] = useState([]);
 

  useEffect(() => {
    const currentUser = localStorage.getItem("currentUserEmail");
		const allUsers = JSON.parse(localStorage.getItem("allUsersData"));
		const currentUserData = allUsers[currentUser];
		if (currentUserData) {
			setFavourite(currentUserData.favList);
		}
  }, []);



  const removeFavouriteMovie = (movie) => {
    
    const currentUser = localStorage.getItem("currentUserEmail");
		const allUsers = JSON.parse(localStorage.getItem("allUsersData"));
		const currentUserData = allUsers[currentUser];
    const movIndex = currentUserData.favList.findIndex((favEle)=> favEle.imdbID === movie.imdbID)
    if(movIndex !== -1){
      currentUserData.favList.splice(movIndex,1)
      setFavourite(currentUserData.favList);
      allUsers[currentUser] = currentUserData
      localStorage.setItem("allUsersData",JSON.stringify(allUsers))
    }
  };

  return (
    <>
      {favourite.length === 0 ? (
        <p className="text-3xl font-bold p-20 flex justify-center items-center">
          No favorite movies found. To add your favourite movies click on
          bookmark.
        </p>
      ) : (
        <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-5">
          <MovieItem
            movies={favourite}
            handleRemove={removeFavouriteMovie}
            favourites={favourite}
          />
        </div>
      )}
    </>
  );
}
export default ListItem;
