import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, btnDelete, cardDelete } = this.props;

    return (
      <div>
        <div className="cardPreview-container">
          <div className="cardPreview">
            <h2 data-testid="name-card" className="cardTitle">{cardName}</h2>
            <img data-testid="image-card" src={ cardImage } alt={ cardName } />
            <p
              data-testid="description-card"
              className="cardDescription"
            >
              {cardDescription}
              {' '}

            </p>
            <div className="attr-container">
              <span data-testid="attr-1" className="atrr">{cardAttr1}</span>

            </div>
            <div className="attr-2">
              <p>Loucura: </p>
              <span data-testid="attr2-card" className="atrr">{cardAttr2}</span>
            </div>
            <div className="attr-3">
              <p>Perigo: </p>
              <span data-testid="attr3-card" className="atrr">{cardAttr3}</span>
            </div>
            <div className="rare-container">
              <p>Raridade: </p>
              <h4 data-testid="rare-card">{cardRare}</h4>
            </div>
          </div>
          {(cardTrunfo) && <h2 data-testid="trunfo-card" id="trunfo">Super Trunfo</h2>}
          {(btnDelete) && (
            <button
              onClick={ () => cardDelete(cardName) }
              data-testid="delete-button"
              type="button"
              className="delete-button"
            >
              Excluir
            </button>)}
        </div>
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
