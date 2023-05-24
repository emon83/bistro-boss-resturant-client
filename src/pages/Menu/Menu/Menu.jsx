import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const offered = menu.filter((item) => item.category === "offered");
  const desserts = menu.filter((item) => item.category === "dessert");
  const soups = menu.filter((item) => item.category === "soup");
  const salads = menu.filter((item) => item.category === "salad");
  const pizzas = menu.filter((item) => item.category === "pizza");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover img={menuImg} title={"OUR MENU"} />
      {/* main cover */}
      <SectionTitle subHeading={"---Don't miss---"} heading={"TODAY'S OFFER"} />
      {/* offered menu items */}
      <MenuCategory items={offered}/>
      {/* dessert menu items */}
      <MenuCategory
      items={desserts}
      title="dessert"
      img={dessertImg}
      />
      {/* pizza menu Items */}
      <MenuCategory
      items={pizzas}
      title="pizza"
      img={pizzaImg}
      />
      {/* salad menu Items */}
      <MenuCategory
      items={salads}
      title="salad"
      img={saladImg}
      />
      {/* soup menu Items */}
      <MenuCategory
      items={soups}
      title="Soup"
      img={soupImg}
      />
    </div>
  );
};

export default Menu;
