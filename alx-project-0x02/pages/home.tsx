import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
type Post = {
    title: string;
    content: string;
};
const HomePage: React.FC = () =>{
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [posts, setPosts] = useState<Post[]>([
        { title: "Welcome", content: "This is your first static post." },
        ]);
    const addPost = (title: string, content: string) => {
        setPosts((prev) => [...prev, { title, content }]);
           };

    return(
        <>
            <Header/>
            <div className="flex bg-gray-200 mt-5 justify-center m-2">
                <h1 className="text-2xl font-bold text-white p-5 text-center">This is a Home page</h1>
            </div>
                    
            <div className="grid grid-cols-3 m-2 gap-4">
                <div className="">
                    <Card
                       title='Welcome to Alx'
                       content="This is a sample card showing how components work."
                     />
                </div>
                <div className="">
                    <Card
                       title='another example'
                       content="Components make your UI modular and reusable."
                     />
                </div>
                <div className="">
                    <Card
                       title='Second Card'
                       content="You can reuse the Card component with different content."
                     />
                </div>
                <div className="">
                    <Card
                       title='Welcome to Alx'
                       content="This is a sample card showing how components work."
                     />
                </div>
                <div className="">
                    <Card
                       title='another example'
                       content="Components make your UI modular and reusable."
                     />
                </div>
                <div className="">
                    <Card
                       title='Second Card'
                       content="You can reuse the Card component with different content."
                     />
                </div>
            </div>
            <div className="p-8 space-y-6">
                <div className="flex gap-4">
                    <button onClick={() => setIsModalOpen(true)} className="rounded bg-green-600 px-4 py-2 text-white"> Add New Post</button>
                </div>
                <PostModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSubmit={addPost}/>
                    <div className="grid grid-cols-3 gap-4">
                        {posts.map((post, i) => (<Card key={i} title={post.title} content={post.content} />))}
                    </div>
            </div>
        </>

    );
};

export default HomePage;