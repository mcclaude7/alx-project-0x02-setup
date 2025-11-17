import Header from "@/components/layout/Header";
import Card from "@/components/common/Card";
const HomePage: React.FC = () =>{
    return(
        <>
            <Header/>
            <div className="flex bg-gray-400 mt-5">
                <h1 className="text-2xl font-bold text-white p-5">This is a Home page</h1>
            </div>
                    
            <div className="flex flex-rows-3 gap-4">
                <div className="mb-2">
                    <Card
                       title='Welcome to Alx'
                       content="This is a sample card showing how components work."
                     />
                    <Card
                       title='another example'
                       content="Components make your UI modular and reusable."
                     />
                    <Card
                       title='Second Card'
                       content="You can reuse the Card component with different content."
                     />
                </div>
            </div>
        </>

    );
};

export default HomePage;