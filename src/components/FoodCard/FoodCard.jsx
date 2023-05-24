const FoodCard = ({item}) => {
    const {name, recipe, image, price} = item;
  return (
    <div className="card w-full bg-base-100">
      <figure>
        <img
          src={image}
          alt="food"
        />
      </figure>
      <p className="badge badge-lg absolute right-0 mr-5 mt-4">${price}</p>
      <div className="card-body text-center">
        <h2 className="text-xl font-semibold">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-center">
          <button className="btn btn-outline bg-slate-100 border-0 border-orange-400 border-b-4">add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
