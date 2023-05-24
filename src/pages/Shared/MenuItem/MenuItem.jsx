const MenuItem = ({item}) => {
    const {name, recipe, image, price} = item;
    return (
        <div className="flex space-x-4 my-1 lg:my-2">
            <img style={{borderRadius: '0px 200px 200px 200px'}} className="w-[104px]" src={image} alt="" />
            <div>
                <h6 className="text-xl primary-font uppercase">{name} ----------</h6>
                <p className="text-gray-500 mt-2">{recipe}</p>
            </div>
            <p className="text-yellow-500 text-xl font-semibold">${price}</p>
        </div>
    );
};

export default MenuItem;