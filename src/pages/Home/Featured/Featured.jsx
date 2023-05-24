import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <section className="featured-item bg-fixed text-white pt-8 my-[130px]">
            <SectionTitle 
            subHeading={'---Check it out---'}
            heading={'FROM OUR MENU'}
            />
            <div className="md:flex justify-center items-center md:pb-20 md:pt-12 md:px-36">
                <div className="">
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p className="text-lg">March 20, 2023</p>
                    <h6 className="uppercase text-xl my-2">WHERE CAN I GET SOME?</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className="btn btn-outline text-white border-0 border-b-4 mt-4">Read More</button>
                </div>
            </div>
        </section>
    );
};

export default Featured;