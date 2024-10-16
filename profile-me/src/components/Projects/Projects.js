import styles from './Projects.module.css';
import Image from 'next/image';

export default function Projects () {
  const cardData = [
    {
      project:"Foodie Friends",
      imgSrc:"/images/card-pic-1.png",
      dspt:"Meetup app that allow for local parents to sign up their children",
      href:"https://github.com/SchoolOfCode/final-project-final-destination"
    },
    {
      project:"Typescript Fundamentals",
      imgSrc:"/images/studying-image-v1.png",
      dspt:"How do we start writing Typescript",
      href:""
    },
  ];


  return (
    <section id="projects" className={styles.projects}>
      <h2 className={styles.slide_in_left}>My Highlights</h2>
      <div className={styles.project_grid}>
        {cardData.map((project, index) => (
          <div key={index} className={`${styles.project_card} ${styles.fade_in}`}>
            <Image 
              src={project.imgSrc} 
              alt={`Project ${project.project}`} 
              width={100} 
              height={200} 
            />
            <h3>{project.project}</h3>
            <p>{project.dspt}</p>
            {project.href && (
              <a href={project.href} className={styles.linkText} target="_blank" rel="noopener noreferrer">
                View on Github
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}