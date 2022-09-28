const animationReducer = (state, action) => {
  switch (action.type) {
    case 'SHOW_NAV':
      return {
        ...state,
        isInView: true,
      };

    case 'HIDE_NAV':
      return {
        ...state,
        isInView: false,
      };

    case 'DARK_MODE':
      return {
        ...state,
        darkMode: false,
      };

    default:
      return state;
  }
};

export default animationReducer;
