import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
    return(
        <div className="bg-gray-200 shadow-md m-2">
            <div className="flex justify-between items-center max-w-7xl mx-auto p-4">
                <div className="text-3xl text-bold">SiteLogo</div>
                <div className="grid grid-row">
                    <div>
                        <input type="text" placeholder="Search"/>
                    </div>
                    <nav className="navigation">
                        <ul className="flex justify-between gap-6">
                            <li><Link href="/home">Home</Link></li>
                            <li><Link href="/about">About</Link></li>
                            <li><Link href="">Contact</Link></li>
                        </ul>
                    </nav>      
                </div>
            </div>
        </div>
    );    
};

export default Header;