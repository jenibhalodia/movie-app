import {
	BrowserRouter,
	Routes,
	Route,
	useLocation,
	Navigate,
} from "react-router-dom";
import Login from "./component/Login";
import Home from "./component/Home";
import MyList from "./component/MyList/MyList";
import Sidebar from "./component/Sidebar/Sidebar";
import ProtectedRoutes from "./component/Service/ProtectedRoutes";

function App() {
	return (
		<BrowserRouter>
			<div className=" flex flex-col md:flex-row h-screen">
				<Sidebar />
				<Routes>
					<Route path="/login" element={<Login />} />
					<Route element={<ProtectedRoutes />}>
						<Route path="/" element={<Home />} />
						<Route path="/mylist" element={<MyList />} />
					</Route>
					<Route path="*" element={<Navigate to="/login" replace />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}
export default App;
