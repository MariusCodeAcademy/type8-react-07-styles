import './Header.css';

function Header() {
  return (
    <header>
      <nav className='main-nav'>
        <a className='nav-link' href='#home'>
          Home
        </a>
        <a className='nav-link' href='#about'>
          About
        </a>
        <a className='nav-link' href='#contact'>
          Contact
        </a>
      </nav>
      <a className='nav-link search' href='#search'>
        Search
      </a>
    </header>
  );
}

export default Header;
