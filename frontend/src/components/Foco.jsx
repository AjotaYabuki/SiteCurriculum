function Foco() {
  return (
    <section id="foco" className="section" aria-labelledby="titulo-foco">
      <div className="section-head">
        <span className="section-num" aria-hidden="true">01</span>
        <h2 id="titulo-foco">Foco de estudos</h2>
      </div>
      <p className="section-intro">
        Estou construindo uma trajetória em infraestrutura e segurança, com
        graduação e cursos da Cisco Networking Academy em três frentes.
      </p>
      <div className="grid-3">

        <article className="card">
          <span className="badge">Cisco Networking Academy</span>
          <h3>Redes de computadores</h3>
          <p className="desc">
            Networking Basics e Networking Devices and Initial Configuration,
            somados ao estudo em andamento de TCP/IP e arquitetura de redes.
          </p>
        </article>

        <article className="card">
          <span className="badge">Cisco Networking Academy</span>
          <h3>Cibersegurança</h3>
          <p className="desc">
            Introduction to Cybersecurity, Network Defense e Endpoint Security,
            com foco em defesa de redes e proteção de dispositivos.
          </p>
        </article>

        <article className="card">
          <span className="badge">Graduação</span>
          <h3>Fundamentos de computação</h3>
          <p className="desc">
            Lógica de programação, algoritmos, estrutura de dados e bancos de
            dados relacionais, a base técnica para a área.
          </p>
        </article>

      </div>

      <div className="objetivo">
        <h3>Em busca de</h3>
        <ul className="objetivo-list">
          <li>Estágio ou posição júnior em infraestrutura e redes</li>
          <li>Suporte técnico e administração de sistemas</li>
          <li>Segurança da informação (iniciação)</li>
        </ul>
      </div>
    </section>
  );
}

export default Foco;