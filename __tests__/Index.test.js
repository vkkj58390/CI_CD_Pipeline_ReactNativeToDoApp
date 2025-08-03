import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Index from '../app/index';

// Mock AsyncStorage
jest.mock('@react-native-async-storage/async-storage', () => ({
  getItem: jest.fn(() => Promise.resolve(null)),
  setItem: jest.fn(() => Promise.resolve()),
  removeItem: jest.fn(() => Promise.resolve()),
}));

describe('To-do App CRUD Tests', () => {
  it('opretter en ny todo', async () => {
    const { getByPlaceholderText, getByText, queryByText } = render(<Index />);

    const input = getByPlaceholderText('Add a new todo');
    const addButton = getByText('Add');

    fireEvent.changeText(input, 'Køb mælk');
    fireEvent.press(addButton);

    await waitFor(() => {
      expect(queryByText('Køb mælk')).not.toBeNull();
    });
  });

  it('sletter en todo', async () => {
    const { getByPlaceholderText, getByText, getAllByRole, queryByText } = render(<Index />);

    const input = getByPlaceholderText('Add a new todo');
    const addButton = getByText('Add');

    fireEvent.changeText(input, 'Løb en tur');
    fireEvent.press(addButton);

    await waitFor(() => {
      expect(queryByText('Løb en tur')).not.toBeNull();
    });

    // Find alle knapper og tryk på den sidste (som antages at være delete-knappen i todo item)
    const buttons = getAllByRole('button');
    fireEvent.press(buttons[buttons.length - 1]);

    await waitFor(() => {
      expect(queryByText('Løb en tur')).toBeNull();
    });
  });
});
