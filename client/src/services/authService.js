import { userLogin, userRegister } from "../redux/features/auth/authActions";
import store from "../redux/store";

export const handleLogin = (e, email, password, role) => {
  e.preventDefault();
  try {
    if (!email || !password) {
      alert("Please enter values for all the fields");
    }
    console.log(email, password, role);

    // to access the reducer function without useDispatch because it is not jsx.
    store.dispatch(userLogin({ email, password, role }));
  } catch (e) {
    console.log(e);
  }
};

export const handleRegister = (
  e,
  email,
  password,
  role,
  name,
  organizationName,
  hospitalName,
  website,
  address,
  phone
) => {
  e.preventDefault();
  try {
    console.log(
      email,
      password,
      role,
      name,
      organizationName,
      hospitalName,
      website,
      address,
      phone
    );
    
    store.dispatch(
      userRegister({
        email,
        password,
        role,
        name,
        organizationName,
        hospitalName,
        website,
        address,
        phone,
      })
    );
  } catch (e) {
    console.log(e);
  }
};
