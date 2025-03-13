import { useState } from "react";
import Link from "../link/Link";
import { AiOutlineMenu,AiOutlineClose  } from 'react-icons/ai';

const Navbar = () => {
    const [open, setOpen] =useState(false);
   
     const routes = [
        { path: '/', name: 'Home', id: 1 },
        { path: '/about', name: 'About', id: 2 },
        { path: '/services', name: 'Services', id: 3 },
        { path: '/contact', name: 'Contact', id: 4 },
        { path: '/blog', name: 'Blog', id: 5 }
      ];
      
    return (
        <nav className="p-2">
            <div className="text-2xl md:hidden bg-green-200 p-2 px-4" onClick={() => setOpen(!open)}>
                {/* {
                  open === true ?<AiOutlineClose></AiOutlineClose>:<AiOutlineMenu ></AiOutlineMenu>
                } */}
                 {
                  open === true ?<AiOutlineClose></AiOutlineClose>:<AiOutlineMenu ></AiOutlineMenu>
                }
            
            </div>

            {/* ${open?'':'hidden'} */}
            <ul className={`md:flex absolute md:static
            bg-amber-600 duration-1000 p-2 pt-1  ${open?'top-80':'-top-60'}`}>
               
            
            {/* {
                routes.map(route => <li className="mr-20" key={route.id}>
                <a href={route.path}>{route.name}</a></li>)
            } */}

            {
                routes.map(route => <Link key={route.id} route={route}></Link>)
            }
           

           
            </ul>
        </nav>
    );
};

export default Navbar;