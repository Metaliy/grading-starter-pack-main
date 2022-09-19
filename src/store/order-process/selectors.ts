import { NameSpace } from 'const';
import { State } from 'types/state';

export const getPostSendingStatus = (state: State): boolean => state[NameSpace.Order].orderSentStatus;
