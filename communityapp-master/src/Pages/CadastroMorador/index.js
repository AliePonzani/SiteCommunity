import "../styleCadastro.css";
import { useState  } from 'react';
import { useNavigate } from 'react-router-dom';

function CadastroMorador() {
    const navigate = useNavigate();
    const [formDados, setDados] = useState({});

    function buscarCep() {
        const cep = formDados.cep;

        if (cep !== "") {
            let url = `https://brasilapi.com.br/api/cep/v1/${cep}`;
            let req = new XMLHttpRequest();
            req.open("GET", url);
            req.send();

            req.onload = function () {
                if (req.status === 200) {
                    let logradouro = JSON.parse(req.response);
                    setDados(prevDados => ({
                        ...prevDados,
                        logradouro: logradouro.street,
                        cidade: logradouro.city,
                        estado: logradouro.state,
                        bairro: logradouro.neighborhood
                    }));
                } else if (req.status === 404) {
                    alert("cep inválido");
                } else {
                    alert("Erro ao fazer a inquisição, tente novamente mais tarde!");
                }
            }
        }
    }

    async function enviarDados(event) {
        const data = formDados
        const dados = {
            nome: data.nome,
            telefone: data.telefone,
            email: data.email,
            dataNac: data.dataNac,
            cep: data.cep,
            cidade: data.cidade,
            bairro: data.bairro,
            logradouro: data.logradouro,
            estado: data.estado,
            numero: data.numero,
            blocoTorre: data.blocoTorre,
            apartamento: data.apartamento,
            nomeCondominio: data.nomeCondominio,
            senha: data.senha
        };

        event.preventDefault();
        try {
            const response = await fetch('http://localhost:3333/cadastroMorador', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dados)
            });
            const aux = response.json();
            console.log(response);
            console.log(aux);

            if (response.ok) {
                setDados({
                    nome: '',
                    telefone: '',
                    email: '',
                    dataNac: '',
                    cep: '',
                    cidade: '',
                    bairro: '',
                    logradouro: '',
                    estado: '',
                    numero: '',
                    blocoTorre: '',
                    apartamento: '',
                    nomeCondominio: '',
                    senha: ''
                });
                alert("Usuario cadastrado com sucesso!")
                navigate('/LoginMorador');

            }
        } catch {
            console.error('Ocorreu um erro ao fazer o cadastro: '+ Error);
        }
    };

    return (
        <div className="corpo">
            <div className="logoPreto"></div>
            <div className="cont">
                <h1>CADASTRO DE MORADOR</h1>
                <form onSubmit={enviarDados}>
                    <input id="nome" type="text" placeholder="Nome" value={formDados.nome} onChange={(e) => setDados({ ...formDados, nome: e.target.value })} />
                    <input id="telefone" type="text" placeholder="Telefone" value={formDados.telefone} onChange={(e) => setDados({ ...formDados, telefone: e.target.value })} />
                    <input id="email" type="email" placeholder="E-mail" value={formDados.email} onChange={(e) => setDados({ ...formDados, email: e.target.value })} />
                    <input id="dataNac" type="date" placeholder="Data de Nascimento" value={formDados.dataNac} onChange={(e) => setDados({ ...formDados, dataNac: e.target.value })} />
                    <input id="cep" type="text" placeholder="Cep" maxLength={8} value={formDados.cep} onChange={(e) => setDados({ ...formDados, cep: e.target.value })} onBlur={buscarCep} />
                    <input id="cidade" type="text" placeholder="Cidade" value={formDados.cidade} onChange={(e) => setDados({ ...formDados, cidade: e.target.value })} />
                    <input id="bairro" type="text" placeholder="Bairro" value={formDados.bairro} onChange={(e) => setDados({ ...formDados, bairro: e.target.value })} />
                    <input id="logradouro" type="text" placeholder="Logradouro" value={formDados.logradouro} onChange={(e) => setDados({ ...formDados, logradouro: e.target.value })} />
                    <input id="estado" type="text" placeholder="Estado" value={formDados.estado} onChange={(e) => setDados({ ...formDados, estado: e.target.value })} />
                    <input id="numero" type="number" placeholder="Número" value={formDados.numero} onChange={(e) => setDados({ ...formDados, numero: e.target.value })} />
                    <input id="blocoTorre" type="number" placeholder="Bloco/Torre" value={formDados.blocoTorre} onChange={(e) => setDados({ ...formDados, blocoTorre: e.target.value })} />
                    <input id="apartamento" type="number" placeholder="Apartamento" value={formDados.apartamento} onChange={(e) => setDados({ ...formDados, apartamento: e.target.value })} />
                    <input id="nomeCondominio" type="text" placeholder="Qual o nome do seu condomínio" value={formDados.nomeCondominio} onChange={(e) => setDados({ ...formDados, nomeCondominio: e.target.value })} />
                    <input id="senha" type="password" placeholder="Senha" value={formDados.senha} onChange={(e) => setDados({ ...formDados, senha: e.target.value })} />
                    <button type="submit">Salvar</button>
                </form>
            </div>
        </div>
    );
}

export default CadastroMorador;
