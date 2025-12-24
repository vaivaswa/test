import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [] },
  reducers: {
    addToCart: (state, action) => {
      const item = state.items.find(i => i.id === action.payload.id);
      if (item) item.qty++;
      else state.items.push({ ...action.payload, qty: 1 });
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
