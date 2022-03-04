const url = 'https://api.spacexdata.com/v3/missions';
const GET_MISSIONS = 'GET_MISSIONS';
const FETCHING_MISSIONS_FAILED = 'FETCHING_ROCKETS_FAILED';
const CHANGE_MISSION_STATUS = 'CHANGE_MISSION_STATUS';
// const LEAVE_MISSION = 'LEAVE_MISSION';

const initialState = {
  missions: [],
};

const loadMissions = (missions) => ({
  type: GET_MISSIONS,
  payload: missions,
});

const fetchingDataFailed = (err) => ({
  type: FETCHING_MISSIONS_FAILED,
  payload: err,
});

export const changeMissionStatus = (id) => ({
  type: CHANGE_MISSION_STATUS,
  payload: id,
});

export const fetchMissions = () => async (dispatch) => {
  try {
    const response = await fetch(url);
    const missions = await response.json();

    dispatch(
      loadMissions(
        missions.map((mission) => {
          const {
            mission_id: id,
            mission_name: missionName,
            description,
          } = mission;
          const newMissionDerivedDetails = {
            id, missionName, description, isUserJoinedToMission: false,
          };
          return newMissionDerivedDetails;
        }),
      ),
    );
  } catch (err) {
    err.description = 'An error occurred, please try again later';
    dispatch(fetchingDataFailed(err.description));
  }
};

const missionReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MISSIONS:
      return {
        ...state,
        missions: action.payload,
      };

    case FETCHING_MISSIONS_FAILED:
      return {
        ...state,
        error: action.payload,
      };
    case CHANGE_MISSION_STATUS: {
      const newState = state.missions.map((item) => {
        if (item.id === action.payload) {
          return { ...item, isUserJoinedToMission: !item.isUserJoinedToMission };
        }
        return item;
      });
      return { ...state, missions: newState };
    }
    default:
      return state;
  }
};

export default missionReducer;
