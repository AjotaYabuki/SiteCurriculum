function Hero() {
  return (
    <section className="hero" aria-labelledby="titulo-hero">
      <p className="status">
        <span className="status-dot" aria-hidden="true"></span>
        Aberto a oportunidades · Embu Guaçu, SP
      </p>
      <h1 id="titulo-hero">Alex Junior Novaes Amorim</h1>
      <p className="role">Engenharia da Computação · Redes & Cibersegurança</p>
      <p className="bio">
        Estudante de Engenharia da Computação com forte interesse em redes de
        computadores e segurança da informação. Trago uma base técnica em
        Química e experiência em operação de infraestrutura de saneamento, onde
        desenvolvi rigor com procedimentos, monitoramento contínuo e registro
        preciso de dados. Fiz cursos da Cisco Networking Academy em redes e
        cibersegurança e busco estágio ou posição júnior em TI para aplicar e
        aprofundar o que estudo.
      </p>
      <div className="hero-actions">
        <a href="mailto:alexjnamorim@gmail.com" className="btn btn-primary">
          Entrar em contato
        </a>
        <a href="#foco" className="btn btn-ghost">Ver foco de estudos</a>
      </div>
    </section>
  );
}

export default Hero;