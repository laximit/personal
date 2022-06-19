import React from "react";
import pfimgs from "./PortfolioImages";
import "../styles/Portfolio.scss";

interface portfolioItemProps {
	img: string | undefined;
	name: string;
	link?: string;
}

function PortfolioItem(props: portfolioItemProps) {
	return (
		<a href={props.link}>
			<div className="portfolio-item">
				<img src={props.img} alt={props.name} />
				<span>{props.name}</span>
			</div>
		</a>
	);
}

function Portfolio() {
	return (
		<div className="section-portfolio">
			<span className="title">Portfolio</span>
			<div>
				<PortfolioItem
					img={pfimgs.codact}
					name="Codact"
					link="https://github.com/laximit/codact"
				/>
			</div>
		</div>
	);
}

export default Portfolio;
