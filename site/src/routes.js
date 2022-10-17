import { BrowserRouter, Routes, Route } from 'react-router-dom'

import JogoAdm from './pages/Admin/cadastrarjogoAdm/index.jsx';
import DeletarJogo from './pages/Admin/deletarjogoAdm/index.jsx';
import AdminHome from './pages/Admin/homeAdm/index.jsx';
import LoginAdm from './pages/Admin/loginAdm/index.jsx';
import LandingAdm from './pages/Admin/landingAdm/index.jsx';
import EditJogo from './pages/Admin/editarjogoAdm/index.jsx';
import EsqueceusenhaAdm from './pages/Admin/esqueceusenhaAdm/index.jsx';
import PesquisarjogoAdm from './pages/Admin/pesquisarjogoAdm/index.jsx';

import MinhaArea from './pages/User/interfaceUser/minhaArea/index.jsx';
import NotificacoesUser from './pages/User/interfaceUser/notificacoesUser/index.jsx';
import SegurancaUser from './pages/User/interfaceUser/segurancaUser/index.jsx';
import Landing from './pages/User/landingUser/index.jsx';
import LandinglogadoUser from './pages/User/landinglogadoUser/index.jsx';
import Login from './pages/User/loginUser/index.jsx';
import UsuarioHome from './pages/User/usuariohome/index.jsx';
import TelajogoUser from './pages/User/telajogoUser/index.jsx';
import Cadastro1 from './pages/User/cadastroUser/cadastro1/index.jsx';
import Cadastro2 from './pages/User/cadastroUser/cadastro2/index.jsx';
import EsqueciSenha from './pages/User/esquecisenha/index.jsx';
import Loja from './pages/User/loja/index.jsx';
import Suport from './pages/User/suporte/index.jsx';
import Error from './pages/User/suporte/notificacaoerro/index.jsx';


export default function Index() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/Admin/loginAdm' element={<LoginAdm />} />
                <Route path='/Admin/cadastr5arJogoAdm' element={<JogoAdm />} />
                <Route path='/Admin/deletarjogoAdm' element={<DeletarJogo/>} />
                <Route path='/Admin/editarjogoAdm' element={<EditJogo/>} />
                <Route path='/Admin/homeAdm' element={<AdminHome/>} />
                <Route path='/Admin/landignAdm' element={<LandingAdm/>} />
                <Route path='/Admin/esqueceusenhaAdm' element={<EsqueceusenhaAdm />} /> 
                <Route path='/Admin/pesquisarjogoAdm' element={<PesquisarjogoAdm />} />
               
               <Route path ='/' element = {< Landing  /> } />
               <Route path='/User/loja' element = { < Loja /> } />
                <Route path='/User/loginUser' element= {< Login/>} />
                <Route path='/User/cadastroUser/cadastro1' element={<Cadastro1/>} />
                <Route path='/User/cadastroUser/cadastro2' element={<Cadastro2/>} />
                <Route path='/User/esquecisenha' element={<EsqueciSenha />} />
                <Route path='/User/interfaceUser/notificacoesUser' element={<NotificacoesUser />} /> 
                <Route path='/User/interfaceUser/minhaArea' element={<MinhaArea />} />
                <Route path='/User/interfaceUser/segurancaUser' element={<SegurancaUser />} /> 
                <Route path='/User/telajogoUser' element={<TelajogoUser />} /> 
                <Route path='/User/usuariohome' element={<UsuarioHome/>} />
                <Route path='/User/landinglogadoUser' element={<LandinglogadoUser />} />
                <Route path='/User/suporte' element={ <Suport/> } />
                <Route path='/User/suporte/notificacaoerro' element={ <Error/> } /> 
            </Routes>
        </BrowserRouter>
    )
}