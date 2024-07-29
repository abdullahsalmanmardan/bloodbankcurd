import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import Loader from "../components/shared/Loader";
import Layout from "../components/shared/Layout/Layout";

const HomePage = () => {
  const { loading, error } = useSelector((state) => state.auth);

  return (
    <Layout>
      {error && <div>{toast.error(error)}</div>}
      {loading ? <Loader /> : <div className="w-4/5">HomePage</div>}
    </Layout>
  );
};

export default HomePage;
