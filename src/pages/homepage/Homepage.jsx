import Hero from './hero/Hero';
import React from 'react';
import Conquistas from './conquistas/Conquistas';
import StartTheFeaturettes from './start the featurettes/StartTheFeaturettes';
import Eventos from './eventos/Eventos';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

export default function Homepage() {
	return (
		<>
			<Hero></Hero>
			<Conquistas></Conquistas>
			<StartTheFeaturettes></StartTheFeaturettes>
			<Eventos></Eventos>
			<Footer></Footer>
		</>
	);
}
