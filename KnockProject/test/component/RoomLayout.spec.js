import React, { Component } from 'react';
import { render, fireEvent } from 'react-native-testing-library';
import App from '../../App';
import fetch from 'isomorphic-fetch'

describe('NewMessageForm', () => {
  describe('clicking send', () => {
    const KitchenHeader = 'Kitchen';

    let getByTestId;

    beforeEach(() => {
      ({ getByTestId } = render(<App />));

      // fireEvent.changeText(getByTestId('messageText'), messageText);
      // fireEvent.press(getByTestId('sendButton'));
    });

    it('clears the message field', () => {
      expect(getByTestId('kitchenHeader').props.value).toEqual('Kitchen');
    });
  });
});