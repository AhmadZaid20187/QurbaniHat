import Image from "next/image";
import Banner from "./Component/Banner";
import TopLivestock from "./Component/TopLivestock";

export default function Home() {
  return (
    <div>
      <Banner />
      <TopLivestock />
    </div>
  );
}
