function Formacao() {
  return (
    <section id="formacao" className="section" aria-labelledby="titulo-formacao">
      <div className="section-head">
        <span className="section-num" aria-hidden="true">02</span>
        <h2 id="titulo-formacao">Formação</h2>
      </div>
      <div className="grid-2">

        <article className="card">
          <span className="badge"><time dateTime="2022">2022</time> — <time dateTime="2027">2027</time> (em andamento)</span>
          <h3>Engenharia da Computação</h3>
          <p className="company">Universidade Virtual do Estado de São Paulo (UNIVESP)</p>
          <p className="desc">
            Graduação em andamento com foco em lógica de programação, estrutura
            de dados e fundamentos de computação, complementada por estudos
            próprios em redes e bancos de dados.
          </p>
        </article>

        <article className="card">
          <span className="badge"><time dateTime="2018">2018</time> — <time dateTime="2020">2020</time></span>
          <h3>Técnico em Química</h3>
          <p className="company">Escola Técnica Estadual de São Paulo (ETEC)</p>
          <p className="desc">
            Formação técnica com foco em análises laboratoriais, química
            aplicada e controle de qualidade.
          </p>
        </article>

      </div>

      <div className="cursos">
        <h3>Cisco Networking Academy</h3>
        <ul className="cursos-list">
          <li>Introduction to Cybersecurity</li>
          <li>Network Defense</li>
          <li>Endpoint Security</li>
          <li>Networking Basics</li>
          <li>Networking Devices and Initial Configuration</li>
        </ul>
      </div>

      <div className="cursos">
        <h3>Outros cursos complementares</h3>
        <ul className="cursos-list">
          <li>Redes TCP/IP — Gabriel Torres (em andamento)</li>
          <li>Bancos de Dados Relacionais — Udemy (em andamento)</li>
          <li>Arquitetura de Redes — Gabriel Torres (2020)</li>
          <li>Algoritmos e Lógica de Programação — Udemy (2020)</li>
          <li>Inglês Avançado — FISK (2019)</li>
          <li>Design Gráfico — Escola Advanced (2017)</li>
        </ul>
      </div>
    </section>
  );
}

export default Formacao;