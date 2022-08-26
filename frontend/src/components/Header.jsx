import { Link } from 'react-router-dom'

const Header = () => {
    const linkStyles = {
        textDecoration: 'none',
        color: 'inherit',
    }

    return (
        <nav id='navbar'>
            <div className='navbar container'>
                <div className='navbar-title'>
                    <Link to='/' style={linkStyles}>
                        <h1>
                            Grab<span>Jobs</span>
                        </h1>
                    </Link>
                </div>
                <ul className='navbar-menu flex-row'>
                    <Link to='/' style={linkStyles}>
                        <li>Home</li>
                    </Link>
                    <Link to='/admin' style={linkStyles}>
                        <li>Admin</li>
                    </Link>
                    <Link to='/mypage' style={linkStyles}>
                        <li>MyPage</li>
                    </Link>
                    <Link to='/login' style={linkStyles}>
                        <li>Login</li>
                    </Link>
                </ul>
            </div>
        </nav>
    )
}

export default Header
