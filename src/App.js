/* eslint-disable react/jsx-max-depth */
import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      description: '',
      attr1: '0',
      attr2: '0',
      attr3: '0',
      image: '',
      rare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      hasTrunfo: false,
      listCards: [],
      nameFilter: '',
      rareFilter: 'todas',
      rareFiltered: [],
      trunfoFilter: false,
      disableFilter: false,
    };
  }

  inputChange = ({ target }) => {
    const { id, value, type, checked } = target;
    if (type !== 'checkbox') {
      this.setState((prevState) => ({
        ...prevState,
        [id]: value,
      }), () => {
        this.validyButtonSalve();
        this.filterRare();
      });
    } else {
      this.setState((prevState) => ({
        ...prevState,
        [id]: checked,
      }), () => {
        this.validyButtonSalve();
        this.filterRare();
      });
    }
  };

  onSaveButtonClick = () => {
    const { attr1, attr2, attr3, name, description,
      image, rare, cardTrunfo } = this.state;

    const objCard = { name, description, image, rare, attr1, attr2, attr3, cardTrunfo };

    this.setState(({ listCards, rareFiltered }) => ({
      listCards: [...listCards, objCard],
      rareFiltered: [...rareFiltered, objCard],
    }), () => {
      this.setState(() => ({
        name: '',
        description: '',
        image: '',
        rare: 'normal',
        attr1: '0',
        attr2: '0',
        attr3: '0',
        cardTrunfo: false,
      }));
      if (cardTrunfo) this.setState(() => ({ hasTrunfo: true }));
    });
  };

  filterRare = () => {
    const { rareFilter, listCards, nameFilter, trunfoFilter } = this.state;
    const filteredCards = listCards.filter((card) => {
      if (trunfoFilter) {
        return card.name.includes(nameFilter) && card.cardTrunfo;
      }
      if (rareFilter === 'todas') {
        return card.name.includes(nameFilter);
      } return card.name.includes(nameFilter) && card.rare === rareFilter;
    });
    this.setState(() => ({
      disableFilter: trunfoFilter,
      rareFiltered: filteredCards,
    }));
  };

  cardDelete = (cardName) => {
    const { rareFiltered } = this.state;
    const deletar = rareFiltered.filter((name) => name.name !== cardName);
    const card = deletar.some((car) => car.cardTrunfo);
    this.setState(() => ({ rareFiltered: deletar, hasTrunfo: card }));
  };

  validyButtonSalve = () => {
    const { name, description, image, rare, attr1, attr2, attr3 } = this.state;

    let verify = true;

    if (Number(attr1) + Number(attr2) + Number(attr3) > Number('210')) verify = false;
    if (Number(attr1) > Number('90') || Number(attr1) < Number('0')) verify = false;
    if (Number(attr2) > Number('90') || Number(attr2) < Number('0')) verify = false;
    if (Number(attr3) > Number('90') || Number(attr3) < Number('0')) verify = false;
    if (name && description && image && rare && verify) {
      this.setState(() => ({ isSaveButtonDisabled: false }));
    } else {
      this.setState(() => ({ isSaveButtonDisabled: true }));
    }
  };

  render() {
    const { name, description, attr1, attr2, attr3, image,
      rare, cardTrunfo, isSaveButtonDisabled, hasTrunfo,
      nameFilter, rareFilter, rareFiltered, trunfoFilter, disableFilter } = this.state;
    return (
      <div>
        <div className="div-title">
          <h1 className="title">
            PsycoTrunfo
            <span className="drop drop1" />
            <span className="drop drop2" />
            <span className="drop drop3" />
            <span className="drop drop4" />
            <span className="drop drop5" />
          </h1>
          <p className="start-button">
            <a href="#start" className="start-bt">COMEÇAR</a>
          </p>
        </div>
        <div className="form-card-container" id="start">
          <Form
            cardName={ name }
            cardDescription={ description }
            cardAttr1={ attr1 }
            cardAttr2={ attr2 }
            cardAttr3={ attr3 }
            cardImage={ image }
            cardRare={ rare }
            cardTrunfo={ cardTrunfo }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            hasTrunfo={ hasTrunfo }
            onSaveButtonClick={ this.onSaveButtonClick }
            onInputChange={ this.inputChange }
          />
          <Card
            cardName={ name }
            cardDescription={ description }
            cardAttr1={ attr1 }
            cardAttr2={ attr2 }
            cardAttr3={ attr3 }
            cardImage={ image }
            cardRare={ rare }
            cardTrunfo={ cardTrunfo }
            btnDelete={ false }
            cardDelete={ this.cardDelete }
            nameFilter={ nameFilter }
            rareFilter={ rareFilter }
          />
          <div className="card-list-container">
            <h4 className="card-list-title">Todas as cartas</h4>
            <div className="filters">
              <label htmlFor="name-filter">
                <input
                  value={ nameFilter }
                  onChange={ this.inputChange }
                  type="text"
                  placeholder="Digite um nome"
                  data-testid="name-filter"
                  id="nameFilter"
                  disabled={ disableFilter }
                />
              </label>
              <label htmlFor="rareFilter">
                Filtro por Rarity:
                <select
                  value={ rareFilter }
                  onChange={ this.inputChange }
                  data-testid="rare-filter"
                  id="rareFilter"
                  disabled={ disableFilter }
                >
                  <option value="todas">todas</option>
                  <option value="normal">normal</option>
                  <option value="raro">raro</option>
                  <option value="muito raro">muito raro</option>
                </select>
              </label>
              <label htmlFor="trunfoFilter">
                Filtro Super Trunfo:
                <input
                  checked={ trunfoFilter }
                  onChange={ this.inputChange }
                  type="checkbox"
                  data-testid="trunfo-filter"
                  id="trunfoFilter"
                />
              </label>
              <div className="cards-deck" />
              {(rareFiltered.length !== 0) ? (
                rareFiltered
                  .filter((card) => card.name.includes(nameFilter))
                  .map((card, index) => (

                    <Card
                      key={ `${index}-${card.name}` }
                      cardName={ card.name }
                      cardDescription={ card.description }
                      cardAttr1={ card.attr1 }
                      cardAttr2={ card.attr2 }
                      cardAttr3={ card.attr3 }
                      cardImage={ card.image }
                      cardRare={ card.rare }
                      cardTrunfo={ card.cardTrunfo }
                      cardDelete={ this.cardDelete }
                      btnDelete
                      nameFilter={ nameFilter }
                      rareFilter={ rareFilter }
                    />
                  ))) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
