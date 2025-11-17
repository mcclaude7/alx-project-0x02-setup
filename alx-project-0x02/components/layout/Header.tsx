import React from "react";

const Header: React.FC = () => {
    return(
        <div className="bg-white shadow-md h-screen">
            <div className="flex justify-between items-center max-w-7xl mx-auto p-4">
                <div className="font-bold text-2xl text-indigo-600">SiteDash</div>
                <nav aria-label="main navigation">
                    <ul className="flex justify-between gap-6">
                        <li><a href="" className="font-medium hover:text-indigo-600 hover:font-bold">Profiles</a></li>
                        <li><a href="" className="font-medium hover:text-indigo-600 hover:font-bold">Settings</a></li>
                        <li><a href="" className="font-medium hover:text-indigo-600 hover:font-bold">Logout</a></li>
                    </ul>
                </nav>
            </div>
        </div>
        // <div className="bg-gray-200 shadow-md">
        //     <div className="flex justify-between items-center max-w-7xl mx-auto p-4">
        //         <div className="text-3xl text-bold">SiteLogo</div>
        //         <div className="grid grid-row">
        //             <div>
        //                 <input type="text" placeholder="Search"/>
        //             </div>
        //             <nav className="navigation">
        //                 <ul className="flex justify-between gap-6">
        //                     <li><a href="">Home</a></li>
        //                     <li><a href="">About</a></li>
        //                     <li><a href="">Contact</a></li>
        //                 </ul>
        //             </nav>
                    
        //         </div>
        //     </div>
        // </div>

    );
    
};

export default Header;