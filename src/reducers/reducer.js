import {ActionTypes} from "../constants/index";
import {handleActions} from "redux-actions";

const mockData = {
  settingsCurrentTab: 'myDetails',
  user: {
    dataReceived: false,
    token: null,
    firstname: '',
    lastname: '',
    email: '',
    twUsername: '',
    vid: '',
    role:''
  },
  login: {
    email: '',
    password: '',
    emailErrorText: '',
    passwordErrorText: '',
    errorText: '',
    rememberPassword: false
  },
  register: {
    email: '',
    emailErrorText: '',
    twitterAccount: '',
    twitterAccountErrorText: '',
    firstName: '',
    lastName: '',
    password: '',
    confirmPassword: '',
    passwordErrorText: ''
  },
  success: {
    message: '',
    hrefToSignIn: false
  },
  twitter: {
    dataReceivedApiDetails: false,
    dataReceivedTipCriteria: false,
    consumerKey: '',
    consumerSecret: '',
    accessToken: '',
    accessTokenSecret: '',
    minFollowers: 0,
    tipsPerDay: 0,
    tipsPerDayPerUser: 0,
    coinAmount: 0,
    coinType: '',
    hashtags: '',
    // tipsLike: false,
    tipsTweet: false,
    tipsReTweet: false,
    tipsFollowers: false,
    botStatus: '',
    botStart: ''
  },
  log: [
    {
      twUserName: '',
      tweetId: '',
      tweetText: '',
      reTweetText: '',
      createdAt: '',
      twTime: ''
    }

  ],
  usersList: [
    {
      createdAt: '',
      firstname: '',
      twUsername: '',
      role: '',
      id: '',
      isActive: false,
      email: '',
      lastname: ''
    }
  ],
  adminsList: [
    {
      createdAt: '',
      updatedAt: '',
      firstname: '',
      twUsername: '',
      role: '',
      id: '',
      isActive: false,
      email: '',
      lastname: ''
    }
  ],
  userListPageCount: 0,
  logMessage: '',
  popup: {
    resetPassword: false,
    password: '',
    confirmPassword: '',
    passwordErrorText: '',
    show: false,
    text: ''
  }
};
const defaultState = {
  data: mockData
};

