import { malhafti } from "../api/malhafti";
import Affichage from "./Affichage";
export default function Home() {
    return (
      <div className="container" id="content">
        {malhafti.malhafti.map((element, i) => {
          return (
            <Affichage malhafti={element} key={i} />
          );
        })}
      </div>
    );
  }