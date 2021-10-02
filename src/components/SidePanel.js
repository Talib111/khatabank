import img1 from '../media/in2.png'
import { AiFillHome } from "react-icons/ai";
import { MdAttachMoney } from "react-icons/md";
import { AiFillAppstore } from "react-icons/ai";
const SidePanel = ()=>{

  console.log('SidePanel rendered')

    return(
        <>
        <div className="sideContainer">
            <div className="userImage"><img src={img1} alt="" /></div>
            <div className="navLinks">
                <ul>
                    <li>Home</li>
                    <li>Money</li>
                    <li>Privacy</li>
                    <li>Settings</li>
                </ul>
            </div>
        </div>
        <div className="bg-white sm:hidden flex w-full justify-center items-center h-16 fixed bottom-0 border-t-2">
            <div className="flex-1 flex flex-col justify-center items-center"><div className="menuIn"><AiFillHome size={20} color="#2563EB"/></div>
            <div className="menuIn">Home</div></div>
            <div className="flex-1 flex flex-col justify-center items-center"><div className="menuIn"><MdAttachMoney size={20} color="#2563EB"/></div>
            <div className="menuIn">Money</div></div>
            <div className="flex-1 flex flex-col justify-center items-center"><div className="menuIn"><AiFillAppstore size={20} color="#2563EB"/></div><div className="menuIn">More</div></div>
        </div>

        </>
    )
}
export default SidePanel