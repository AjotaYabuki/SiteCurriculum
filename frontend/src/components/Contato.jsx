function Contato() {
  return (
    <section id="contato" className="section contato" aria-labelledby="titulo-contato">
      <div className="section-head">
        <span className="section-num" aria-hidden="true">05</span>
        <h2 id="titulo-contato">Contato</h2>
      </div>
      <p className="contato-sub">
        Aberto a oportunidades de estágio ou posição júnior em redes, infraestrutura e segurança da informação.
      </p>
      <ul className="contato-list">
        <li><strong>E-mail:</strong> <a href="mailto:alexjnamorim@gmail.com">alexjnamorim@gmail.com</a></li>
        <li><strong>Celular:</strong> <a href="tel:+5511941285427">(11) 9 4128-5427</a></li>
        <li><strong>Localização:</strong> Embu Guaçu, SP</li>
      </ul>
    </section>
  );
}

export default Contato;