import React, { useState } from 'react';
import styled from 'styled-components';

import { PageLayout, Input, Button, PasswordInput } from 'components/common';

const Form = styled.form`
  width: 100%;
  max-width: 400px;
  background: white;
  border: 1px solid #eee;
  padding: 16px;
  box-sizing: border-box;
  color: black;
  border-radius: 4px;
`;

export default function Login() {
  const [formFields, setFormFields] = useState({ username: '', password: '' });

  function handleInputChange(event) {
    event.persist();
    setFormFields((s) => ({
      ...s,
      [event.target.name]: event.target.value,
    }));
  }

  return (
    <PageLayout>
      <h1>Login</h1>
      <Form>
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
        <Button>Submit</Button>
        <Button secondary>Submit</Button>
        <Button disabled>Submit</Button>
        <Button size='large'>Submit</Button>
      </Form>
    </PageLayout>
  );
}
