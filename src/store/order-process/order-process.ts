import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, ToastMessages } from 'const';
import { toast } from 'react-toastify';
import { postQuestOrderAction } from 'store/api-actions';
import { OrderPostProcessType } from 'types/state';


const initialState: OrderPostProcessType = {
  orderSentStatus: false,
};

export const orderProcess = createSlice({
  name: NameSpace.Order,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(postQuestOrderAction.pending, (state) => {
        state.orderSentStatus = true;
      })
      .addCase(postQuestOrderAction.rejected, (state) => {
        state.orderSentStatus = false;
        toast.error(ToastMessages.PostError);
      })
      .addCase(postQuestOrderAction.fulfilled, (state) => {
        state.orderSentStatus = false;
        toast.success(ToastMessages.PostSucces);
      });
  }});
