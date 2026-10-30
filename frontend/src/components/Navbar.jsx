function Navbar() {
  return (
    <header>
      <nav className="nav" aria-label="Navegação principal">
        <a href="#top" className="nav-brand">Alex Amorim</a>
        <ul className="nav-links">
          <li><a href="#foco">Foco</a></li>
          <li><a href="#formacao">Formação</a></li>
          <li><a href="#experiencia">Experiência</a></li>
          <li><a href="#habilidades">Habilidades</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;