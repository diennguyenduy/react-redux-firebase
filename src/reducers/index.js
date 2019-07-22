import { combineReducers } from 'redux';

import data from './dataReducer';

export default combineReducers({ data });

/*
 * If we would add new reducer we just create new file inside reducers directory.
 * Then import it. And finally add it to combineReducers function.
 * This function takes all reducers and combine them into one
 */
