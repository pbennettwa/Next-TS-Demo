import React from 'react';
import { getPage } from 'next-page-tester';
import { screen, fireEvent, render } from '@testing-library/react';
import { render as rtlRender } from '../__utils__/test-utils';
import IndexPage from '../src/pages/index';

describe('Index page', () => {
  it('renders "Hello World!" on index page', () => {
    rtlRender(<IndexPage />);

    expect(screen.getByText('Hello World!')).toBeInTheDocument();
  });

  it('increments by 1, decrements by 1, and increments by user input', () => {
    rtlRender(<IndexPage />);

    expect(screen.getByTestId('value')).toHaveTextContent('0');

    fireEvent.click(screen.getByTestId('up'));
    expect(screen.getByTestId('value')).toHaveTextContent('1');

    fireEvent.click(screen.getByTestId('down'));
    expect(screen.getByTestId('value')).toHaveTextContent('0');

    fireEvent.change(screen.getByTestId('add-amount'), {
      target: { value: 17 },
    });
    fireEvent.click(screen.getByTestId('update-amount'));
    expect(screen.getByTestId('value')).toHaveTextContent('17');
  });
});
