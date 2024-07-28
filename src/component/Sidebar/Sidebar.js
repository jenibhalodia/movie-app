import React, { useEffect, useState } from "react";
import { bottomMenu, topMenu } from "../Navigation/menu";
import { useLocation, useNavigate } from "react-router-dom";

function Sidebar() {
	const location = useLocation();
	const [userName, setUserName] = useState("");
	const navigate = useNavigate();
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	useEffect(() => {
		const checkLoginStatus = () => {
			const loggedIn = localStorage.getItem("loggedIn") === "true";
			setIsLoggedIn(loggedIn);

			if (loggedIn) {
				const currentEmail = localStorage.getItem("currentUserEmail");
				const allUsers = JSON.parse(localStorage.getItem("allUsersData"));
				if (allUsers && currentEmail) {
					const currentUserData = allUsers[currentEmail];
					if (currentUserData) {
						setUserName(currentUserData.name);
					}
				}
			}
		};

		checkLoginStatus();
		window.addEventListener("storage", checkLoginStatus);

		return () => {
			window.removeEventListener("storage", checkLoginStatus);
		};
	}, []);

	if (!isLoggedIn || location.pathname === "/login") {
		return null;
	}

	return (
		<div>
			<div className="drawer lg:h-screen lg:drawer-open flex flex-row items-center bg-gray-200 justify-between p-3 overflow-none">
				<div className="md:hidden text-3xl text-red-400">Watchlists</div>
				<input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
				<div className="drawer-content flex flex-col items-center justify-center ">
					<label
						htmlFor="my-drawer-2"
						className="btn bg-red-400 hover:bg-red-600 drawer-button lg:hidden"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth="1.5"
							stroke="currentColor"
							className="size-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M3.75 9h16.5m-16.5 6.75h16.5"
							/>
						</svg>
					</label>
				</div>
				<div className="drawer-side z-10">
					<label
						htmlFor="my-drawer-2"
						aria-label="close sidebar"
						className="drawer-overlay"
					></label>

					<div className="h-screen w-[250px]">
						<ul className="h-full w-full  flex flex-col bg-base-200 p-5 justify-between">
							<div>
								<div className="font-bold text-red-400 text-3xl mb-5 flex justify-center items-center">
									Watchlists
								</div>
								<label className="relative mb-7 flex items-center gap-2">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth="1.5"
										stroke="currentColor"
										className="size-6 absolute left-5 opacity-50"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
										/>
									</svg>
									<input
										type="text"
										className="border-2 w-full rounded-lg p-2 pr-2 pl-14"
										placeholder="Search"
									/>
								</label>

								{topMenu.map((val, key) => {
									return (
										<>
											<li
												key={key}
												onClick={() => {
													navigate(val.link);
												}}
											>
												<div
													className={` ${
														window.location.pathname === val.link
															? "bg-red-400 text-white "
															: "bg-white hover:bg-red-300 hover:text-white"
													} w-full h-[50px] border-2 p-5 rounded-lg flex flex-row  items-center cursor-pointer gap-3`}
												>
													{val.icon}
													{val.title}
												</div>
											</li>
											<hr className="text-black my-1" />
										</>
									);
								})}
							</div>

							<div>
								<div className=" relative  border-2  rounded-lg w-full flex items-center gap-2 mb-2 ">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 16 16"
										fill="currentColor"
										className="size-6 absolute left-5 opacity-50"
									>
										<path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
									</svg>
									<div className=" p-2 pr-2 pl-16 ">{userName}</div>
								</div>

								{bottomMenu.map((val, key) => {
									return (
										<>
											<li
												key={key}
												onClick={() => {
													localStorage.removeItem("currentUserEmail");
													localStorage.removeItem("loggedIn");
													window.dispatchEvent(new Event("storage"));
													navigate(val.link);
												}}
											>
												<div
													className={` ${
														window.location.pathname === val.link
															? "bg-red-400 text-white "
															: "bg-white hover:bg-red-300 hover:text-white"
													} w-full h-[50px] border-2 p-5 rounded-lg flex flex-row  items-center cursor-pointer gap-3`}
												>
													{val.icon}
													{val.title}
												</div>
											</li>
											<hr className="text-black my-1" />
										</>
									);
								})}
							</div>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Sidebar;
