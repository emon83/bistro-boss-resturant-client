import { FaFacebookF } from "react-icons/fa";
import { BsGoogle, BsGithub } from "react-icons/bs";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);

        const saveUser = {
          name: loggedUser.displayName,
          email: loggedUser.email,
        };

        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(saveUser),
        })
          .then((res) => res.json())
          .then(() => {
            navigate(from, { replace: true });
          });
      })
      .catch((err) => console.error(err));
  };
  return (
    <div>
      <div className="divider">Or sign in with</div>
      <div className="flex items-center gap-9 justify-center">
        <button className="btn btn-outline rounded-full">
          <FaFacebookF />
        </button>
        <button
          onClick={handleGoogleSignIn}
          className="btn btn-outline rounded-full"
        >
          <BsGoogle />
        </button>
        <button className="btn btn-outline rounded-full">
          <BsGithub />
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
