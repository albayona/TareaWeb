export const todoReducer = (state = [], action) => {
  switch (action.type) {
    case 'add':
      return [...state, action.payload];
    case 'delete':
      return state.filter((data, i) => data.id !== action.payload);


    case 'toggle':
    { const  i = state.findIndex(x => x.id === action.payload.id);

          state[i] =  {
      id: action.payload.id,
      desc: action.payload.desc,
      done: !action.payload.done,
    };
      return [...state];}

    default:
      return state;
  }
};

