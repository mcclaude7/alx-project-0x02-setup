import Header from "@/components/layout/Header";

const HomePage: React.FC = () =>{
    return(
        <>
            <Header/>
            <div className="flex bg-gray-400 mt-5">
                <h1 className="text-2xl font-bold text-white p-5">This is a Home page</h1>
            </div>
        </>

    );
};

export default HomePage;