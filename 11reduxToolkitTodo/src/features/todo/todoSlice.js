import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "hello, task 1" }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id:nanoid(),
        text: action.payload.text
      }
      state.todos.push(todo)
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id)
    },
    updateTodo: (state, action) => {}
  },
});

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions;

export default todoSlice.reducer
//state - abhi initial state mei kya kya values h, un sab ka access dega. current snapshot of your application's data. It is a list of facts about your app right now.;
// action - written note that tells Redux what just happened. It is an announcement of an event. Actions do not change the data themselves; they just deliver the news.
//An action is always a simple JavaScript object with two parts:type: The name of the event (written like a news headline).payload: The extra details or data that goes with the news (optional); payload - object;
// How They Work Together (state and action)
// You have a current State (Score: 10).Something happens in the UI (The user clicks a button).You send an Action (Message: "Add 5 points").Redux takes the old State, reads the Action, and creates a brand-new State (Score: 15).
