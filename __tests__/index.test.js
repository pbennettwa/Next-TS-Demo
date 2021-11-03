import React from 'react';
import { getPage } from 'next-page-tester';
import { screen, fireEvent } from '@testing-library/react';

describe('Index page', () => {
  it('renders "Hello World!" on index page', async () => {
    const { render } = await getPage({
      route: '/index',
    });

    render();
    expect(screen.getByText('Hello World!')).toBeInTheDocument();
  });
});
