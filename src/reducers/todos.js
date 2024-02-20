import todo from './todo';

const initialState = [
  {
    id: 1,
    text: 'Learn Javascript',
    completed: true
  },
  {
    id: 3,
    text: 'Go to the gym',
    completed: false
  },
  {
    id: 4,
    text: 'Dance class',
    completed: false
  },
  {
    id: 5,
    text: 'Drink 2L water everyday',
    completed: false
  }
];

const todos = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, todo(undefined, action)];
    case 'TOGGLE_TODO':
      return state.map(t => todo(t, action));
    default:
      return state;
  }
};

export default todos;
