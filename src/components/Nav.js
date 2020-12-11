import { Link } from 'react-router-dom';

function Nav() {
    return(
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/weather">Weather</Link></li>
                <li><Link to="/github">Github Search</Link></li>
            </ul>
        </div>
    )
}

export default Nav;