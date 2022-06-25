import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import MyProfile from '../components/MyProfile/MyProfile'
import store from '../components/redux/configureStore'

describe('Test all MyProfile components and functions', () => {  
  it('renders MyProfile correctly', () => {
      const tree = renderer
        .create(<Provider store={store}><MyProfile /></Provider>)
        .toJSON();
      expect(tree).toMatchSnapshot();
  });
})
