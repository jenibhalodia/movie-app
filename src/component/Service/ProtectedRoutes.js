import React, { useEffect, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";

function ProtectedRoutes() {
	const [auth, setAuth] = useState(true);
	useEffect(() => {
		const currentUser = localStorage.getItem("currentUserEmail");
		const loggedIn = localStorage.getItem("loggedIn");
		if (loggedIn && currentUser) {
			setAuth(true);
		} else {
			setAuth(false);
		}
	}, []);

	return auth ? <Outlet /> : <Navigate to={"/login"} />;
}

export default ProtectedRoutes;
