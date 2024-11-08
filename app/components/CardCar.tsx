import { FcLike } from "react-icons/fc";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { RiSteering2Fill } from "react-icons/ri";
import { IoPeople } from "react-icons/io5";
import Image from "next/image";

const CardCar = ({CarName, typeCar, pumpFill, steeringType, soldBy, cost}: {CarName: string, typeCar: string, pumpFill: string, steeringType: string, soldBy: string, cost: {price: number}}) => {
    return(
        <div className="flex flex-col bg-white p-6 rounded-lg">
            <div className="flex justify-between">
                <h2>{CarName}</h2>
                <FcLike />
            </div>
            <p>{typeCar}</p>
            <Image 
                width={125} 
                height={45} 
                src={`/Images/${CarName}.png`}
                alt="car"
            />
            <div className="flex justify-between">
                <div>
                    <BsFillFuelPumpFill />
                    <p>{pumpFill}</p>
                </div>
                <div>
                    <RiSteering2Fill />
                    <p>{steeringType}</p>
                </div>
                <div>
                    <IoPeople />
                    <p>{soldBy}</p>
                </div>
            </div>
            <div className="flex justify-between">
                <p>{cost.price.toLocaleString('id-ID', {style: 'currency', currency: 'USD'})}</p>
                <button>
                    Rental Now
                </button>
            </div>
        </div>
    )
}

export default CardCar;