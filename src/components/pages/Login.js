import React, { useState, useEffect, Fragment } from 'react';
import styled from 'styled-components';

import {
  PageLayout,
  Input,
  Button,
  PasswordInput,
  Spinner,
} from 'components/common';

const Form = styled.form`
  width: 100%;
  max-width: 400px;
  background: white;
  border: 1px solid #eee;
  padding: 16px;
  box-sizing: border-box;
  color: black;
  border-radius: 4px;

  .alt-text {
    text-align: center;
    margin: 10px 0;
  }
`;

let timeout;

export default function Login() {
  const [formFields, setFormFields] = useState({ username: '', password: '' });
  const [loading, setLoading] = useState(false);

  function handleInputChange(event) {
    event.persist();
    setFormFields((s) => ({
      ...s,
      [event.target.name]: event.target.value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);
  }

  useEffect(() => {
    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, []);

  return (
    <PageLayout>
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        {loading ? (
          <Spinner />
        ) : (
          <Fragment>
            <Input
              name='username'
              placeholder='Username'
              onChange={handleInputChange}
              value={formFields.username}
              type='text'
            />
            <PasswordInput
              name='password'
              onChange={handleInputChange}
              value={formFields.password}
            />
          </Fragment>
        )}
        <Button size='large' type='submit' disabled={loading}>
          {loading ? 'Loading...' : 'Login'}
        </Button>
        {!loading && (
          <Fragment>
            <div className='alt-text'>or</div>
            <Button secondary type='button'>
              Register
            </Button>
          </Fragment>
        )}
      </Form>
    </PageLayout>
  );
}
