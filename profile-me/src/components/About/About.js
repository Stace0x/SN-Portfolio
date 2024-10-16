import styles from './About.module.css';

export default function About () {

  return (
    <section id="about" className={styles.about}>
      <div className={styles.aboutBox}>
        <h2 className={styles.slide_in_left}>About Me</h2>
        <p className={styles.slide_in_right}>
          With a solid background in project management from the construction industry, I have transitioned into the tech world, focusing on back-end development and data engineering. 
          My career journey began with a degree in Architectural Technology from Coventry University, followed by a hands-on experience in construction, where I developed a keen eye for detail and honed my problem-solving skills. This foundation has been invaluable as I pivoted into tech, specifically data engineering and back-end development.
          I recently completed a Full-Stack Development Bootcamp at the School of Code, which equipped me with practical knowledge in both front-end and back-end technologies, as well as a deep interest in data management. I am passionate about building scalable systems and ensuring data integrity to drive data-driven solutions. My experience includes creating REST APIs, managing SQL databases, and working with technologies like MongoDB and Supabase.
          When I am not coding, I enjoy roller skating, specialty cake baking, and sewing. I am always excited to learn new things and take on challenges, both in tech and in my hobbies
        </p>
      </div>
     
  </section>

  );
}