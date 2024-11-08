import Navbar from "./components/Navbar";
import Card from "./components/Card";
import PicknDrop from "./components/PicknDrop";
import { RiArrowUpDownFill } from "react-icons/ri";

export default function Home() {
  return (
    <header className="bg-bgPrimaryColor">
      <Navbar />
      <div className="flex flex-col mx-8 mt-8 gap-y-7 pb-8">
        <div className="flex gap-x-8">
          <Card 
            bgImageCard="/Images/BG.png"
            backgroundCard="bg-backgroundCardColor md:flex-1"
            buttonCard="bg-primaryColor"
            title="The Best Platform for Car Rental" 
            imageCard="/Images/koenigsegg.png"
            subtext="Ease of doing a car rental safely and reliably. Of course at a low price." 
          />
          
          <div className="hidden md:block flex-1 overflow-hidden">
            <Card
              bgImageCard="/Images/BG2.png"
              backgroundCard="bg-primaryColor"
              buttonCard="bg-backgroundCardColor"
              title="The Best Platform for Car Rental"
              imageCard="/Images/nissan-gtr-silver.png"
              subtext="Ease of doing a car rental safely and reliably. Of course at a low price." 
              />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-5">
          <PicknDrop 
            title= "Pick-Up"
            location="surabaya"
            date= "12 August 2022"
            time= "10:00"
          />
          <RiArrowUpDownFill className="flex justify-center bg-primaryColor p-3 shadow-xl rounded-lg text-5xl text-white"/>
          <PicknDrop 
            title= "Drop-Off"
            location="Semarang"
            date= "13 August 2022"
            time= "06.00"
          />
        </div>
      </div>
    </header>
  );
}
