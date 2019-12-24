// ----------------------------------------------
// LANDING REDUX
// ----------------------------------------------
import axios from 'axios';
import config from '../../../configs/config.json';
import cookie from 'react-cookies';
import { tokenize, errorHandler } from '../../actions/general';

const DASHBOARD_URL = config.API_URL + '/dashboard';
const WORKFLOW_URL = config.API_URL + '/workflow';

export const types = {
  DASHBOARD_REQUEST: 'DASHBOARD_REQUEST',

  GET_DASHBOARD_SL_PROGRAM_INFO_SUCCESS: 'GET_DASHBOARD_SL_PROGRAM_INFO_SUCCESS',
  GET_DASHBOARD_PROGRAM_STATUS_SUCCESS: 'GET_DASHBOARD_PROGRAM_STATUS_SUCCESS',
  GET_WORKFLOW_STATUS_SUCCESS: 'GET_WORKFLOW_STATUS_SUCCESS',

  DASHBOARD_ERROR: 'DASHBOARD_ERROR'
}

const INITIAL_STATE = {
                        message: '',
                        error: false,
                        slProgramInfo: {},
                        dashboardProgramStatus: {},
                        clientWorkflow: {
                          current_workflow_id: 1,
                          stage: 1,
                          status: "account_created_new_lead"
                        }
                      };

export default function (state = INITIAL_STATE, action) {
  switch(action.type) {
    case types.DASHBOARD_REQUEST:
      return {...state, message: '', slProgramInfo: {}, dashboardProgramStatus: {}, clientWorkflow: { current_workflow_id: 1, stage: 1, status: "account_created_new_lead"} };
      break;

    case types.GET_DASHBOARD_SL_PROGRAM_INFO_SUCCESS:
      return {...state, message: action.payload.message, slProgramInfo: action.payload.slProgramInfo };
      break;

    case types.GET_DASHBOARD_PROGRAM_STATUS_SUCCESS:
      return {...state, message: action.payload.message, dashboardProgramStatus: action.payload.dashboardProgramStatus };
      break;

    case types.GET_WORKFLOW_STATUS_SUCCESS:
      return {...state, message: action.payload.message, clientWorkflow: action.payload.clientWorkflow };
      break;

    case types.DASHBOARD_ERROR:
      return {...state, message: action.payload.message };
      break;

    default:
      return state
      break;
  }
}

// PROGRAM CALCULATION
export function getSlProgramInfo(user_id) {
  var protectedData = tokenize({user_id});
  return function(dispatch) {
    axios.post(`${DASHBOARD_URL}/getSlProgramInfo`, protectedData)
    .then(response => {
      dispatch({ type: types.GET_DASHBOARD_SL_PROGRAM_INFO_SUCCESS, payload: { message: response.data.message, slProgramInfo: response.data.slProgramInfo }});
    })
    .catch((error) => {
      console.log(error);
      errorHandler(dispatch, error.response, types.DASHBOARD_ERROR);
    });
  }
}

export function getDashboardProgramStatus(client_id) {
  var protectedData = tokenize({client_id});
  return function(dispatch) {
    axios.get(`${DASHBOARD_URL}/` + client_id, protectedData)
    .then(response => {
      dispatch({ type: types.GET_DASHBOARD_PROGRAM_STATUS_SUCCESS, payload: { message: response.message, dashboardProgramStatus: response.data.Program }});
    })
    .catch((error) => {
      console.log(error);
      errorHandler(dispatch, error.response, types.DASHBOARD_ERROR);
    });
  }
}

export function getWorkflowStatus(client_id) {
  var protectedData = tokenize({client_id});
  return function(dispatch) {
    axios.get(`${WORKFLOW_URL}/` + client_id, protectedData)
    .then(response => {
      dispatch({ type: types.GET_WORKFLOW_STATUS_SUCCESS, payload: { message: response.data.message, clientWorkflow: response.data.clientWorkflow }});
    })
    .catch((error) => {
      console.log(error);
      errorHandler(dispatch, error.response, types.DASHBOARD_ERROR);
    });
  }
}

export const actions = {
  getSlProgramInfo,
  getDashboardProgramStatus,
  getWorkflowStatus
}
