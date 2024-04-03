import React, { useState } from 'react';
import Link from '../Link/Link';
import { Bars3Icon,XMarkIcon } from '@heroicons/react/24/solid'
const NavBar = () => {
    const[open,setOpen]=useState(false)
    const routes=[
        {id:1,name:'home',path:'/home'},
        {id:2,name:'about',path:'/about'},
        {id:3,name:'contact',path:'/contact'},
        {id:4,name:'sales',path:'/sales'},
        {id:5,name:'order',path:'/order'},
    ]
    
    return (
        <nav className='bg-purple-200 w-full'>


            <div  onClick={()=>setOpen(!open)} className="h-6 w-6 text-blue-500">
           {
            open? <XMarkIcon/>: < Bars3Icon/>
            
           }
            </div>
            {/* <span>{open?"open":'close'}</span> */}
            <ul className={`md:flex justify-center  absolute md:static duration-500 ease-in ${open?"top-4":"top[-120]"}`}>
                {
                    routes.map(route=><Link key={route.id} route={route}></Link>)
                }
               </ul>
        </nav>
    );
};

export default NavBar;