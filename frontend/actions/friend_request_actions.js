import * as FriendRequestAPIUtil from '../util/friend_request_util';

export const RECEIVE_FRIEND_REQUEST = 'RECEIVE_FRIEND_REQUEST';
export const REMOVE_FRIEND_REQUEST = 'REMOVE_FRIEND_REQUEST';


const receiveRequest = request => {
  return {
    type: RECEIVE_FRIEND_REQUEST,
    request
  }
};

const removeRequest = request => {
  return {
    type: REMOVE_FRIEND_REQUEST,
    request
  }
};

export const createFriendRequest = (request) => dispatch => (
  FriendRequestAPIUtil.createRequest(request)
    .then(request => dispatch(receiveRequest(request)),
    err => console.log(error))
);

