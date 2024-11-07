import Image from "next/image";
import { IoSearchSharp } from "react-icons/io5";
import { VscSettings } from "react-icons/vsc";

const Navbar = () => {
    return (
        <>
            <nav className="w-full bg-transparent pt-6 container mx-auto gap-y-5">
                <div className="flex justify-between px-8 md:px-0 items-start lg:items-center">
                    <div className="flex flex-col lg:flex-row justify-start items-start lg:items-center gap-5 md:w-1/3">
                        <h1 className="font-bold text-primaryColor text-2xl">MJRENT</h1>
                        <div className="flex justify-between container mx-auto items-center gap-x-2 w-full">
                            <div className="relative">
                                <IoSearchSharp className="text-2xl text-secondColor absolute top-3 left-3" />
                                <input 
                                    className="border border-gray-300 text-md pl-12 py-2 rounded-xl w-full focus:outline-blue-300"
                                    placeholder="Search"
                                    type="text"
                                />
                            </div>
                            <div className="flex border border-gray-300 py-3 rounded-xl w-1/6 justify-center">
                                <VscSettings className="text-xl"/>
                            </div>
                        </div>
                    </div>
                    <Image width={38} height={38} src="/Images/profil.png" alt="logo"></Image>
                </div>
            </nav>
        </>
    )
};

export default Navbar;