import "./Header.css"
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="container">
        <div className="header">
            <h4>Isack Lopes</h4>
            <button><Link to="/">Sair</Link></button>
        </div>
    </div>
  )
}

export default Header