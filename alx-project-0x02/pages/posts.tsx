import React, { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import { PostProps } from "@/interfaces";

const PostPage: React.FC =()=>{
    const [posts, setPosts] = useState<PostProps[]>([]);

    useEffect(() =>{
        const fetchPosts = async () => {
            const res = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await res.json();

            const formattedPosts = data.map((post: any) => ({
                title: post.title,
                content: post.body,
                userId: post.userId,
            }));

            setPosts(formattedPosts);
        };

        fetchPosts();
    }, []);
    return(
        <>
            <Header/>
            <div className="p-6 space-y-4">
                <h1 className="text-3xl font-bold mb-4 text-center">Posts</h1>
                <div className="grid grid-cols-3 md:grid-cols-2 gap-4">
                    {posts.map((post, index) => (
                        <PostCard
                          key={index}
                          title={post.title}
                          content={post.content}
                          userId={post.userId}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};
export default PostPage;