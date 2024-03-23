import React from 'react';
import UseInput from '../../Hooks/UseInput';

const HookForm = () => {
    // const [name, handleNameChange] = UseInput('Rojoni')

    const emailState = UseInput('nadimulra@gamil.com')
    const handleSubmit = e => {
        console.log('form data',
        emailState.value);
        e.preventDefault();
    }
    return (
      <div>
        <form onSubmit={handleSubmit}>
          {/* <input value={name} onChange={handleName} type="text" name="name" /> */}
          <br />
          <input
           {...emailState}
            type="email"
            name="email"
            id=""
          />
          <br />
          <input type="password" name="password" required />
          <br />
          <input type="submit" value="Submit" />
          {/* {error && <p>{error}</p>} */}
        </form>
      </div>
    );
};

export default HookForm;