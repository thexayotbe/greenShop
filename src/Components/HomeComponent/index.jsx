import AuthSection from "../AuthSection";
import Blogs from "../Blogs";
import HomeCarousel from "../HomeCarousel";
import ShopDashbord from "../ShopDashbord";
import Suggestion from "../Suggestion";

const HomeComponent = () => {
  return (
    <div>
      {/* <AuthSection /> */}
      <HomeCarousel />
      <ShopDashbord />
      <Suggestion />
      <Blogs />
    </div>
  );
};

export default HomeComponent;
