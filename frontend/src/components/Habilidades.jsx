function Habilidades() {
  return (
    <section id="habilidades" className="section" aria-labelledby="titulo-habilidades">
      <div className="section-head">
        <span className="section-num" aria-hidden="true">04</span>
        <h2 id="titulo-habilidades">Habilidades</h2>
      </div>
      <div className="grid-3">

        <div className="skill-group">
          <h3>Redes & Infraestrutura</h3>
          <ul className="skill-list">
            <li>Redes TCP/IP (em andamento)</li>
            <li>Arquitetura de redes</li>
            <li>Monitoramento de processos</li>
            <li>Operação de infraestrutura crítica</li>
          </ul>
        </div>

        <div className="skill-group">
          <h3>Computação</h3>
          <ul className="skill-list">
            <li>Lógica de programação e algoritmos</li>
            <li>Estrutura de dados</li>
            <li>Bancos de dados relacionais (em andamento)</li>
            <li>Excel, Word e PowerPoint</li>
          </ul>
        </div>

        <div className="skill-group">
          <h3>Perfil profissional</h3>
          <ul className="skill-list">
            <li>Rigor com procedimentos e normas</li>
            <li>Relatórios técnicos e documentação</li>
            <li>Registro e análise de dados</li>
            <li>Inglês avançado (curso)</li>
          </ul>
        </div>

      </div>
    </section>
  );
}

export default Habilidades;