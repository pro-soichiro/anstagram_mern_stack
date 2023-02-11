import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div>
      <h2>404 Not Found</h2>
      <Link to="/">トップに戻る</Link>
    </div>
  );
};

export default Page404;
