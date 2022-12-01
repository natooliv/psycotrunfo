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
    }), 

export default App;

