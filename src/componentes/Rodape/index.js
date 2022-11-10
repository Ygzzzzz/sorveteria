import React from "react";
import './style.css';

export default function Rodape() {
    return (
        <footer>
            <div className="contato">
                <img className="logo-footer" src="assets/logo.png"/>
                <div className="dados">
                    <h4>Endereço</h4>
                    <p>Av.Bernadino de Campos,98</p>
                    <p>São Paulo, SP 12345-678</p>
                </div>
                <div className="dados">
                    <h4>Contato</h4>
                    <p>info@meusite.com</p>
                    <p>Tel: (11)3458-7890</p>
                </div>
                <div className="dados">
                    <h4>Horários</h4>
                    <p>Aberto todos os dias</p>
                    <p>10:00 - 22:00</p>
                </div>
            </div>
            <div className="footer">
                <p>Gelateria. Orgulhosamente desenvolvido pro Yago Oliveira</p>
            </div>
        </footer>
    )
}