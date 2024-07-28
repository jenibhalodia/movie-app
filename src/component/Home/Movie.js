import { useEffect, useState } from "react";
import MovieItem from "./MovieItem";
import SearchBox from "./SearchBox";

function Movie() {
	const [movies, setMovies] = useState([]);
	const [favourite, setFavourite] = useState([]);
	const [searchValue, setSearchValue] = useState("");

	const getmovieRequest = async (searchValue) => {
		const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=883f3caa`;
		const response = await fetch(url);
		const responseJson = await response.json();
		if (responseJson.Search) {
			setMovies(responseJson.Search);
		}
	};

	useEffect(() => {
		getmovieRequest(searchValue);
	}, [searchValue]);

	useEffect(() => {
		const currentUser = localStorage.getItem("currentUserEmail");
		const allUsers = JSON.parse(localStorage.getItem("allUsersData"));
		if(allUsers){
			const currentUserData = allUsers[currentUser];
			if (currentUserData) {
				setFavourite(currentUserData.favList);
			}
		}
	}, []);

	const addFavouriteMovie = (movie) => {
		const currentUser = localStorage.getItem("currentUserEmail");
		const allUsers = JSON.parse(localStorage.getItem("allUsersData"));
		const currentUserData = allUsers[currentUser];
		currentUserData.favList.push(movie);
		let newFavouriteList = currentUserData.favList;
		allUsers[currentUser] = currentUserData;
		localStorage.setItem("allUsersData", JSON.stringify(allUsers));

		setFavourite(newFavouriteList);
	};

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
			<SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
			<div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-5 mt-10">
				<MovieItem movies={movies} handleAdd={addFavouriteMovie} handleRemove={removeFavouriteMovie} favourites={favourite} />
			</div>
		</>
	);
}
export default Movie;
