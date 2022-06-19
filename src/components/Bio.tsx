import React from "react";

import "../styles/Bio.scss";

function Bio() {
	return (
		<div className="section-bio">
			<span className="title">História</span>
			<BioItem year="2001" desc="Nasceu no Espirito Santo, Brasil." />
			<BioItem
				year="2017"
				desc="Completou o ensino médio // Iniciou sua jornada em varias linguagens de programação."
			/>
			<BioItem
				year="2019"
				desc="Começou a trabalhar na empresa Lucas Solutions como Suporte de Sistema usando C#."
			/>
			<BioItem
				year="2020"
				desc="Começou a trabalhar na empresa VisionTI como Técnico de Teleinformática."
			/>
		</div>
	);
}

type bioItemProps = {
	year: string;
	desc: string;
};

function BioItem(props: bioItemProps) {
	return (
		<div className="bio-item">
			<span>{props.year}</span>
			<span>{props.desc}</span>
		</div>
	);
}

export default Bio;
