import "./Header.css"
import { useNavigate } from 'react-router-dom';

const Header = ({ user} ) => {
  const navigate = useNavigate();

  const handleLoggout = () => {
    navigate('/', { state: {user} })
  }

  return (
    <div className="container">
        <div className="header">
            <h4>{user.nome}</h4>
            <button onClick={handleLoggout()}>Sair</button>
        </div>
    </div>
  )
}

export default Header