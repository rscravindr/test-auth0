import { useSelector, useDispatch } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { addUser } from "./redux/userSlice";

const Welcome = () => {
  const auth = useSelector((state) => state.user.auth);
  const { logout, user } = useAuth0();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addUser(user));
  }, []);
  return (
    <div>
      <h1>Welcome {auth.name}</h1>
      <button onClick={logout}>LogOut</button>
    </div>
  );
};

export default Welcome;
