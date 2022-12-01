import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, btnDelete, cardDelete } = this.props;

    return (
      <div>
        <h2 data-testid="name-card">{ cardName }</h2>
        <img data-testid="image-card" src={ cardImage } alt={ cardName } />
        <p data-testid="description-card">{ cardDescription }</p>
        <span data-testid="attr1-card">{ cardAttr1 }</span>
        <span data-testid="attr2-card">{ cardAttr2 }</span>
        <span data-testid="attr3-card">{ cardAttr3 }</span>
        <h4 data-testid="rare-card">{ cardRare }</h4>
        { (cardTrunfo) && <h2 data-testid="trunfo-card">Super Trunfo</h2> }
        { (btnDelete) && (
          <button
            onClick={ () => cardDelete(cardName) }
            data-testid="delete-button"
            type="button"
          >
            Excluir
          </button>) }
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  btnDelete: PropTypes.bool.isRequired,
  cardDelete: PropTypes.func.isRequired,
};

export default Card;