export default handleActions({
  [ActionTypes.changeMessage]: (state, {payload}) => ({...state, data: payload}),

  [ActionTypes.cleanData]: (state, {payload}) => ({...state, data: payload}),
  [ActionTypes.changeTabInSettings]: (state, {payload}) => ({...state, data: payload}),
  [ActionTypes.changePasswordAction]: (state, {payload}) => ({...state, data: payload}),
  [ActionTypes.getDataRequestSignIn]: (state, {payload}) => ({...state, data: payload}),
  [ActionTypes.getDataResponseSignIn]: (state, {payload}) => ({...state, data: payload}),
  [ActionTypes.getDataResponseErrorSignIn]: (state, {payload}) => ({...state, data: payload}),
  [ActionTypes.getDataRequestSignUp]: (state, {payload}) => ({...state, data: payload}),
  [ActionTypes.getDataResponseSignUp]: (state, {payload}) => ({...state, data: payload}),
  [ActionTypes.getDataResponseErrorSignUp]: (state, {payload}) => ({...state, data: payload}),
  [ActionTypes.getDataRequestMyDetails]: (state, {payload}) => ({...state, data: payload}),
  [ActionTypes.getDataResponseMyDetails]: (state, {payload}) => ({...state, data: payload}),
  [ActionTypes.getDataResponseErrorMyDetails]: (state, {payload}) => ({...state, data: payload}),
  [ActionTypes.getDataRequestTwitterSettings]: (state, {payload}) => ({...state, data: payload}),
  [ActionTypes.getDataResponseTwitterSettings]: (state, {payload}) => ({...state, data: payload}),
  [ActionTypes.getDataResponseErrorTwitterSettings]: (state, {payload}) => ({...state, data: payload}),
  [ActionTypes.getDataRequestTwitterCriteria]: (state, {payload}) => ({...state, data: payload}),
  [ActionTypes.getDataResponseTwitterCriteria]: (state, {payload}) => ({...state, data: payload}),
  [ActionTypes.getDataResponseErrorTwitterCriteria]: (state, {payload}) => ({...state, data: payload}),
  [ActionTypes.getDataRequestMyDetailsUpdate]: (state, {payload}) => ({...state, data: payload}),
  [ActionTypes.getDataResponseMyDetailsUpdate]: (state, {payload}) => ({...state, data: payload}),
  [ActionTypes.getDataResponseErrorMyDetailsUpdate]: (state, {payload}) => ({...state, data: payload}),
  [ActionTypes.getDataRequestTwitterSettingsUpdate]: (state, {payload}) => ({...state, data: payload}),
  [ActionTypes.getDataResponseTwitterSettingsUpdate]: (state, {payload}) => ({...state, data: payload}),
  [ActionTypes.getDataResponseErrorTwitterSettingsUpdate]: (state, {payload}) => ({...state, data: payload}),
  [ActionTypes.getDataRequestTwitterCriteriaUpdate]: (state, {payload}) => ({...state, data: payload}),
  [ActionTypes.getDataResponseTwitterCriteriaUpdate]: (state, {payload}) => ({...state, data: payload}),
  [ActionTypes.getDataResponseErrorTwitterCriteriaUpdate]: (state, {payload}) => ({...state, data: payload}),
  [ActionTypes.getDataRequestBotGet]: (state, {payload}) => ({...state, data: payload}),
  [ActionTypes.getDataResponseBotGet]: (state, {payload}) => ({...state, data: payload}),
  [ActionTypes.getDataResponseErrorBotGet]: (state, {payload}) => ({...state, data: payload}),
  [ActionTypes.getDataRequestBotPost]: (state, {payload}) => ({...state, data: payload}),
  [ActionTypes.getDataResponseBotPost]: (state, {payload}) => ({...state, data: payload}),
  [ActionTypes.getDataResponseErrorBotPost]: (state, {payload}) => ({...state, data: payload}),
  [ActionTypes.getDataRequestBotPut]: (state, {payload}) => ({...state, data: payload}),
  [ActionTypes.getDataResponseBotPut]: (state, {payload}) => ({...state, data: payload}),
  [ActionTypes.getDataResponseErrorBotPut]: (state, {payload}) => ({...state, data: payload}),
  [ActionTypes.getDataRequestTwTipLogs]: (state, {payload}) => ({...state, data: payload}),
  [ActionTypes.getDataResponseTwTipLogs]: (state, {payload}) => ({...state, data: payload}),
  [ActionTypes.getDataResponseErrorTwTipLogs]: (state, {payload}) => ({...state, data: payload}),
  [ActionTypes.getDataRequestCheck]: (state, {payload}) => ({...state, data: payload}),
  [ActionTypes.getDataResponseCheck]: (state, {payload}) => ({...state, data: payload}),
  [ActionTypes.getDataResponseErrorCheck]: (state, {payload}) => ({...state, data: payload}),
  [ActionTypes.getDataRequestReset]: (state, {payload}) => ({...state, data: payload}),
  [ActionTypes.getDataResponseReset]: (state, {payload}) => ({...state, data: payload}),
  [ActionTypes.getDataResponseErrorReset]: (state, {payload}) => ({...state, data: payload}),
  [ActionTypes.getDataRequestActivateAccount]: (state, {payload}) => ({...state, data: payload}),
  [ActionTypes.getDataResponseActivateAccount]: (state, {payload}) => ({...state, data: payload}),
  [ActionTypes.getDataResponseErrorActivateAccount]: (state, {payload}) => ({...state, data: payload}),
  [ActionTypes.getDataRequestGetUsersList]: (state, {payload}) => ({...state, data: payload}),
  [ActionTypes.getDataResponseGetUsersList]: (state, {payload}) => ({...state, data: payload}),
  [ActionTypes.getDataResponseErrorGetUsersList]: (state, {payload}) => ({...state, data: payload}),
  [ActionTypes.getDataRequestDisableUser]: (state, {payload}) => ({...state, data: payload}),
  [ActionTypes.getDataResponseDisableUser]: (state, {payload}) => ({...state, data: payload}),
  [ActionTypes.getDataResponseErrorDisableUser]: (state, {payload}) => ({...state, data: payload}),
  [ActionTypes.getDataRequestEnableUser]: (state, {payload}) => ({...state, data: payload}),
  [ActionTypes.getDataResponseEnableUser]: (state, {payload}) => ({...state, data: payload}),
  [ActionTypes.getDataResponseErrorEnableUser]: (state, {payload}) => ({...state, data: payload}),
  [ActionTypes.getDataRequestPasswordForget]: (state, {payload}) => ({...state, data: payload}),
  [ActionTypes.getDataResponsePasswordForget]: (state, {payload}) => ({...state, data: payload}),
  [ActionTypes.getDataResponseErrorPasswordForget]: (state, {payload}) => ({...state, data: payload}),
  [ActionTypes.getDataRequestChangePassword]: (state, {payload}) => ({...state, data: payload}),
  [ActionTypes.getDataResponseChangePassword]: (state, {payload}) => ({...state, data: payload}),
  [ActionTypes.getDataResponseErrorChangePassword]: (state, {payload}) => ({...state, data: payload}),
  [ActionTypes.getDataRequestGetAdminsList]: (state, {payload}) => ({...state, data: payload}),
  [ActionTypes.getDataResponseGetAdminsList]: (state, {payload}) => ({...state, data: payload}),
  [ActionTypes.getDataResponseErrorGetAdminsList]: (state, {payload}) => ({...state, data: payload}),
  [ActionTypes.getDataRequestDeleteAdmin]: (state, {payload}) => ({...state, data: payload}),
  [ActionTypes.getDataResponseDeleteAdmin]: (state, {payload}) => ({...state, data: payload}),
  [ActionTypes.getDataResponseErrorDeleteAdmin]: (state, {payload}) => ({...state, data: payload}),
  [ActionTypes.getDataRequestAddAdmin]: (state, {payload}) => ({...state, data: payload}),
  [ActionTypes.getDataResponseAddAdmin]: (state, {payload}) => ({...state, data: payload}),
  [ActionTypes.getDataResponseErrorAddAdmin]: (state, {payload}) => ({...state, data: payload})
}, defaultState);
