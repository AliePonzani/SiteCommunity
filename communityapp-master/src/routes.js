import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TelaMorador from './Pages/Tela_Morador';
import TelaVendedor from './Pages/Tela_Vendedor';
import LoginMorador from './Pages/Loguin_Morador';
import LoguinVendedor from './Pages/Loguin_Vendedor';
import Header from './Pages/componentes/Header';
import CadastroMorador from './Pages/CadastroMorador';
import CadastroVendedor from './Pages/CadastroVendedor';

function RouterApp() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Header />} />
                    <Route path="/TelaMorador" element={<TelaMorador />} />
                    <Route path="/TelaVendedor" element={<TelaVendedor />} />
                    <Route path="/LoginMorador" element={<LoginMorador />} />
                    <Route path="/LoginVendedor" element={<LoguinVendedor />} />
                    <Route path='/cadastroMorador' element={<CadastroMorador />} />
                    <Route path='/cadastroVendedor' element={<CadastroVendedor />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default RouterApp;