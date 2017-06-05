import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';

it('renders without crashing', () => {
  const tree = renderer.create(<Provider store={store}><App /></Provider>);
  expect(tree).toMatchSnapshot();
});
