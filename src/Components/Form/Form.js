import PropTypes from 'prop-types';
import './Form.css';
import { Component } from "react";
import shortid from "shortid";

class Form extends Component{
    state = {
        name: '',
        number: ''
    }
    nameInputId = shortid.generate();
    numInputId = shortid.generate();
    handleInputChange = (e) => {
        const { value, name } = e.currentTarget;
        this.setState({ [name]: value });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.reset();
    }
    reset = () => {
        this.setState({name: '', number: ''})
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
          <label htmlFor={this.nameInputId}>Name</label>
          <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          value= {this.state.name}
          id= {this.nameInputId}
          required
          onChange={this.handleInputChange}
          />
          <br/>
          <br/>
          <label htmlFor={this.numInputId}>Number</label>
          <input
            type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          value= {this.state.number}
          id ={this.numInputId}
          required
          onChange={this.handleInputChange}
          />
          <br/>
          <br/>
          <button type="submit" >Add contact</button>
        </form>
        );
    }

}

Form.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}

export default Form;