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

// import { malhafti } from "../api/malhafti"; // Import your local data
// import Affichage from "./Affichage";
// import pic1 from '../assets/images/slider/pic1.jpg'; // Import the images directly
// import pic2 from '../assets/images/slider/pic2.jpg';
// import pic3 from '../assets/images/slider/pic3.jpg';
// import pic4 from '../assets/images/slider/pic4.jpg';
// import Productslider from "./slider";

// export default function Home() {
//   console.log('Rendering Home component'); // Check if the component is being re-rendered unexpectedly

//   return (
//     <div className="container" id="content">
//       {malhafti.malhafti.map((element, i) => (
//         <div key={i}>
//           <Productslider images={[pic1, pic2, pic3, pic4]} />
//           <Affichage malhafti={element} />
//         </div>
//       ))}
//     </div>
//   );
// }
