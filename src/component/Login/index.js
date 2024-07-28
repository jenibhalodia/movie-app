import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

function Login() {
	const [input, setInput] = useState({
		name: "",
		email: "",
		password: "",
	});
	const [showPassword, setShowPassword] = useState(false);
	const navigate = useNavigate();
	const handleLogin = async (e) => {
		e.preventDefault();
		if (
			input.name === " " ||
			input.email === " " ||
			input.password === " " ||
			!input.name ||
			!input.email ||
			!input.password
		) {
			alert("kindly fill all details");
		} else {
			let currentItems = JSON.parse(localStorage.getItem("allUsersData"));
			
			if (currentItems) {
				let currentUser = currentItems[input.email];
				if (currentUser) {
					if (currentUser.password === input.password) {
						localStorage.setItem("loggedIn", true);
						localStorage.setItem("currentUserEmail", input.email);
						window.dispatchEvent(new Event("storage"));
						navigate("/");
					} else {
						alert("Please use the correct password");
					}
				} else {
					let tempItems = { ...currentItems };
					
					tempItems[input.email] = {
						name: input.name,
						password: input.password,
						favList: [],
					};
					localStorage.setItem("allUsersData", JSON.stringify(tempItems));
					localStorage.setItem("loggedIn", true);
					localStorage.setItem("currentUserEmail", input.email);
					window.dispatchEvent(new Event("storage"));
					navigate("/");
				}
			} else {
				let tempItems = {};
				tempItems[input.email] = {
					name: input.name,
					password: input.password,
					favList: [],
				};
				localStorage.setItem("allUsersData", JSON.stringify(tempItems));
				localStorage.setItem("loggedIn", true);
				localStorage.setItem("currentUserEmail", input.email);
				window.dispatchEvent(new Event("storage"));
				navigate("/");
			}
		}
	};

	return (
		<div className=" h-screen w-full flex justify-center items-center bg-gray-100">
			<div className="bg-white shadow-lg rounded-lg p-8 w-96 flex flex-col justify-center">
				<h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">
					Login
				</h1>
				<div className="mb-4">
					<label className="block text-gray-700 text-sm font-bold mb-2">
						Name
					</label>
					<input
						name="name"
						type="name"
						value={input.name}
						onChange={(e) => {
							setInput({ ...input, [e.target.name]: e.target.value });
						}}
						placeholder="Enter email"
						className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
					/>
				</div>
				<div className="mb-4">
					<label className="block text-gray-700 text-sm font-bold mb-2">
						Email
					</label>
					<input
						name="email"
						type="email"
						value={input.email}
						onChange={(e) => {
							setInput({ ...input, [e.target.name]: e.target.value });
						}}
						placeholder="Enter email"
						className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
					/>
				</div>
				<div className="mb-6 relative">
					<label className="block text-gray-700 text-sm font-bold mb-2">
						Password
					</label>
					<input
						name="password"
						type={showPassword ? "text" : "password"}
						value={input.password}
						onChange={(e) => {
							setInput({ ...input, [e.target.name]: e.target.value });
						}}
						placeholder="Enter password"
						className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
					/>
					<button
						type="button"
						className="absolute inset-y-0 right-0 flex items-center px-3 mt-6 bg-transparent text-gray-500 focus:outline-none"
						onClick={() => setShowPassword(!showPassword)}
					>
						<FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
					</button>
				</div>
				<button
					type="submit"
					onClick={handleLogin}
					className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-700 transition duration-200"
				>
					Login
				</button>
			</div>
		</div>
	);
}

export default Login;
