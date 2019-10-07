import Link from 'next/link';

function Header() {
    return (
        <nav className="navbar navbar-fixed-top navbar-light">
            <ul className="nav justify-content-start">
                <li className="nav-item">
                    <Link prefetch={false} href="/">
                        <a className="nav-link">Home</a>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link prefetch={false} href="/markup">
                        <a className="nav-link">Markup</a>
                    </Link>
                </li>
            </ul>
            <ul className="nav justify-content-end">
                <li className="nav-item" />
            </ul>
        </nav>
    );
}

export default Header;
