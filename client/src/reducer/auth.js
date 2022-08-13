//create user reducer function
export const authReducer = (
  state = { name: "Thong", role: "admin" },
  action
) => {
  switch (action.type) {
    case "LOGGED_IN_USER":
      return { ...state, ...action.payload };
    case "LOGOUT":
      return action.payload;
    default:
      return state;
  }
};

// const { name, isStaff } = useSelector(state => state.user)
// return isStaff && <></>
