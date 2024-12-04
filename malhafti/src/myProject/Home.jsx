import { malhafti } from "../api/malhafti";
import Affichage from "./Affichage";
import BackToTopButton from "./BackToTopButton";
import Carousel from "./Carousel";

export default function Home() {
    return (
      <div className="container" id="content">
        <Carousel />
        {malhafti.malhafti.map((element, i) => {
          return (
            <Affichage malhafti={element} key={i} />
          );
        })}
        <BackToTopButton />
      </div>
    );
  }