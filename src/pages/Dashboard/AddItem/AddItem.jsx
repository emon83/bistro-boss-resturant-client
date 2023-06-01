import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_token = import.meta.env.VITE_Image_Upload_Token;
const AddItem = () => {
  const [axiosSecure] = useAxiosSecure();
  const {
    register,
    handleSubmit,
    reset

  } = useForm();
  const image_hoisting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`;
  
  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append('image', data.image[0]);

    fetch(image_hoisting_url, {
        method: 'POST',
        body: formData
    })
    .then(res => res.json())
    .then(imageResponse => {
        if (imageResponse.success) {
          const imgURL = imageResponse.data.display_url;
          const {name, price, category, recipe} = data;
          const newItem = {name, price: parseFloat(price), category, recipe, image:imgURL}
          
          axiosSecure.post('/menu', newItem)
          .then(data => {
            console.log('after posting new menu item', data.data);
            if (data.data.insertedId) {
              reset();
              Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Menu Item Added successfully',
                showConfirmButton: false,
                timer: 1500
              })
            }
          })
        }
    })
  };

  return (
    <div className="w-full px-10">
      <SectionTitle heading="ADD AN ITEM" subHeading="---What's new?---" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full mb-4">
          <label className="label">
            <span className="label-text">Recipe name*</span>
          </label>
          <input
            type="text"
            placeholder="Recipe name"
            className="input input-bordered w-full"
            {...register("name", { required: true, maxLength: 120 })}
          />
        </div>
        <div className="flex items-center gap-4 mb-4">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Category*</span>
            </label>
            <select
              defaultValue="Pick One"
              className="select select-bordered"
              {...register("category", { required: true })}
            >
              <option disabled>
              Pick One
              </option>
              <option>Pizza</option>
              <option>Soup</option>
              <option>Salad</option>
              <option>Dessert</option>
              <option>Drinks</option>
            </select>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Price*</span>
            </label>
            <input
              type="number"
              placeholder="Price"
              className="input input-bordered w-full"
              {...register("price", { required: true })}
            />
          </div>
        </div>
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Recipe Details*</span>
          </label>
          <textarea
            className="textarea textarea-bordered h-24"
            placeholder="Recipe Details"
            {...register("recipe", { required: true })}
          ></textarea>
        </div>
        <div className="form-control w-full mb-4">
          <label className="label">
            <span className="label-text">Item Image</span>
          </label>
          <input
            type="file"
            className="file-input file-input-ghost w-full"
            {...register("image", { required: true })}
          />
        </div>
        <input
          className="btn btn-warning btn-sm"
          type="submit"
          value="Add Item"
        />
      </form>
    </div>
  );
};

export default AddItem;
