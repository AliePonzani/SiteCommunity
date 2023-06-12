import React, { useState, useEffect } from "react";
import './telaMorador.css';

function TelaMorador() {
  const [vendedores, setVendedores] = useState([]);


  useEffect(() => {
    fetchVendedores();
  }, []);

  const fetchVendedores = async () => {
    try {
      const response = await fetch('http://localhost:3333/vendedores');
      const data = await response.json();
      const vendedores = data.map(usuario => ({
        nomeLoja: usuario.nomeLoja,
        logradouro: usuario.logradouro,
        numero: usuario.numero,
        telefone: usuario.telefone,
        img_bd: usuario.img_bd
      }));
      setVendedores(vendedores);
    } catch (error) {
      console.error('Erro ao recuperar os vendedores:', error);
    }
  };


  return (
    <div>
      <h1>Tela do Morador</h1>

      <div className="telasVendedores">
        {vendedores.map((vendedor, index) => (
          <div className="dadosVendedor" key={index}>
            <label>Loja: {vendedor.nomeLoja}</label>
            <label>Endereço: {vendedor.logradouro}, {vendedor.numero}</label>
            <label>Telefone: {vendedor.telefone}</label>
            <label><img src={vendedor.img_bd}></img>Imagem Vendedor</label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TelaMorador;
