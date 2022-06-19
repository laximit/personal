import React from "react";

// Styling
import "../styles/Profile.scss";

// Icons
//import GithubLogo from "../assets/svg/github-brands.svg";
import InstaLogo from "../assets/svg/instagram-brands.svg";
import LinkedinLogo from "../assets/svg/linkedin-in-brands.svg";
import RedditLogo from "../assets/svg/reddit-alien-brands.svg";

import images from "./DefaultIcons";

// Images
const ProfilePic = require("../assets/profile-picture.jpeg");

interface socialProps {
	img: string | undefined;
	link?: string;
	name: string;
}

function SocialItem(props: socialProps) {
	return (
		<div className="social-item">
			<a href={props.link}>
				<img src={props.img} alt={props.name} />
			</a>
			<span>{props.name}</span>
		</div>
	);
}

function Profile() {
	return (
		<div className="section-profile">
			<img src={ProfilePic} alt="Profile Picture" />
			<div>
				<span>Murilo Lobos</span>
				<span>Estudante (Desenvolvimento Web)</span>
			</div>
			<div className="social">
				<SocialItem
					img={images.githubLogo}
					name="Github"
					link="https://github.com/laximit"
				/>
				<SocialItem
					img={images.instaLogo}
					name="Instagram"
					link="https://www.instagram.com/murilo_lobos/"
				/>
				<SocialItem
					img={images.linkedinLogo}
					name="Linkedin"
					link="https://www.linkedin.com/in/murilo-lobos-831a64234/"
				/>
				<SocialItem
					img={images.redditLogo}
					name="Reddit"
					link="https://www.reddit.com/user/Laximit"
				/>
			</div>
		</div>
	);
}

export default Profile;
