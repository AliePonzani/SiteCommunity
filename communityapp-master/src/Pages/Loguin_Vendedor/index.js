import { Link, useNavigate } from "react-router-dom";
import '../componentes/Header/index.css';
import './loginVendedor.css';
import { useState } from "react";

function LoguinVendedor() {

    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate();


    async function validarDados(evento) {
        evento.preventDefault()
        try {
            const response = await fetch('http://localhost:3333/loginVendedor', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email: usuario, senha: senha })
            })
            const data = await response.json();
            if (response.ok && data.nomeUsuario) {

                navigate("/TelaVendedor", { state: { email: usuario } });

            } else {
                alert("Usuário ou senha inválidos!")
            }

            console.log(data.nome);
            console.log(data.name)
            console.log(data)
        } catch (error) {
            console.error('Ocorreu um erro ao fazer login:', error);
        }

        console.log('botao clicado => ', usuario, senha)
    }

    return (
        <div className="corpoInicio">
            <div className="corpoCentro">
            <div className="logoBranco"></div>
                <div className="loguinInicial">
                    <div className="botoes">
                        <Link className="cliente" to="/LoginMorador">MORADOR</Link>
                        <button className="vendedor">VENDEDOR</button>
                    </div>
                    <h4 className="textoLoguin">Olá!<br />Seja bem vindo de volta</h4>
                    <p className="texto2">Faça o loguin agora</p>
                    <input className="usuario" type="email" placeholder="Usarname" value={usuario} onChange={e => setUsuario(e.target.value)}></input><br />
                    <input className="senha" type="password" placeholder="Password" value={senha} onChange={e => setSenha(e.target.value)}></input><br />
                    <button className="esqueceuSenha">Esqueceu a senha?</button><br />
                    <button className="loguin" onClick={validarDados}>Loguin</button><br />
                    <div>
                        <button className="criarConta" type="button" onClick={e => { navigate('/CadastroVendedor') }}>Criar conta</button>
                    </div>
                </div > {/*DIV loguinInicial */}
            </div>

        </div>
    )
}
export default LoguinVendedor;