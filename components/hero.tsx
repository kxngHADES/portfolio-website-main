import React from 'react'
import styles from './hero.module.css'
import { FaMapMarkerAlt, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'
import { BsFileEarmarkText } from 'react-icons/bs'
import { FaXTwitter } from 'react-icons/fa6'
import { ContainerTextFlip } from './ui/container-text-flip'
import { Boxes } from './ui/background-boxes'
import { cn } from "@/utils/cn";
import { relative } from 'path'



const Hero = () => {

    const words = ["Software Engineer", "SOC analyst", "Network engineer", "Project Coordinator", "Data Scientist"]

  return (
    <div className={styles.container}>
        <h1 className={cn(styles.name, "relative z-20")}>
          Ndaedzo Mudau
        </h1>
        <ContainerTextFlip words={words} interval={2000} className={cn(styles.career, "relative z-20")} />
        <p className={cn(styles.location, "relative z-20")}>
          <FaMapMarkerAlt/> Centurion, Gauteng, South Africa
        </p>
        <div className={cn(styles.socials, "relative z-20")}>
            <a href="/CV.pdf" download target="_blank" rel="noopener noreferrer" className={cn(styles.socialBtn, styles.resumeBtn)}>
                <BsFileEarmarkText style={{marginRight: 6}} />
                Resume
            </a>
            <a href="https://www.linkedin.com/in/rudzani-mudau/" target="_blank" rel="noopener noreferrer" className={styles.socialBtn}>
                <FaLinkedin />
            </a>
            <a href="https://github.com/kxngHADES" target="_blank" rel="noopener noreferrer" className={styles.socialBtn}>
                <FaGithub />
            </a>
            <a href="https://www.instagram.com/sanctified.rudzi/" target="_blank" rel="noopener noreferrer" className={styles.socialBtn}>
                <FaInstagram />
            </a>
            <a href="https://x.com/ProjectMudau" target="_blank" rel="noopener noreferrer" className={styles.socialBtn}>
                <FaXTwitter />
            </a>
        </div>
        
    </div>
  )
}

export default Hero