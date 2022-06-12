import { configureStore, createSlice } from "@reduxjs/toolkit";

let user = createSlice({
  name: "user",
  initialState: {
    name: "Loca",
    age: 20,
  },
  reducers: {
    changeAge(state, a) {
      state.age += a.payload;
    },
  },
});

export let { changeAge } = user.actions; //state를 변경하는 함수 밖에서도 쓸수있게 export

let cart = createSlice({
  name: "cart",
  initialState: [
    {
      id: 0,
      name: "White and Black",
      count: 2,
    },
    {
      id: 2,
      name: "Grey Yordan",
      count: 1,
    },
  ],
  reducers: {
    addCount(state, action) {
      let 번호 = state.findIndex((a) => {
        return a.id === action.payload;
      });
      state[번호].count++;
    },
    addItem(state, action) {
      state.push(action.payload);
    },
  },
});
export let { addCount, addItem } = cart.actions;
export default configureStore({
  reducer: {
    user: user.reducer,
    cart: cart.reducer,
  },
});
