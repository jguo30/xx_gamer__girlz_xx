import Link from "next/link";
import { AiFillCompass } from "react-icons/ai";
import { FiPlus } from "react-icons/fi";
import { cookies } from "next/headers";

export default function Sidebar() {
    const removeCookies = () => {
        cookies().set(
            {
                name: 'AuthToken',
                value: '',
                path: '/'
            });
    };
    return (
        <>
            <div className="hidden sm:flex bg-[#1E1F22] w-[6rem] shrink-0 h-screen sticky top-0 pt-6 overflow-y-scroll scrollbar-hide">
                <div className="flex flex-col items-center w-full space-y-4">
                    <div
                        className="bg-[#36393f] p-1 rounded-[1.3rem] cursor-pointer" //onClick= { removeCookies }
                    >
                        <Link href="/">
                            <img
                                src="/yinyang.svg"
                                className="w-12 h-12 rounded-full text-white brightness-[80%]"// onClick= { removeCookies }
                            />
                        </Link>
                    </div>{" "}
                    <div
                        className="bg-[#5C73F2] p-3 rounded-[1.3rem] cursor-pointer" //onClick= { removeCookies }
                    >
                        <AiFillCompass className="w-8 h-8 rounded-full text-white" />
                    </div>
                    <Link href="/">
                        <div
                            className="bg-[#36393f] p-4 rounded-full" //onClick= { removeCookies }
                        >
                            <FiPlus className="w-6 h-6 rounded-full text-green-700 cursor-pointer" />
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}
