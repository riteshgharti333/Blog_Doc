import Blogs from "./components/Blogs";
import Category from "./components/Category";
import HomeBanner from "./components/HomeBanner";

export default function Home() {
  return (
    <div className="">
      <HomeBanner />
      <Blogs />
      <Category />
      
    </div>
  );
}
