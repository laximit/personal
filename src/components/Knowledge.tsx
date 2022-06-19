import React from "react";

import images from "./DefaultIcons";

import "../styles/Knowledge.scss";

function Knowledge() {
	return (
		<div className="section-title">
			<span className="title">Linguagens</span>
			<div>
				<KnowledgeItem
					img={images.htmlLogo}
					name="Html5"
					stats="Avançado"
					desc="Alguns trabalhos feitos, sites e projetos pessoais e sempre faço o possivel para ter o código mais organizado que der."
				/>
				<KnowledgeItem
					img={images.cssLogo}
					name="Css3"
					stats="Avançado"
					desc="Em conjunto com Html, realizei alguns projetos simples e, apesar de preferir a organização do Sass, também tento criar o código mais organizado que conseguir."
				/>
				<KnowledgeItem
					img={images.jsLogo}
					name="Javascript"
					stats="Mediano"
					desc="Utilizado por muito tempo, feito alguns scripts basicos e medianos."
				/>
				<KnowledgeItem
					img={images.tsLogo}
					name="Typescript"
					stats="Basico"
					desc="Utilizado a pouco tempo, no momento usado somente com as funções de Javascript, exceto quando utilizo TypeProps no ReactJS."
				/>
				<KnowledgeItem
					img={images.csLogo}
					name="C#"
					stats="Basico"
					desc="Utilizado no basico de desenvolvimento de jogos usando a biblioteca do Unity e corrigindo erros de um sistema próprio de empresa, que não alterava muito a base da linguagem."
				/>
				<KnowledgeItem
					img={images.shellLogo}
					name="Shellscript"
					stats="Mediano"
					desc="Feito alguns scripts principalmente para meu sistema Linux, como scripts para automatizar tarefas repetitivas, como o Codact (Ver Portifólio)"
				/>
				<KnowledgeItem
					img={images.linuxLogo}
					name="Linux"
					stats="Basico"
					desc="Familiar com o sistema, usando no dia a dia, focado mais em customização, mas estou acostumando com os arquivos, sistema, compilar programas etc."
				/>
				<KnowledgeItem
					img={images.reactLogo}
					name="ReactJS"
					stats="Basico"
					desc="Aprendendo mais a cada dia, não estudo a muito tempo, ainda com certas dificuldades para aprender ReactHooks, Redux etc., mas com certeza que não vai demorar muito para aprender."
				/>
				<KnowledgeItem
					img={images.pythonLogo}
					name="Python"
					stats="Basico"
					desc="Aprendi o basico da linguagem, como criar variaveis, funções etc., porém ainda não familiarizado com bibliotecas externas."
				/>
				<KnowledgeItem
					img={images.sassLogo}
					name="Sass"
					stats="Basico"
					desc="Aprendendo coisas mais basicas como Mixin, Include, Imports, mas planejando ja estudar sobre variaveis e outras mecânicas."
				/>
			</div>
		</div>
	);
}

interface knowledgeItemProps {
	img: string | undefined;
	stats: string;
	name: string;
	desc?: string;
}

function KnowledgeItem(props: knowledgeItemProps) {
	return (
		<div className="knowledge-item">
			<div>
				<img src={props.img} alt={props.name} />
				<span>{props.name}</span>
			</div>
			<span className="status">
				{props.name} - {props.stats}
			</span>
			<span className="description">{props.desc}</span>
		</div>
	);
}

export default Knowledge;
