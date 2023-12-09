import { Component } from 'react';


export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const { name, number } = this.state;
    this.props.handleAddContact({
      name,
      number,
    });
    this.setState({
      name: '',
      number: '',
    });
  };

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };

  render() {
    return (
      <form  className="contact-form" onSubmit={this.handleSubmit} >
        <label >
          Name
          <input
            type="text" name="name"
            value={this.state.name} onChange={this.handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            required
          />
        </label>

        <label >
          Number
          <input
             type="tel" name="number"
            value={this.state.number} onChange={this.handleChange}
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            required
          />
        </label>

        <button className="contact-btn" type="submit" >
          Add contact
        </button>
      </form>
    );
  }
}