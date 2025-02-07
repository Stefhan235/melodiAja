import React from 'react';
import ReactDOM from 'react-dom/client';
import {
	createBrowserRouter,
	RouterProvider,
	Route,
	Routes,
} from 'react-router-dom';

import topbar from "./components/topbar.jsx";
import sidebar from "./components/sidebar.jsx"
import musicPlayer from "./components/musicPlayer.jsx"
import modal from "./components/modal.jsx"

import HomePage from "./components/homePage.jsx"
import searchPage from "./components/searchPage.jsx"
import userPage from "./components/userPage.jsx"
import myPlaylistPage from "./components/myPlaylistPage.jsx"
import myMusicPage from "./components/myMusicPage.jsx"
import musicInfoPage from "./components/musicInfoPage.jsx"
import musicQueue from "./components/musicQueue.jsx"

import "./App.css";

let Topbar = topbar.render;
let Sidebar = sidebar.render;
let UserPage = userPage.render;
let SearchPage = searchPage.render;
let MyPlaylistPage = myPlaylistPage.render;
let MusicPlayer = musicPlayer.render;
let MyMusicPage = myMusicPage.render;
let MusicInfoPage = musicInfoPage.render;
let TestBox = modal("testing", "Welcome").render;
let MusicQueue = musicQueue.render;

const ROUTER = createBrowserRouter([
	{
		path: "/*",
		element: (
			<>
				<section className="rootGrid">
					<Sidebar />
					<main onClick = {(e) => {
					}} >
						<Topbar />
						<Routes>
							<Route path="/discover" element={<HomePage />} />
							<Route path="/search" element={<SearchPage />} />
							<Route path="/myPlaylist" element={<MyPlaylistPage />} />
							<Route path="/myMusic" element={<MyMusicPage />} />
							<Route path="/user" element={<UserPage />}>
								<Route path=":id" element={<UserPage />} />
							</Route>
						</Routes>
					</main>
				</section>
				<MusicInfoPage />
				<MusicQueue />
				<MusicPlayer />
				<TestBox Component={
					function() {
						return (
							<>
								<h2> Let me put it in the language you can understand </h2>
								<p> Oh so sorry, no coming here! You deliver, wrong place!</p>
							</>
						)
					}
				}/>
			</>
		),
	},
]);

(function main() {
	ReactDOM.createRoot(
		document.getElementById('root')).render(
			<>
				<RouterProvider router={ROUTER} />
			</>
	)
})()
