import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, isSaveButtonDisabled, onInputChange,
      onSaveButtonClick, hasTrunfo } = this.props;

    return (
      <form>
        <label htmlFor="name">
          Name:
          <input
            value={ cardName }
            onChange={ onInputChange }
            type="text"
            data-testid="name-input"
            id="name"
          />
        </label>
        <label htmlFor="description">
          Description:
          <textarea
            value={ cardDescription }
            onChange={ onInputChange }
            data-testid="description-input"
            id="description"
          />
        </label>
        <label htmlFor="attr1">
          Attribute 1:
          <input
            value={ cardAttr1 }
            onChange={ onInputChange }
            type="number"
            data-testid="attr1-input"
            id="attr1"
          />
        </label>
        <label htmlFor="attr2">
          Attribute 2:
          <input
            value={ cardAttr2 }
            onChange={ onInputChange }
            type="number"
            data-testid="attr2-input"
            id="attr2"
          />
        </label>
        <label htmlFor="attr3">
          Attribute 3:
          <input
            value={ cardAttr3 }
            onChange={ onInputChange }
            type="number"
            data-testid="attr3-input"
            id="attr3"
          />
        </label>
        <label htmlFor="image">
          Image:
          <input
            value={ cardImage }
            onChange={ onInputChange }
            type="text"
            data-testid="image-input"
            id="image"
          />
        </label>
        <label htmlFor="rare">
          Rarity:
          <select
            value={ cardRare }
            onChange={ onInputChange }
            data-testid="rare-input"
            id="rare"
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        {(hasTrunfo) ? <span>Você já tem um Super trunfo em seu baralho </span> : (
          <label htmlFor="cardTrunfo">
            Super Trunfo:
            <input
              checked={ cardTrunfo }
              onChange={ onInputChange }
              type="checkbox"
              data-testid="trunfo-input"
              id="cardTrunfo"
            />
          </label>)}
        <button
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
          type="button"
          data-testid="save-button"
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Form;
