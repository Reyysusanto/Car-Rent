import Image from "next/image";

const Card = ({title, subtext, backgroundCard, buttonCard, imageCard}: {title: string, subtext: string, backgroundCard: string, buttonCard: string, imageCard: string}) => {
    return (
        <div className={`${backgroundCard} flex items-start p-4 flex-col rounded-2xl gap-y-3 relative w-full`}>
            <Image className="absolute right-16" width={500} height={300} src="/Images/BG.png" alt="BG"></Image>
            <h2 className="text-lg text-white font-semibold">{title}</h2>
            <p className="text-white text-sm font-normal">{subtext}</p>
            <button className={`${buttonCard} text-white py-2 px-4 z-10 text-sm rounded-md`}>Rental Car</button>
            <Image className="mx-auto object-contain" width={150} height={50} src={`${imageCard}`} alt="carCard"></Image>
        </div>
    )
}

export default Card;