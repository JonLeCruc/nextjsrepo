import styles from "./singePost.module.css"
import Image from "next/image";

const SingePostPage = () => {
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
          <h1 className={styles.title}>Title</h1>
          <div className={styles.detail}>
            <Image className={styles.avatar}
            src="https://images.pexels.com/photos/23549210/pexels-photo-23549210/free-photo-of-lys-hav-sort-hvid-landskab.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            width={50}
            height={50}
             />
             <div className={styles.detailText}>
              <span className={styles.detailTitle}>Author</span>
              <span className={styles.detailValue}>Jon Holm</span>
             </div>
             <div className={styles.detailText}>
              <span className={styles.detailTitle}>Published</span>
              <span className={styles.detailValue}>01.01.2024</span>
             </div>
          </div>
          <div className={styles.content}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero blanditiis adipisci minima reiciendis a autem assumenda dolore.
          </div>
        </div>
      </div>
    )
  }
  
  export default SingePostPage;