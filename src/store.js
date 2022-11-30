import {
  configureStore,
  createAction,
  createReducer,
  createSlice,
} from "@reduxjs/toolkit";

/** React-Redux
const ADD = "ADD";
const DELETE = "DELETE";

export const addToDo = (text) => {
  return {
    type: ADD,
    text,
  };
};

export const deleteToDo = (id) => {
  return {
    type: DELETE,
    id,
  };
};
 */

/** React-Redux
const reducer = (state = [], action) => {
  switch (action.type) {
    case addToDo.type:
      console.log(action);
      return [{ text: action.payload, id: Date.now() }, ...state];
    case deleteToDo.type:
      console.log(action);
      return state.filter((el) => el.id !== action.payload);
    default:
      return state;
  }
};
 */

// export const addToDo = createAction("ADD");
// export const deleteToDo = createAction("DELETE");
// console.log(addToDo(), deleteToDo());

// const reducer = createReducer([], (builder) => {
//   builder
//     .addCase(addToDo, (state, action) => {
//       state.push({ text: action.payload, id: Date.now() });
//     })
//     .addCase(deleteToDo, (state, action) =>
//       state.filter((el) => el.id !== action.payload)
//     );
// });

const toDos = createSlice({
  name: "toDosReducer",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    },
    remove: (state, action) => state.filter((el) => el.id !== action.payload),
  },
});

const store = configureStore({ reducer: toDos.reducer });

export const { add, remove } = toDos.actions;

export default store;
