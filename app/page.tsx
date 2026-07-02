import Blogs from "./components/Blogs";
import Category from "./components/Category";
import FeaturedPost from "./components/FeaturedPost";
import HomeBanner from "./components/HomeBanner";
import PopularPosts from "./components/PopularPosts";
import QuoteBanner from "./components/QuoteBanner";
import VisualDiary from "./components/VisualDiary";

export default function Home() {
  return (
    <div className="">
      <HomeBanner />
      <Blogs />
      <Category />
      <FeaturedPost />
      <PopularPosts />
      <QuoteBanner />
      <VisualDiary />
      
    </div>
  );
}
