import { malhafti } from "../api/malhafti";
import Affichage from "./Affichage";
import BackToTopButton from "./BackToTopButton";
import Bodycards from "./bodycards";
import CardNavigate from "./Cardnavigate";
import Carousel from "./Carousel";

export default function Home() {
  return (
    <div className="container" id="content">
      
      <Carousel />
      
      <div className="row g-4 py-4">
        <div className="col-md-4">
          <CardNavigate categoryName="صيكان" />
        </div>
        <div className="col-md-4">
          <CardNavigate categoryName="ديار" />
        </div>
        <div className="col-md-4">
          <CardNavigate categoryName="الملحف" />
        </div>
        <div className="col-md-4">
          <CardNavigate categoryName="نعايل" />
        </div>
        <div className="col-md-4">
          <CardNavigate categoryName="الرمبي" />
        </div>
        <div className="col-md-4">
          <CardNavigate categoryName="بودي" />
        </div>
      </div>
      <Bodycards/>
      {/* {malhafti.malhafti.map((element, i) => {
        return (
          <Affichage malhafti={element} key={i} />
        );
      })} */}
      
      <BackToTopButton />
    </div>
  );
}
