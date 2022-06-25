import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../components/redux/configureStore'
import Rocket from '../components/Rockets/Rocket';

describe('Test all Rockets components and functions', () => {
  it('renders Rocket correctly', () => {
    const tree = renderer
      .create(<Provider store={store}><Rocket /></Provider>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
})
