import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { RiDeleteBinLine, RiAdminFill } from "react-icons/ri";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AllUsers = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    return res.data;
  });

  const handleMakeAdmin = user => {
    fetch(`http://localhost:5000/users/admin/${user._id}`, {
        method: 'PATCH',

    })
    .then( res => res.json())
    .then( data => {
        console.log(data);
        if (data.modifiedCount > 0) {
            refetch();
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: `${user.name} Made Admin Successfully`,
                showConfirmButton: false,
                timer: 1500
              })
        }
    })
  }

  const handleDelete = user => {
 //console.log(user);
  };

  return (
    <div className="w-full">
      <Helmet>
        <title>Bistro Boss | All Users</title>
      </Helmet>
      <h3 className="text-2xl font-semibold uppercase my-4">
        Total user: {users.length}
      </h3>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>SL</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>ROLE</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td className="text-primary font-bold">
                  {user.role === "admin" ? (
                    "admin"
                  ) : (
                    <button onClick={()=> handleMakeAdmin(user)} className="btn btn-warning btn-sm text-white text-xl">
                      <RiAdminFill />
                    </button>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(user)}
                    className="btn btn-sm bg-red-600 rounded-md text-white text-xl border-none"
                  >
                    <RiDeleteBinLine />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
