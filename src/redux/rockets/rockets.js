/* eslint-disable no-case-declarations */
const url = 'https://api.spacexdata.com/v3/rockets';
const GET_ROCKETS = 'GET_ROCKETS';
const RESERVE_ROCKET = 'RESERVE_ROCKETS';
const FETCHING_ROCKETS_FAILED = 'FETCHING_ROCKETS_FAILED';
const CANCEL_RESERVATION = 'CANCEL_RESERVATION';

const initialState = {
  rockets: [],
};

const loadRockets = (rockets) => ({
  type: GET_ROCKETS,
  payload: rockets,
});

export const reserve = (id) => ({
  type: RESERVE_ROCKET,
  payload: id,
});

export const cancelReservation = (id) => ({
  type: CANCEL_RESERVATION,
  payload: id,
});

const fetchingDataFailed = (err) => ({
  type: FETCHING_ROCKETS_FAILED,
  payload: err,
});

export const fetchRockets = () => async (dispatch) => {
  try {
    const response = await fetch(url);
    const rockets = await response.json();

    dispatch(
      loadRockets(
        rockets.map((rocket) => {
          const {
            rocket_id: id,
            rocket_name: names,
            flickr_images: images,
            description,
            reserved = false,
          } = rocket;

          return {
            id,
            names,
            images,
            description,
            reserved,
          };
        }),
      ),
    );
  } catch (err) {
    err.description = 'An error occurred, please try again later';
    dispatch(fetchingDataFailed(err.description));
  }
};

const rocketReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROCKETS:
      return {
        ...state,
        rockets: action.payload,
      };

    case FETCHING_ROCKETS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case RESERVE_ROCKET:
      const currentState = state.rockets.map((rocket) => {
        if (rocket.id === action.payload) {
          return { ...rocket, reserved: !rocket.reserved };
        }
        return rocket;
      });
      return { ...state, rockets: currentState };
    case CANCEL_RESERVATION:
      const cancelState = state.rockets.map((item) => {
        if (item.id === action.payload) {
          return { ...item, reserved: !item.reserved };
        }
        return item;
      });
      return { ...state, rockets: cancelState };
    default:
      return state;
  }
};

export default rocketReducer;
