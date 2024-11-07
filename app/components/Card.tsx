import Image from "next/image";

const Card = ({title, subtext}: {title: string, subtext: string}) => {
    return (
        <div className="bg-backgroundCardColor flex items-start p-4 flex-col rounded-2xl gap-y-3 relative w-full">
            <Image className="absolute right-16" width={500} height={300} src="/Images/BG.png" alt="BG"></Image>
            <h2 className="text-sm text-white font-semibold">{title}</h2>
            <p className="text-white text-xs font-normal">{subtext}</p>
            <button className="bg-primaryColor text-white py-2 px-4 z-10 text-sm rounded-md">Rental Car</button>
            <Image className="mx-auto" width={150} height={50} src="/Images/koenigsegg.png" alt="Koenigsegg"></Image>
        </div>
    )
}

export default Card;