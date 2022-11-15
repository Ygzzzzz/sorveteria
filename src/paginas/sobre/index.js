import React from "react";
import './style.css'
import Topo from '../../componentes/Topo';
import Rodape from '../../componentes/Rodape';

export default function Sobre() {
    return (
        <div>
            <Topo />
            <main className="over-x">
                <section className="banner-sobre">
                    <div className="titulo-principal">
                        <h1 className="h1-sobre">A Gelateria</h1>
                    </div>
                </section>

                <section className="info-sobre">
                    <h2 className="h2-sobre">Sobre Nós</h2>
                    <h3 className="h3-sobre">Nós simplesmente amamos sorvetes!</h3>
                    <p className="p-sobre">
                        Somos uma empresa apaixonada pelo que faz. Colocamos amor em cada
                        sorvete produzido. Fazemos o melhor sorvete para os nossos
                        clientes e gostamos de receber elogios. Estamos operando desde
                        2009 com as melhores matérias-primas para a produção final do
                        sorvete. Vendemos tanto para varejo como para atacado.
                    </p>
                    <p className="p-sobre">
                        Nossos clientes podem comprar os nossos sorvetes e degustar na
                        nossa loja ou levar para sua residência e aproveitar junto com a
                        família. Também vendemos para estabelecimentos e criamos eventos
                        como festa de aniversário, formaturas e eventos empresariais. Para
                        contratar os nossos serviços, basta entrar em contato conosco.
                        Iremos proporcionar o melhor atendimento e os melhores produtos
                        para você fazer a sua festa mais saborosa, com o melhor sorvete da
                        cidade.
                    </p>
                </section>

                <figure className="img-container">
                    <img className="img-sobre" src="assets/sobre-image.jpg"/>
                    <img className="img-sobre" src="assets/sorveteria.jpg"/>                        
                </figure>
                
            </main>
            <Rodape />
        </div>
    )
}