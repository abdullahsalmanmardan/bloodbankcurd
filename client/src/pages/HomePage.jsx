import { useSelector } from "react-redux";
import Loader from "../../components/shared/Loader";
import { toast } from "react-toastify";

const HomePage = () => {
  const { loading, error } = useSelector((state) => state.auth);

  return (
    <>
      {error && <div>{toast.error(error)}</div>}
      {loading ? <Loader /> : HomePage}
    </>
  );
};

export default HomePage;
