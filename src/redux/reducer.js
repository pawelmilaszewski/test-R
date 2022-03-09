const Action = {
  INCREMENT: 'INCREMENT',
  ADD_NODE: 'ADD_NODE',
  NODES_COUNTER: 'NODES_COUNTER',
}

const initialState = {
  nodes: [],
  nodesCounter: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case Action.ADD_NODE:
      return {
        ...state,
        nodes: action.payload,
      };
    case Action.INCREMENT:
      return {
        ...state,
        nodes: action.payload,
      };
    case Action.NODES_COUNTER:
      return {
        ...state,
        nodesCounter: state.nodesCounter++,
      }
    default:
      return state;
  }
};

export const addNode = (payload) => {
  return {
    type: Action.ADD_NODE,
    payload,
  };
};

export const increment = (payload) => {
  return {
    type: Action.INCREMENT,
    payload,
  };
};

export const incrementNodesCounter = () => {
  return {
    type: Action.NODES_COUNTER,
  };
};