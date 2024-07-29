import Form from "../../components/shared/Form/Form";
import { useSelector } from "react-redux";
import Loader from "../../components/shared/Loader";
import { toast } from "react-toastify";

const Register = () => {
  const { loading, error } = useSelector((state) => state.auth);

  return (
    <>
      {error && <div>{toast.error(error)}</div>}
      {loading ? (
        <Loader />
      ) : (
        <Form
          submitButton="Register"
          formTitle="Register Form"
          formType={"register"}
        />
      )}
    </>
  );
};

export default Register;
