import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import App from '../../components/App';
import '@testing-library/jest-dom';

describe('4th Deliverable', () => {
  test('filters plants by name on search', async () => {
    global.setFetchResponse(global.basePlants)
    const { getByPlaceholderText, findAllByTestId, queryAllByTestId } = render(<App />);
    await findAllByTestId('plant-item')
    const searchInput = getByPlaceholderText('Type a name to search...');
    fireEvent.change(searchInput, { target: { value: 'ZZ Plant' } });

    await waitFor(() => {
      const filteredPlants = queryAllByTestId('plant-item');
      expect(filteredPlants).toHaveLength(1);
    });
    
    fireEvent.change(searchInput, { target: { value: 'p' } });
    
    await waitFor(() => {
      const filteredPlants = queryAllByTestId('plant-item');
      expect(filteredPlants).toHaveLength(3);
    });
  });
})