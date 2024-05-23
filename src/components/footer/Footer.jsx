import styles from "./footer.module.css";

const Footer = () => {
    return (
    <div className={styles.container}>
      <div className={styles.logo}>
        JonLeCruc
      </div>
      <div className={styles.text}>
        JonLeCruc's project © All rights reserved.
      </div>
    </div>
    );
  };
  
  export default Footer;