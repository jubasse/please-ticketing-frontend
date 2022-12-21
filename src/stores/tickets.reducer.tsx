import {
  createSlice,
  createEntityAdapter,
  createAsyncThunk,
} from '@reduxjs/toolkit';
import { getTicket, getTickets } from '../api/tickets/tickets-api';

const findAllTickets = createAsyncThunk('tickets/findAll', async () => {
  return await getTickets();
});

const findOneTicket = createAsyncThunk(
  'tickets/findOne',
  async (id: string) => {
    return await getTicket(id);
  },
);

const ticketAdapter = createEntityAdapter();

const ticketSlice = createSlice({
  name: 'ticket',
  initialState: ticketAdapter.getInitialState({
    isLoading: false,
    error: '',
  }),
  reducers: {
    ticketAddOne: ticketAdapter.addOne,
    ticketRemoveOne: ticketAdapter.removeOne,
    ticketUpdateOne: ticketAdapter.updateOne,
  },
  extraReducers: builder => {
    builder
      .addCase(findAllTickets.pending, state => {
        state.isLoading = true;
      })
      .addCase(findAllTickets.fulfilled, (state, action) => {
        ticketAdapter.setAll(state, action.payload);
        state.isLoading = false;
      })
      .addCase(findAllTickets.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
    builder
      .addCase(findOneTicket.pending, state => {
        state.isLoading = true;
      })
      .addCase(findOneTicket.fulfilled, (state, action) => {
        ticketAdapter.setOne(state, action.payload);
        state.isLoading = false;
      })
      .addCase(findOneTicket.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const { selectAll } = ticketAdapter.getSelectors(
  (state: any) => state.members,
);

export default ticketSlice.reducer;
