import React from "react";
import assai from "./Assets/assai.png";
import carrefour from "./Assets/Carrefour.jpg";
import sam from "./Assets/sam.png";
import atacadao from "./Assets/atacadao.jpg";
import redemix from "./Assets/redemix.jpg";
import hiperideal from "./Assets/hiperieal.jpg";
import "./Parceiros.css"


const Parceiros = () => {
    const mercados = [
      {
        image: assai,
        title: "Assai",
        text: <div className="am"><p>O Assaí Atacadista é uma empresa brasileira de atacarejo que atende pequenos e 
          médios comerciantes e consumidores que buscam economia, variedade de produtos e um bom atendimento. Fundado em 
          São Paulo há 50 anos, atualmente, conta com mais de 280 lojas, distribuídas nas cinco regiões brasileiras1</p></div>,
      },
      {
        image: carrefour,
        title: "carrefour",
        text: <div className="am"><p>O Carrefour é uma das maiores redes de supermercados
           do mundo, com forte presença no Brasil1. A empresa está constantemente buscando
            maneiras de melhorar a experiência de compra para seus clientes</p></div>,
      },
      {
        image: sam,
        title: "Sams",
        text: <div className="am"><p>O Sam’s Club é uma divisão da gigante do varejo Walmart, 
        que opera no modelo de clube de compras1. Atualmente, conta com mais de 3 milhões de associados e 
        54 lojas nas principais cidades do Brasil</p></div>,
      },
      {
        image: atacadao,
        title: "Atacadão",
        text: <div className="am">O Atacadão é uma rede brasileira de supermercados atacado-varejista, pertencente
         ao Grupo Carrefour Brasil1. Fundado em 1962, na cidade de Maringá no Paraná, por Alcides Parizotto1, o Atacadão 
         está presente em todos os estados brasileiros e conta com mais de 250 lojas </div>,
      },
      {
        image: redemix,
        title: "Redemix",
        text: <div className="am">RedeMix é um dos principais grupos de varejo de alimentos do estado da Bahia1. Eles têm 
        investido alto em tecnologia e atendimento ao consumidor1. Uma das apostas foi a criação de uma persona para interagir 
        com os clientes nos canais de atendimento, através da inteligência artificial</div>,
      },
      {
        image: hiperideal,
        title: "Hiperideal",
        text: <div className="am">O Hiperideal é uma das maiores redes de supermercados de Salvador, com um total de 23 lojas localizadas 
        em bairros estratégicos da capital baiana e região metropolitana1. Recentemente, 
        o Hiperideal expandiu suas atividades para o mercado internacional.</div>,
      },
    ]
    return (
        <div className="work-section-wpp">
          <div className="work-section-top">
            <h1 className="nossoss">Nossos Parceiros</h1> 
          </div> 
          <div className="work-section-bottom">
            {mercados.map((data) => (
              <div className="work-section-parc" key={data.title}>
                <div className="info-boxes-img-container">
                  <img src={data.image} alt="" />
                </div>
                <h2>{data.title}</h2>
                <p>{data.text}</p>
              </div>
            ))}
          </div>
        </div>
      );
}

    export default Parceiros
