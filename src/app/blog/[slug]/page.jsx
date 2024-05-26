import styles from "./singePost.module.css"
import Image from "next/image";
import { Suspense } from "react";
import PostUser from "@/components/postUser/postUser";
import { getPost, getPosts } from "@/lib/data";

// const getData = async (slug) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);

//   /*if (!res.ok) {
//     throw new Error("Something went wrong");
//   }*/

//   return res.json();
// };


const SingePostPage = async ({ params }) => {
  const { slug } = params;

  // const post = await getData();
  const post = await getPost(slug);
    return (
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <Image 
          src="https://images.pexels.com/photos/23549210/pexels-photo-23549210/free-photo-of-lys-hav-sort-hvid-landskab.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          fill
          className={styles.image}
           />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{post.title}</h1>
          <div className={styles.detail}>
            <Image className={styles.avatar}
            src="https://images.pexels.com/photos/23549210/pexels-photo-23549210/free-photo-of-lys-hav-sort-hvid-landskab.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            width={50}
            height={50}
             />
             {post && <Suspense fallback={<div>Loading...</div>}>
              <PostUser userId = {post.userId}/>
             </Suspense>}
             <div className={styles.detailText}>
              <span className={styles.detailTitle}>Published</span>
              <span className={styles.detailValue}>01.01.2024</span>
             </div>
          </div>
          <div className={styles.content}>
            {post.body}
          </div>
        </div>
      </div>
    )
  }
  
  export default SingePostPage;