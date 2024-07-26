export const handleLogin = (e, email, password, role) => {
  e.preventDefault();
  try {
    if (!email || !password) {
      alert("Please enter values for all the fields");
    }
    console.log(email, password);
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
  } catch (e) {
    console.log(e);
  }
};
