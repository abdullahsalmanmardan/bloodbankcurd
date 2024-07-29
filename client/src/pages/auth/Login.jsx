import Form from "../../components/shared/Form/Form";
import { useSelector } from "react-redux";
import Loader from "../../components/shared/Loader";
import { toast } from "react-toastify";

const Login = () => {
  const { loading, error } = useSelector((state) => state.auth);

  return (
    <>
      {error && <div>{toast.error(error)}</div>}
      {loading ? (
        <Loader />
      ) : (
        <Form
          submitButton="Login"
          formTitle={"Login Form"}
          formType={"login"}
        />
      )}
    </>
  );
};

export default Login;
