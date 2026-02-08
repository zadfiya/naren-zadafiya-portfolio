import React from 'react';
import user from '@testing-library/user-event';
import ContactForm from './contactForm';
import {
  render,
  act,
  screen,
  waitFor,
} from '../../../infra/test/testUtils';

const onSubmit = jest.fn();
onSubmit.mockImplementation((event) => {
  event.preventDefault();
});

describe('<contatForm />', () => {
  describe('when form fields are valid', () => {
    test('complete the submission', async () => {
      await act(async () => {
        render(
          <ContactForm
            onSubmit={onSubmit}
          />,
        );
      });

      const button = screen.getByRole('button', { name: /send message/i });
      expect(button).toBeDisabled();

      const inputNome = screen.getByPlaceholderText(/your sweet name/i);
      await user.type(inputNome, 'Naren');
      await waitFor(() => expect(inputNome).toHaveValue('Naren'));

      const inputEmail = screen.getByPlaceholderText(/your e-mail address/i);
      await user.type(inputEmail, 'teste@teste.com');
      await waitFor(() => expect(inputEmail).toHaveValue('teste@teste.com'));

      const inputMensagem = screen.getByPlaceholderText(/write your message/i);
      await user.type(inputMensagem, 'Hello World! this is test.');
      await waitFor(() => expect(inputMensagem).toHaveValue('Hello World! this is test.'));

      expect(button).not.toBeDisabled();

      await act(async () => user.click(button));

      // screen.debug();

      expect(onSubmit).toHaveBeenCalledTimes(1);
    });
  });

  describe('when form fields are invalid', () => {
    test('displays the respective errors', async () => {
      render(<ContactForm onSubmit={onSubmit} />);

      const inputNome = screen.getByPlaceholderText(/your sweet name/i);
      inputNome.focus();
      inputNome.blur();

      await waitFor(() => screen.getByRole('alert'));

      expect(screen.getByRole('alert')).toHaveTextContent('Please fill in at least 3 characters');
    });
  });
});
