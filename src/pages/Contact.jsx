import { useState } from 'react';

const Contact = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    if (inputs.username && inputs.email && inputs.message) {
      event.preventDefault();
      console.log(inputs.username, inputs.email, inputs.message);
    } else {
      alert('Please fill out all form items');
    }
  }

    return (
      <div>
        <h2>Contact</h2>
        <p>You can contact me with the form below or follow any of these links!</p>
        <ul>
          <li><i className="bi bi-envelope-at"></i> <a href="mailto:amandakathleennorris@gmail.com">Email</a></li>
          <li><i className="bi bi-github"></i> <a href="https://github.com/whimsically">GitHub</a></li>
        </ul>

        <form onSubmit={handleSubmit}>
          <label>Enter your name:
            <br />
          <input 
            type="text" 
            name="username"
            defaultValue={'Name'} 
            value={inputs.username} 
            onChange={handleChange}
          />
          </label>
          <br />
          <label>Enter your email:
            <br />
          <input 
            type="email" 
            name="email"
            defaultValue={'Email'} 
            value={inputs.email} 
            onChange={handleChange}
          />
          </label>
          <br />
        <label>Enter your message:
          <br />
          <textarea rows="2" cols="25" name="message"
          defaultValue={'Message'} 
          value={inputs.message} 
          onChange={handleChange}>
          </textarea>
          </label>
          <br />
          <br />
          <input type="submit" value="Submit" className="" />
        </form>
      </div>
    );
  }

  export default Contact;