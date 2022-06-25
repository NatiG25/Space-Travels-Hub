import rocketReducer, { reserveRocket, cancelRocket, getRockets } from '../components/redux/rockets/rockets';
import allRockets from './fakeAPI/rocketsAPI';

describe('Should return a new state with a reserved property', () => {
  it('Should return all of the rockets', () => {
    expect(rocketReducer(allRockets, getRockets(allRockets))).toEqual(allRockets);
  });
  const rocketID = 1;
  it('Should update the state using the rocketsID with reserved: true ', () => {
    expect(rocketReducer(allRockets, reserveRocket(rocketID)))
      .toEqual(allRockets.map((item) => (item.id === rocketID
        ? { ...item, reserved: true }
        : item)));
  });

  it('Should update the state using the rocketID with reserved: false ', () => {
    expect(rocketReducer(allRockets, cancelRocket(rocketID)))
      .toEqual(allRockets.map((item) => (item.id === rocketID
        ? { ...item, reserved: false }
        : item)));
  });
});
