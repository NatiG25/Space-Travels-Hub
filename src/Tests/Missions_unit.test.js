import { joinMission } from '../components/redux/missions/missions';
import { cancelMission } from '../components/redux/missions/missions';
import { getMissions } from '../components/redux/missions/missions'
import missionReducer from '../components/redux/missions/missions';
import allMissions from './fakeAPI/missionsAPI';

describe('Should return a new state with a reserved property', () => {
  it('Should return all of the missions', () => {
    expect(missionReducer(allMissions, getMissions(allMissions))).toEqual(allMissions);
  })
    const missionID = "9D1B7E0"; 
    it('Should update the state using the missionID to reserved: true ', () => {
      expect(missionReducer(allMissions, joinMission(missionID))).toEqual(allMissions.map(item => {
        return item.mission_id === missionID ? { ...item, reserved: true } 
        : item
      }));
    });

    it('Should update the state using the missionID to reserved: false ', () => {
      expect(missionReducer(allMissions, cancelMission(missionID))).toEqual(allMissions.map(item => {
        return item.mission_id === missionID ? { ...item, reserved: false } 
        : item
      }));
    });    
});