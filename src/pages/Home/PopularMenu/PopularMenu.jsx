import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
    /* const [menu, setMenu] = useState([]);

    useEffect(()=>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const popularItems = data.filter(item => item.category === 'popular');
            setMenu(popularItems);
        });
    }, []) */ 

    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular')
    
    return (
        <section className="my-container">
            <SectionTitle
            heading={'FROM OUR MENU'}
            subHeading={'---Check it out---'}
            />
            <div className="grid md:grid-cols-2 gap-6 my-12">
                {
                    popular.map(item => <MenuItem
                    key={item._id}
                    item={item}
                    ></MenuItem>)
                }
            </div>
            <div className="text-center">
                <button className="btn btn-outline border-0 border-b-4 mt-4">View Full Menu</button>
            </div>
        </section>
    );
};

export default PopularMenu;