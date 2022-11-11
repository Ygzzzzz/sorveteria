import React from "react";

import Topo from '../../componentes/Topo';
import Rodape from '../../componentes/Rodape';
import './style.css';
// import BannerImage from '../../../public/assets/banner-home.png'

export default function Home() {
    return (
        <div>
            <Topo />
            <main className="over-x">
                <section className="secao-banner">
                    <div className="titulo-principal">
                        <h1 className="h1-home">Sorvete Artesanal</h1>
                    </div>
                </section>

                <section className="secao-sabores flex-row align-items mq-m">
                    <img className="home-image" src="assets/banner-sabores.jpg"/>
                    <div className="home-info">
                        <h2>Nossos Sabores</h2>
                        <h3>Novos e deliciosos!</h3>
                        <p>Sorvete bom é aquele feito com os melhores ingredientes! aqui na gelateria todos os nossos produtos são naturais, á base de frutas e sem nenhum conservante! Também temos opções em lactose e sem açúcar. Venha conhecer e perceber que tem como o sorvete ser delicioso e saudável ao mesmo tempo!</p>
                    </div>
                </section>

                <section className="secao-eventos flex-row align-items mq-m">
                    <div className="home-info order1">
                        <h2>Nossos eventos</h2>
                        <h3>Delicias com sorvete!</h3>
                        <p>Mais do que uma sorveteria, uma extensão da sua casa! Estamos aqui prontinhos para te atender e oferecer os melhores eventos com os melhores sorvetes da sua vida! Venha nos conhecer e passar um tempo aqui com a gente.</p>
                    </div>
                    <img className="home-image order0" src="assets/eventos-image.jpg"/>
                </section>

                <section className="secao-sobre flex-row align-items mq-m">
                <img className="home-image" src="assets/sobre-image.jpg"/>
                    <div className="home-info">
                        <h2>Sobre nós</h2>
                        <h3>Alegria em cada casquinha!</h3>
                        <p>Venha tomar o melhor sorvete da região aqui com a gente! Nós estamos há anos no mercado produzindo o que tem de melhor para o nosso cliente e você não pode ficar fora dessa. Venha fazer uma visita e aproveite o melhor atendimento e o melhor sorvete da cidade.</p>
                    </div>
                </section>
            </main>
            <Rodape />
        </div>
    )
}