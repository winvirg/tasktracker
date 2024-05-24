import "./Header.css"
import { useNavigate, useLocation } from 'react-router-dom';

const Header = ( ) => {
  const navigate = useNavigate();

  const {state} = useLocation()
  const user = state ? state.user : null;

  const handleLoggout = () => {
    navigate('/');
  }

  return (
    <div className="container">
        <div className="header">
            <h4>{user.nome}</h4>
            <button onClick={handleLoggout}>Sair</button>
        </div>
    </div>
  )
}

export default Header