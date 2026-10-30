function Experiencia() {
  // Aqui estão os seus dados. Se você arrumar outro emprego, só adicionar aqui!
  const empregos = [
    {
      cargo: "Assistente de Manutenção de Unidades de Ultrafiltração",
      empresa: "Aquamec · Sabesp",
      ano: "2025 — atual",
      descricao: "Atuação na manutenção e operação de unidades de ultrafiltração, monitoramento de processos e apoio à qualidade da água tratada."
    },
    {
      cargo: "Operador de Estações de Tratamento de Água",
      empresa: "Englink · Sabesp",
      ano: "2025",
      descricao: "Operação de estações de tratamento de água (ETA), monitoramento de parâmetros de qualidade e registro de dados operacionais."
    },
    {
      cargo: "Técnico em Química",
      empresa: "Atlantis Saneamentos · Sabesp",
      ano: "2023 — 2024",
      descricao: "Análises físico-químicas de água, coleta e preparo de amostras, preparo de reagentes e elaboração de relatórios técnicos."
    }
  ];

  return (
    <section id="experiencia" className="section" aria-labelledby="titulo-experiencia">
      <div className="section-head">
        <span className="section-num" aria-hidden="true">03</span>
        <h2 id="titulo-experiencia">Experiência</h2>
      </div>
      <p className="section-intro">
        Atuação em operação de infraestrutura de saneamento, um ambiente que
        exige disciplina com procedimentos, monitoramento contínuo e
        documentação rigorosa: competências que levo para a área de TI.
      </p>
      
      <ol className="timeline">
        {/* O .map() pega cada emprego da lista e transforma em HTML */}
        {empregos.map((emprego, index) => (
          <li className="timeline-item" key={index}>
            <span className="timeline-dot" aria-hidden="true"></span>
            <div className="timeline-body">
              <div className="timeline-top">
                <h3>{emprego.cargo}</h3>
                <span className="badge">{emprego.ano}</span>
              </div>
              <p className="company">{emprego.empresa}</p>
              <p className="desc">{emprego.descricao}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

export default Experiencia;