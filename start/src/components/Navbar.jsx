import img1 from "../assets/img1.jpeg";
import { ChefHat,Search,Handbag } from 'lucide-react';
import "@fontsource/knewave";

const Navbar = () => {
  return (
    <>
    <h1 className="bg-black text-white p-4 h-20 flex justify-between">
              <div className=" mx-3 w-1/8 m-1 flex justify-items-center">
                <ChefHat size={42} className="mx-5" />
                <h1
      style={{
        fontFamily: "'Knewave', cursive",
        fontSize: "25px",
        color: "#fff",
        margin: 0,
      }}
    >
      YumCo
    </h1>
              </div>
              <div className=" w-3/8 flex justify-around justify-items-center mt-2">
                <h2>HOME</h2>
                <h2>SERVICES</h2>
                <h2>CAMPIAGNS</h2>
                <h2>MENU</h2>
                <h2>ORDER</h2>
                <Search color="#fff" size={32} />
              </div>
              <div className=" w-1/8 m-1 flex justify-around justify-items-center">
                <Handbag size={32} color="#fff" strokeWidth={1.25} />
                <button className="bg-red-500 pt-2 pb-2 px-3 py-4 rounded ">LOGIN</button>
              </div>
    </h1>
   
    </>
  )
}

export default Navbar
