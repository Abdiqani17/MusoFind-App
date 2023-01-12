import styles from "/styles/about.module.css"

const about = () => (

    <div className={styles.container}>
      <h1 className={styles.aboutus}>MusoFind's Vision</h1>
      <p className={styles.brief}>Specializing in connecting musicians from all around the country by providing an easy-to-use platform for posting and searching gigs, fostering a vibrant and dynamic music scene.</p>
      <img className={styles.aboutimgs} width="75vh" src={`images/about/guitarist.jpg`} alt="imagehere"></img>
      <img className={styles.aboutimgs} width="75vh" src={`images/about/pop.jpg`} alt="imagehere"></img>
      <img className={styles.aboutimgs} width="75vh" src={`images/about/rock.jpg`} alt="imagehere"></img>
      <p className={styles.info}> We understand the importance of having a platform where musicians can easily post gigs and find qualified individuals to play with them. Our platform allows musicians to create profiles, post information about their skills and experience, and browse through a wide variety of gigs posted by other musicians. This makes it easy for musicians to find the perfect opportunity whether it be a small local gig or a large concert venue.</p>
      <p className= {styles.info}>We believe that by connecting musicians from all around the country, we are helping to create a vibrant and dynamic music scene. We strive to make it easy for musicians of all levels, whether they are just starting out or are experienced professionals, to find opportunities to play, grow, and connect with other musicians.</p> 
      <p className= {styles.info}>  Our platform also includes tools to help musicians find bandmates, collaborate on music and share resources. By joining us now, musicians can start connecting with fellow musicians and finding gigs that aligns with their skills, passion and schedule.</p>
    </div>
  )
  
  export default about
