// import React, { useEffect, useState } from "react";
// import Header from "@/components/layout/Header";
// import PostCard from "@/components/common/PostCard";
// import { PostProps } from "@/interfaces";

// const PostPage: React.FC =()=>{
//     const [posts, setPosts] = useState<PostProps[]>([]);

//     useEffect(() =>{
//         const fetchPosts = async () => {
//             const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//             const data = await res.json();

//             const formattedPosts = data.map((post: any) => ({
//                 title: post.title,
//                 content: post.body,
//                 userId: post.userId,
//             }));

//             setPosts(formattedPosts);
//         };

//         fetchPosts();
//     }, []);
//     return(
//         <>
//             <Header/>
//             <div className="p-6 space-y-4">
//                 <h1 className="text-3xl font-bold mb-4 items-center">Posts</h1>
//                 <div className="grid grid-cols-3 md:grid-cols-2 gap-4">
//                     {posts.map((post, index) => (
//                         <PostCard
//                           key={index}
//                           title={post.title}
//                           content={post.content}
//                           userId={post.userId}
//                         />
//                     ))}
//                 </div>
//             </div>
//         </>
//     );
// };
// export default PostPage;

import React from "react";
import { PostProps } from "../interfaces";
import PostCard from "../components/common/PostCard";

interface PostsPageProps {
  posts: PostProps[];
}

// PAGE COMPONENT
const PostsPage: React.FC<PostsPageProps> = ({ posts }) => {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold text-center mb-6">Posts</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
  );
};

export default PostsPage;

// STATIC DATA FETCHING
export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  const formattedPosts = data.map((post: any) => ({
    title: post.title,
    content: post.body,
    userId: post.userId,
  }));

  return {
    props: {
      posts: formattedPosts,
    },
  };
}
