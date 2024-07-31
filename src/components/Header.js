import React, { useState } from "react";
import SignoutAccordion from "./SignoutAccordion";
import { useSelector } from "react-redux";

const Header = () => {
  const [display, setDisplay] = useState(false);
  const user = useSelector((store) => store.user)

  const toggleDisplay = () => {
    setDisplay(!display);
  };
  return (
    <>
      <div className="flex justify-between relative px-10, py-2 bg-gradient-to-b from-black z-30">
        <div className="mx-8">
          <img
            className=" w-32 "
            src="https://i.imghippo.com/files/jcV8X1722025827.png"
            alt="logo"
          />
        </div>  

        {user &&(
          <div onClick={toggleDisplay} className="mx-16 my-2 p-2 flex  relative">
          <img className="mx-1"
            src="https://occ-0-3752-3647.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"
            alt="user-icon"
          />

          <img
            className="w-4 h-4 m-1"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEkNYoRmhwKGf56zIAFJF9vgJb7_DEDsbjbQ&s"
            alt="dr"
          />
        </div>
        )}

      </div>

      {display && <SignoutAccordion />}
    </>
  );
};

export default Header;
