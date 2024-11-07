import Navbar from "./components/Navbar";
import Card from "./components/Card";
import PicknDrop from "./components/PicknDrop";

export default function Home() {
  return (
    <header className="bg-bgPrimaryColor">
      <Navbar />
      <div className="flex flex-col mx-8 mt-8 gap-y-7 pb-8">
        <Card 
          title="The Best Platform for Car Rental" 
          subtext="Ease of doing a car rental safely and reliably. Of course at a low price." 
        />
        <PicknDrop 
          title= "Pick-Up"
          location="surabaya"
          date= "12 August 2022"
          time= "10:00"
        />
        <PicknDrop 
          title= "Drop-Off"
          location="Semarang"
          date= "13 August 2022"
          time= "06.00"
        />
      </div>
    </header>
  );
}
