import LoguinMorador from '../../Loguin_Morador';
import LoguinVendedor from '../../Loguin_Vendedor';
import './index.css';

function Header() {
    return (
        <div className='corpoInicio'>
            <div className='corpoCentro'>
                <div id="logoPreto"></div>
                <div className="container">
                    <div className='loginMorador'>
                        <LoguinMorador />
                    </div>
                    <div className='loginVendedor'>
                        <LoguinVendedor />
                    </div>
                </div > {/*DIV container */}
            </div>
        </div >
    )
}
export default Header;