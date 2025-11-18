import React from "react";
import Header from "@/components/layout/Header";
import Button from "@/components/common/Button";
const About: React.FC = () =>{
    return(
        <>
            <Header/>
            <div className="flex bg-gray-200 p-3 mt-5 justify-center m-2">
                <h1 className="text-2xl font-bold text-white p-5">This is an about page</h1>
            </div>
            <div className="grid grid-cols-3 m-2 gap-4">
                <Button label="Small Button" size="small" shape="rounded-sm" />
                <Button label="Big Round Button" size="large" shape="rounded-full" />
                <Button label="Click Me" size="medium" shape="rounded-md" onclick={() => alert("Clicked!")}/>

            </div>
        </>

    );
};

export default About;