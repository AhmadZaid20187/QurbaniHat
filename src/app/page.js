import 'animate.css';
import Banner from "./Component/Banner";
import TopLivestock from "./Component/TopLivestock";
import FeaturedAnimals from "./Component/FeaturedAnimals";
import QurbanihatTips from "./Component/QurbanihatTips";

export default function Home() {
  return (
    <div>
      <Banner />
      <FeaturedAnimals />
      <QurbanihatTips />
      <TopLivestock />
    </div>
  );
}
