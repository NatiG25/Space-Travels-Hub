import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import Missions from './src/components/Missions/Missions';
import MyProfile from './src/components/MyProfile/MyProfile'
import store from './src/components/redux/configureStore'

it('renders correctly', () => {
  const tree = renderer
    .create(<Provider store={store}><Missions /></Provider>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly', () => {
    const tree = renderer
      .create(<Provider store={store}><MyProfile /></Provider>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
