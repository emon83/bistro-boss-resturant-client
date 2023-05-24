import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import img1 from '../../../assets/home/card1.jpg'
import img2 from '../../../assets/home/card2.jpg'
import img3 from '../../../assets/home/card3.jpg'

const ChefRecommends = () => {
  return (
    <section className="my-container">
      <div>
        <SectionTitle
          heading={"CHEF RECOMMEND"}
          subHeading={"---Should Try---"}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        <div className="card card-compact w-full bg-base-100">
          <figure>
            <img
              src={img1}
              alt="Shoes"
            />
          </figure>
          <div className="card-body text-center">
            <h2 className="text-xl font-semibold">Caeser Salad</h2>
            <p className="font-semibold">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="card-actions justify-center">
              <button className="btn btn-outline border-0 border-b-4 mt-4 text-yellow-500 bg-slate-100">Add to card</button>
            </div>
          </div>
        </div>
        <div className="card card-compact w-full bg-base-100">
          <figure>
            <img
              src={img2}
              alt="Shoes"
            />
          </figure>
          <div className="card-body text-center">
            <h2 className="text-xl font-semibold">Chicken Pasta</h2>
            <p className="font-semibold">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="card-actions justify-center">
              <button className="btn btn-outline border-0 border-b-4 mt-4 text-yellow-500 bg-slate-100">Add to card</button>
            </div>
          </div>
        </div>
        <div className="card card-compact w-full bg-base-100">
          <figure>
            <img
              src={img3}
              alt="Shoes"
            />
          </figure>
          <div className="card-body text-center">
            <h2 className="text-xl font-semibold">Spice Pizza</h2>
            <p className="font-semibold">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="card-actions justify-center">
              <button className="btn btn-outline border-0 border-b-4 mt-4 text-yellow-500 bg-slate-100">Add to card</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChefRecommends;
