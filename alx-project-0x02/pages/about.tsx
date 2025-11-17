import React from "react";
import Header from "@/components/layout/Header";

const About: React.FC = () =>{
    return(
        <>
            <Header/>
            <div className="flex bg-gray-400 mt-5">
                <h1 className="text-2xl font-bold text-white p-5">This is an about page</h1>
            </div>
        </>

    );
};

export default About;