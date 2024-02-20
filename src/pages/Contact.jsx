import { useState } from 'react';

const Contact = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
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
            value={inputs.username || ""} 
            onChange={handleChange}
          />
          </label>
          <br />
          <label>Enter your email:
            <br />
          <input 
            type="email" 
            name="email" 
            value={inputs.email || ""} 
            onChange={handleChange}
          />
          </label>
          <br />
        <label>Enter your message:
          <br />
          <textarea rows="2" cols="25" name="message" 
          value={inputs.message || ""} 
          onChange={handleChange}>
          </textarea>
          </label>
          <br />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }

  export default Contact;