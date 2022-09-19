import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { siteProcess } from './site-process/site-process';
import { siteData } from './site-data/site-data';
import { orderProcess } from './order-process/order-process';

export const rootReducer = combineReducers({
  [NameSpace.Data]: siteData.reducer,
  [NameSpace.Site]: siteProcess.reducer,
  [NameSpace.Order]: orderProcess.reducer
});

