import "./App.css";

import { ExampleNavbarOne } from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Events from "./screens/Events";
import Login from "./screens/Login";
import { SignUp } from "./components/Signup";
import Host from "./components/Host";
import EventPage from "./components/EventPage";
import Shop from "./components/Shop";
import LeaderboardTable from "./components/leaderboardTable";

import ListofBlogs from "./components/ListofBlogs";
import BlogPage from "./components/BlogPage";
import ProfilePage from "./components/ProfilePage";
function App() {
	//localStorage.setItem("userid","");
	return (
		<div>
			<BrowserRouter>
				<ExampleNavbarOne />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/events" element={<Events />} />
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<SignUp />} />
					<Route path="/events/host" element={<Host />} />
					<Route path="/events/:eventid" element={<EventPage />} />
					<Route path="/shop" element={<Shop />} />
					<Route path="/leaderboard" element={<LeaderboardTable />} />
					<Route path="/profile" element={<ProfilePage/>}/>
					<Route path="/blogs" element={<ListofBlogs/>}/>
					<Route path="/blogs/:id" element={<BlogPage/>}/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
