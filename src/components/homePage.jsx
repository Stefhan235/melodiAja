import "./styles/homePage.css"
import {useState} from 'react';

const homePageModel = (() => {
	const getMusicInfo__EX = () => {
		return [
			{
				title: "Music1",
				artist: "Artist1",
				coverPath: "/defaults/defaultCover0.jpg",
			},
			{
				title: "Music2",
				artist: "Artist2",
				coverPath: "/defaults/defaultCover2.jpg",
			},
			{
				title: "Music3",
				artist: "Artist3",
				coverPath: "/defaults/defaultCover1.jpg",
			}
		]
	}

	return {getMusicInfo__EX}
})()

function HomePage() {
	let model = homePageModel;

	const [musicList, setMusicList] = useState(model.getMusicInfo__EX());

	return (
		<section id="homePage">
			<section className="homePage__section">
				<h2 className="section__heading">Best Picks</h2>
				<div className="section__content section__content--tiled" id="homePage__bestPicks">
					<div className="contentTiled__tile">
						<div className="tile__background">
							<img src="/defaults/defaultCover1.jpg" alt="" />
						</div>
						<div className="tile__text">
							<p className="tile__subheading"> Chill </p>
							<p className="tile__heading"> Study Beats</p>
						</div>
					</div>
					<div className="contentTiled__tile">
						<div className="tile__background">
							<img src="/defaults/defaultCover1.jpg" alt="" />
						</div>
						<div className="tile__text">
							<p className="tile__subheading"> Jazzy </p>
							<p className="tile__heading"> Morning </p>
						</div>
					</div>
					<div className="contentTiled__tile">
						<div className="tile__background">
							<img src="/defaults/defaultCover1.jpg" alt="" />
						</div>
						<div className="tile__text">
							<p className="tile__subheading"> Alternative </p>
							<p className="tile__heading"> Rock</p>
						</div>
					</div>
					<div className="contentTiled__tile">
						<div className="tile__background">
							<img src="/defaults/defaultCover1.jpg" alt="" />
						</div>
						<div className="tile__text">
							<p className="tile__subheading"> Traditional </p>
							<p className="tile__heading"> Folk Music </p>
						</div>
					</div>
				</div>
			</section>
			<section className="homePage__section">
				<h2 className="section__heading">For You</h2>
				<div className="section__content section__content--tiled" id="homePage__forYou">
					<div className="contentTiled__tile">
						<div className="tile__background">
							<img src="/defaults/defaultCover1.jpg" alt="" />
						</div>
						<div className="tile__text">
							<p className="tile__subheading"> Best Of </p>
							<p className="tile__heading"> Pop Music </p>
						</div>
					</div>
					<div className="contentTiled__tile">
						<div className="tile__background">
							<img src="/defaults/defaultCover1.jpg" alt="" />
						</div>
						<div className="tile__text">
							<p className="tile__subheading"> New Year </p>
							<p className="tile__heading"> 2023 </p>
						</div>
					</div>
					<div className="contentTiled__tile">
						<div className="tile__background">
							<img src="/defaults/defaultCover1.jpg" alt="" />
						</div>
						<div className="tile__text">
							<p className="tile__subheading"> Tranquil </p>
							<p className="tile__heading"> Serenity </p>
						</div>
					</div>
				</div>
			</section>
			<section className="homePage__section">
				<h2 className="section__heading">Popular</h2>
				<div className="section__content section__content--list">
					{
						musicList.map((music) => {
							return (
								<div className="contentList__item" key={music.coverPath}>
									<div className="item__image">
										<img src={music.coverPath} alt="music's cover art" />
									</div>
									<div className="item__text">
										<p className="item__heading"> {music.title} </p>
										<p className="item__text"> {music.artist} </p>
									</div>
								</div>
							)
						})
					}
				</div>
			</section>
		</section>
	)
}

export default HomePage;