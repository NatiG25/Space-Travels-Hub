import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import Missions from '../components/Missions/Missions';
import Mission from '../components/Missions/Mission';
import store from '../components/redux/configureStore';

describe('Test all Missions components and functions', () => {
  it('renders Misssions correctly', () => {
    const tree = renderer
      .create(<Provider store={store}><Missions /></Provider>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders Misssion correctly', () => {
    const tree = renderer
      .create(<Provider store={store}><Mission /></Provider>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
