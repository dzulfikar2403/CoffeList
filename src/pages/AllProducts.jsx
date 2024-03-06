import MenuLayouts from "../components/layout/MenuLayouts";
import CardCoffe from "../components/fragment/CardCoffe";
import { useFetch } from "../hooks/useFetch";

const AllProducts = () => {
  const dataCoffe = useFetch("https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json");

  return (
    <>
      <MenuLayouts title="Our Collection">{dataCoffe && dataCoffe.map((el) => <CardCoffe key={el.id} data={el} />)}</MenuLayouts>
    </>
  );
};

export default AllProducts;
