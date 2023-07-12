import React from "react";

const NewCard = () => {
  return (
    <div>
      <div>
        <button>
          <p>voltar</p>
        </button>
        <h2>Novo cartão</h2>
      </div>

      <div>
        <p>
          <span>número</span>
        </p>
        <p>nome</p>
        <div>
          <p>validade</p>
          <p>cvv</p>
        </div>
        <form>
          <input type="number" placeholder="Número do cartão" />
          <input type="text" placeholder="Nome impresso no cartão" />
          <div>
            <input type="date" placeholder="Validade" />
            <input type="number" placeholder="CVV" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewCard;
