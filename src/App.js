import './App.css';
import { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props)

    this.defaultFormData = {
      firstName: '',
      lastName: '',
      email: '',
      comments: '',
      isFriendly: true,
      employment: '',
      favColor: ''
    }
    this.state = JSON.parse(localStorage.getItem('formData')) || this.defaultFormData

    this.handleChange = this.handleChange.bind(this)
    this.resetForm = this.resetForm.bind(this)
  }

  componentDidMount() {
    document.title = 'Magic Form'
  }

  componentDidUpdate() {
    localStorage.setItem('formData', JSON.stringify(this.state))
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target

    this.setState(prevState => (
      {
        ...prevState,
        [name]: type === 'checkbox' ? checked : value
      } 
    ))
  }

  resetForm(event) {
    event.preventDefault()
    this.setState(this.defaultFormData)
  }

  render() {
    return (
      <>
        <h1>Magic Form</h1>
        <p>Type something in the form and reload the page, your inputs will not be lost. Click "Reset Form" button to reset form to original state.</p>
        <form onSubmit={this.resetForm}>
          <input
            type='text'
            name='firstName'
            placeholder='First Name'
            onChange={this.handleChange}
            value={this.state.firstName}
          />
          <input
            type='text'
            name='lastName'
            placeholder='Last Name'
            onChange={this.handleChange}
            value={this.state.lastName}
          />
          <input
            type='email'
            name='email'
            placeholder='Email'
            onChange={this.handleChange}
            value={this.state.email}
          />
          <textarea
            name='comments'
            placeholder='Type your comments here...'
            onChange={this.handleChange}
            value={this.state.comments}
          />
          <input
            type='checkbox'
            name='isFriendly'
            onChange={this.handleChange}
            checked={this.state.isFriendly}
            id='isFriendly'
          />
          <label htmlFor='isFriendly'>Are you friendly?</label>
          <br />
          <br />

          <fieldset>
            <legend>Current employement status</legend>

            <input
              type='radio'
              name='employment'
              onChange={this.handleChange}
              value='unemployed'
              checked={this.state.employment === 'unemployed'}
              id='unemployed'
            />
            <label htmlFor='unemployed'>Unemployed</label>
            <br />

            <input
              type='radio'
              name='employment'
              onChange={this.handleChange}
              value='part-time'
              checked={this.state.employment === 'part-time'}
              id='part-time'
            />
            <label htmlFor='part-time'>Part-time</label>
            <br />

            <input
              type='radio'
              name='employment'
              onChange={this.handleChange}
              value='full-time'
              checked={this.state.employment === 'full-time'}
              id='full-time'
            />
            <label htmlFor='full-time'>Full-time</label>
            <br />
          </fieldset>
          <br />

          <label className='favColor' htmlFor='favColor'>What is your favorite color?</label>
          <br />
          
          <select
            name='favColor'
            onChange={this.handleChange}
            value={this.state.favColor}
            id='favColor'
          >
            <option value=''>Choose color</option>
            <option value='red'>Red</option>
            <option value='orange'>Orange</option>
            <option value='yellow'>Yellow</option>
            <option value='green'>Green</option>
            <option value='blue'>Blue</option>
            <option value='indigo'>Indigo</option>
            <option value='violet'>Violet</option>
          </select>
          <br />

          <div className='btn-container'>
            <button>Reset Form</button>
          </div>
        </form>
      </>
    );
  }
}

export default App;
