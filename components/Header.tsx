import Image from "next/image";
import { ChevronDownIcon, HomeIcon, MagnifyingGlassIcon, Bars3Icon } from "@heroicons/react/24/solid";
import { BellIcon, ChatBubbleLeftEllipsisIcon, GlobeAltIcon, PlusIcon, SparklesIcon, MegaphoneIcon, VideoCameraIcon } from "@heroicons/react/24/outline";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";


type Props = {}

function Header({}: Props) {
  const { data: session} = useSession();


  return (
    <div className="sticky top-0 z-50 flex items-center bg-white px-4 py-2 shadow-sm">
      
      <Link href="/" >
        <div className="flex items-center space-x-3">
          <div className="relative h-8 w-8 cursor-pointer flex-shrink-0">
            <Image src="../logo01.svg" alt="" fill style={{objectFit:"contain"}}/>
          </div>
          <div className="hidden sm:block relative h-8 w-14 cursor-pointer flex-shrink-0">
            <Image src="../logo.svg" alt="" fill style={{objectFit:"contain"}}/>
          </div>
        </div>
      </Link>

      <div className="flex items-center mx-3 sm:mx-7 xl:min-w-[200px]">
        <HomeIcon className="h-4 w-4"/>
        <p className="flex-1 ml-2 hidden lg:inline">Home</p>
        <ChevronDownIcon className="h-4 w-4"/>
      </div>

      {/* Search box */}
      <form
        className={`flex flex-1 items-center space-x-2 border border-gray-100 bg-gray-50 rounded-full px-3 py-1 my-0`}
      > 
        <MagnifyingGlassIcon className="h-5 w-5 text-gray-600" />
        <input
          className={`bg-transparent outline-none flex-1 text-gray-600 placeholder-gray-600`}
          type="text"
          placeholder="Search Reddit" 
        />
        <button type="submit" hidden></button>
      </form>

      <div className="hidden lg:inline-flex items-center text-gray-600 mx-5 space-x-1">
        <SparklesIcon  className="icon"/>
        <GlobeAltIcon  className="icon"/>
        <VideoCameraIcon  className="icon"/>
        {/* <hr className="h-8 border border-gray-100 " /> */}
        <ChatBubbleLeftEllipsisIcon  className="icon"/>
        <BellIcon  className="icon"/>
        <PlusIcon  className="icon"/>
        <MegaphoneIcon  className="icon"/>
      </div>
      <div className="mx-3 flex items-center lg:hidden text-gray-600">
        <Bars3Icon className="icon"/>
      </div>

      {/* Sign in/out btn */}
      { session ? (
        <div
          onClick={() => signOut()}
          className="hidden lg:flex items-center space-x-2 border border-gray-100 px-3 py-1 cursor-pointer"
        >
          <div className="relative h-5 w-5 flex-shrink-0">
            <Image src="../logo01.svg" fill alt="" style={{objectFit:"contain"}} />
          </div>
          
          <div className="flex-1 text-xs">
            <p className="truncate">{session?.user?.name}</p>
            <p className="text-gray-400">Sign Out</p>
          </div>
          
          <ChevronDownIcon className="h-4 flex-shrink-0 text-gray-400"/>
        </div>
      ): (
        <div
          onClick={() => signIn()}
          className="hidden lg:flex items-center space-x-2 border border-gray-100 px-3 py-2 cursor-pointer"
        >
          <div className="relative h-5 w-5 flex-shrink-0">
            <Image src="/logo01.svg" fill alt="" style={{objectFit:"contain"}} />
          </div>
          
          <p className="text-gray-500">Sign In</p>
        </div>
      )}


      
    </div>
  )
}

export default Header