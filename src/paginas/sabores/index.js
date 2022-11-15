import React from "react";
import './style.css';
import Topo from '../../componentes/Topo';
import Rodape from '../../componentes/Rodape';

export default function Sabores() {
    return (
        <div>
            <Topo />
            <main className="over-x">
                <section className="banner-sabores">
                    <div className="titulo-principal">
                        <h1 className="h1-sabores">Nossos Sabores</h1>
                    </div>
                </section>

                <section className="section-sabores">
                    <h2 className="h2-sabores">Sabores de Sorvete</h2>
                    <div className="sabores">
                        <div className="card">
                            <img className="img-card" src="assets/sabor-oreo.png"/>
                            <div className="texto-card-sabores">
                                <h4 className="h4-sabores">Sorvete de Oreo</h4>
                                <p className="p-sabores">Delicioso sorvete sabor Oreo. Uma explosão de sabor.</p>
                            </div>
                        </div>
                        <div className="card">
                            <img className="img-card" src="assets/sabor-pistache.png"/>
                            <div className="texto-card-sabores">
                                <h4 className="h4-sabores">Sorvete Pistache</h4>
                                <p className="p-sabores">Cremoso sorvete sabor pistache com pedacinhos de semente.</p>
                            </div>
                        </div>
                        <div className="card">
                            <img className="img-card" src="assets/sabor-cookies-avela.png"/>
                            <div className="texto-card-sabores">
                                <h4 className="h4-sabores">Sorvete Cookies & Avelã</h4>
                                <p className="p-sabores">Delicioso sorvete sabor Oreo. Uma explosão de sabor.</p>
                            </div>
                        </div>
                        <div className="card">
                            <img className="img-card" src="assets/sorbet-kiwi.png"/>
                            <div className="texto-card-sabores">
                                <h4 className="h4-sabores">Sorvete de Kiw</h4>
                                <p>Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C.</p>
                            </div>
                        </div>
                        <div className="card">
                            <img className="img-card" src="assets/sorbet-morango.png"/>
                            <div className="texto-card-sabores">
                                <h4 className="h4-sabores">Sorvete de Morango</h4>
                                <p className="p-sabores">Sorvete de morango gourmet. Tradicional e saboroso.</p>
                            </div>
                        </div>
                        <div className="card">
                            <img className="img-card" src="assets/sorbet-limao.png"/>
                            <div className="texto-card-sabores">
                                <h4 className="h4-sabores">Sorvete de Limão Siciliano</h4>
                                <p className="p-sabores">O incrivel sorvete gourmet de limão siciliano vai te encantar.</p>
                            </div>
                        </div>
                    </div>                   
                </section>
            </main>
            <Rodape />
        </div>
    )
}