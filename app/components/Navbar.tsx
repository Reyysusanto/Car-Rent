import Image from "next/image";
import { IoSearchSharp } from "react-icons/io5";
import { VscSettings } from "react-icons/vsc";

const Navbar = () => {
    return (
        <>
            <div className="flex justify-between pt-6 container mx-auto px-8 items-center">
                <h1 className="font-bold text-primaryColor text-2xl">MJRENT</h1>
                <Image width={45} height={45} src="/Images/profil.png" alt="logo"></Image>
            </div>
            <div className="flex justify-between pt-5 container mx-auto px-6 items-center gap-x-2 w-full">
                <div className="relative w-5/6">
                    <IoSearchSharp className="text-2xl text-secondColor absolute top-3 left-3" />
                    <input 
                        className="border border-gray-300 text-lg pl-12 py-2 rounded-xl w-full focus:outline-blue-300"
                        placeholder="Search"
                        type="text"
                    />
                </div>
                <div className="flex border border-gray-300 py-3 rounded-xl w-1/6 justify-center">
                    <VscSettings className="text-xl"/>
                </div>
            </div>
        </>
    )
};

export default Navbar;