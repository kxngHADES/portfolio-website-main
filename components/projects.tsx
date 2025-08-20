'use client'
import React, { useState } from 'react'
import styles from './projects.module.css'
import { 
  FaReact, 
  FaNodeJs, 
  FaPython, 
  FaVuejs, 
  FaDatabase,
  FaFireAlt,
  FaMobile,
  FaChevronDown,
  FaChevronRight
} from 'react-icons/fa'
import { 
  SiMongodb, 
  SiStripe, 
  SiFastapi, 
  SiOpenai, 
  SiNextdotjs, 
  SiTypescript, 
  SiCss3, 
  SiReact, 
  SiFirebase, 
  SiRedux, 
  SiD3Dotjs, 
  SiPostgresql,
  SiSocketdotio,
  SiJavascript,
  SiHtml5,
  SiSpringboot,
  SiDotnet,
  SiBootstrap,
  SiSqlite,
  SiGoogle,
  SiJson,
  SiPython,
  SiCplusplus,
  SiDjango,
  SiNeo4J,
  SiCisco,
  SiXampp,
  SiCashapp,
  SiSupabase,
  SiAmazon,
  SiOracle
} from 'react-icons/si'

export const runtime = "edge"

const Projects = () => {
  const [openArcs, setOpenArcs] = useState<number[]>([]);

  const arcs = [
    {
      id: 1,
      title: "Arc 1: The Higher Certificate Arc",
      chapters: [
        {
          id: "1-1",
          title: "Chapter 1: School Projects",
          projects: [
            {
              id: 1,
              title: "FoodHarbor",
              description: "Web app using ASP.NET to make a application that stores recipes with functions like rating and profile/account management",
              image: "/project/foodharbor.jpg",
              technologies: [
                { name: "C#", icon: <SiDotnet /> },
                { name: "ASP.NET", icon: <SiDotnet /> },
                { name: "Bootstrap", icon: <SiBootstrap /> },
                { name: "SQL Server", icon: <FaDatabase /> }
              ],
              link: "https://github.com/kxngHADES/FoodHarbor",
              buttonText: "View Repository"
              
            },
            {
              id: 2,
              title: "Hangman Basic C#",
              description: "Basic C# game of hangman using arrays and loops nothing complicated",
              image: "/project/hangman.jpg",
              technologies: [
                { name: "C#", icon: <SiDotnet /> }
              ],
              link: "https://github.com/kxngHADES/Hangman",
              buttonText: "View Repository"
            },
            {
              id: 3,
              title: "BuyAlot",
              description: "Mobile shopping application built with Xamarin",
              image: "/project/buyalot.jpg",
              technologies: [
                { name: "C#", icon: <SiDotnet /> },
                { name: "Xamarin", icon: <FaMobile /> },
                { name: "SQLite", icon: <SiSqlite /> }
              ],
              link: "https://github.com/kxngHADES/BuyAlot",
              buttonText: "View Repository"
            }
          ]
        }
      ]
    },
    {
      id: 2,
      title: "Arc 2: I'm Lazy Arc (BSC year 1 Porjects)",
      chapters: [
        {
          id: "2-1",
          title: "Chapter 2: Personal Projects 2023-2024",
          projects: [
            {
              id: 4,
              title: "Gmail Read All",
              description: "Python script that will read all the emails, this was made because i had way too many emails and none were important so ye. It does have an exclude part so you can skip certain emails from the read all",
              image: "/project/GmailReadAll.jpg",
              technologies: [
                { name: "Python", icon: <FaPython /> },
                { name: "Google Auth", icon: <SiGoogle /> }
              ],
              link: "https://github.com/kxngHADES/Gmail-Read-all",
              buttonText: "View Repository"
            },
            {
              id: 5,
              title: "Web QR Code Generator",
              description: "Basic web app that can create QR codes for links and the QR code image can be downloaded",
              image: "/project/WebQr.png",
              technologies: [
                { name: "HTML5", icon: <SiHtml5 /> },
                { name: "CSS3", icon: <SiCss3 /> },
                { name: "JavaScript", icon: <SiJavascript /> }
              ],
              link: "https://webqrcode.vercel.app/",
              buttonText: "Visit"
            },
            {
              id: 6,
              title: "QR Code App",
              description: "Python script with an exe that lets users generate qr codes from links and can save the image of the QR code",
              image: "/project/qr-app.png",
              technologies: [
                { name: "Python", icon: <FaPython /> },
                { name: "Tkinter", icon: <FaPython /> },
                { name: "QRCode", icon: <SiPython /> }
              ],
              link: "https://github.com/kxngHADES/QR-app",
              buttonText: "View Repository"
            },
            {
              id: 7,
              title: "Finance Dashboard",
              description: "A web app that allow you to create a budget and manage it and the file with all the information entered can be downloaded and uploaded for reuse",
              image: "/project/financeDash.jpg",
              technologies: [
                { name: "HTML5", icon: <SiHtml5 /> },
                { name: "CSS3", icon: <SiCss3 /> },
                { name: "JavaScript", icon: <SiJavascript /> }
              ],
              link: "https://finance-budgetapp.vercel.app/",
              buttonText: "Visit"
            },
            {
              id: 8,
              title: "WebHangman (Incomplete)",
              description: "A Hangman game that can be played over the internet with friends. Reason for incomplete is that i still need to learn how servers work once understood it will be hosted with all features and functions",
              image: "/project/WebHangman.jpg",
              technologies: [
                { name: "HTML5", icon: <SiHtml5 /> },
                { name: "CSS3", icon: <SiCss3 /> },
                { name: "JavaScript", icon: <SiJavascript /> },
                { name: "JSON", icon: <SiJson /> }
              ],
              link: "https://github.com/kxngHADES/WebHangman",
              buttonText: "View Repository"
            },
            {
              id: 9,
              title: "File Size Checker",
              description: "A script to help look for files over a certain size, tbh i use it to help me find things to delete",
              image: "/project/FileChecker.jpg",
              technologies: [
                { name: "Python", icon: <FaPython /> }
              ],
              link: "https://github.com/kxngHADES/File-size-checkers",
              buttonText: "View Repository"
            },
            {
              id: 10,
              title: "Download File Organizer",
              description: "A script to place files in folders for ez of organization, even though its called Download file Organizer it can organize any given location not just download you just have to direct where it should go organize",
              image: "/project/FileManage.jpg",
              technologies: [
                { name: "Python", icon: <FaPython /> }
              ],
              link: "https://github.com/kxngHADES/Download-folder-organizer",
              buttonText: "View Repository"
            },
            {
              id: 11,
              title: "Password Manager",
              description: "Create, save, view passwords using cryptographers to encrypt and decrypt the password the purpose of this is to make stronger passwords aswell as make them easy to find and access",
              image: "/project/PassManager.jpg",
              technologies: [
                { name: "Python", icon: <FaPython /> },
                { name: "Cryptography", icon: <SiPython /> },
                { name: "Tkinter", icon: <FaPython /> }
              ],
              link: "https://github.com/kxngHADES/Password-Manager",
              buttonText: "View Repository"
            }
          ]
        }
      ]
    },
    {
      id: 3,
      title: "Arc 3: BSc Software Engineering",
      chapters: [
        {
          id: "3-1",
          title: "Chapter 1: First Year (C++ Projects)",
          projects: [
            
          ]
        },
        {
          id: "3-2",
          title: "Chapter 2: Second Year (Currently in Progress)",
          projects: [
            {
              id: 13,
              title: "To Be Updated",
              description: "CISCO network for enterprises, SARS tax script with GUI, Finance guide with GUI, Travel mobile app, Neo4j databases, MongoDB databases, Project Management database",
              image: undefined,
              technologies: [
                { name: "Python", icon: <FaPython /> },
                { name: "MongoDB", icon: <SiMongodb /> },
                { name: "Django", icon: <SiDjango /> },
                {name: "Neo4j", icon: <SiNeo4J /> },
                {name: "Cisco Packet tracer", icon: <SiCisco /> },
                {name: "Firebase", icon: <SiFirebase /> },
                {name: "Supabase", icon: <SiSupabase /> },
                {name: "AWS cloud", icon: <SiAmazon /> },
                {name: "Oracle cloud/ Oracle DB", icon: <SiOracle /> },
                {name: "SQLite", icon: <SiSqlite /> }
              ],
              link: "#",
              buttonText: "Coming Soon"
            }
          ]
        }
      ]
    }
  ];

  const toggleArc = (arcId: number) => {
    setOpenArcs(prev => 
      prev.includes(arcId) 
        ? prev.filter(id => id !== arcId)
        : [...prev, arcId]
    );
  };

  return (
    <section className={styles.projectsSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Projects😝🤏🏾</h2>
        
        {arcs.map((arc) => (
          <div key={arc.id} className={styles.arc}>
            <div 
              className={styles.arcHeader}
              onClick={() => toggleArc(arc.id)}
            >
              <h3 className={styles.arcTitle}>
                {openArcs.includes(arc.id) ? <FaChevronDown /> : <FaChevronRight />}
                {arc.title}
              </h3>
            </div>
            
            {openArcs.includes(arc.id) && (
              <div className={styles.arcContent}>
                {arc.chapters.map((chapter) => (
                  <div key={chapter.id} className={styles.chapter}>
                    <div className={styles.chapterHeader}>
                      <h4 className={styles.chapterTitle}>
                        {chapter.title}
                      </h4>
                    </div>
                    
                    <div className={styles.bentoGrid}>
                      {chapter.projects.map((project) => (
                        <div 
                          key={project.id} 
                          className={`${styles.projectCard} ${!project.image ? styles.textOnlyCard : ''}`}
                        >
                          {project.image && (
                            <div className={styles.imageContainer}>
                              <img 
                                src={project.image} 
                                alt={project.title}
                                className={styles.projectImage}
                              />
                              <div className={styles.overlay}>
                                <a href={project.link} className={styles.viewProject} target="_blank" rel="noopener noreferrer">
                                  {project.buttonText} &rarr;
                                </a>
                              </div>
                            </div>
                          )}
                          <div className={`${styles.projectContent} ${!project.image ? styles.fullHeightContent : ''}`}>
                            <h3 className={styles.projectTitle}>{project.title}</h3>
                            <p className={styles.projectDescription}>{project.description}</p>
                            <div className={styles.technologies}>
                              {project.technologies.map((tech, techIndex) => (
                                <div key={techIndex} className={styles.techIcon} data-name={tech.name}>
                                  <span className={styles.icon}>{tech.icon}</span>
                                  <span className={styles.techName}>{tech.name}</span>
                                </div>
                              ))}
                            </div>
                            {!project.image && (
                              <div className={styles.textOnlyActions}>
                                <a href={project.link} className={styles.textOnlyButton} target="_blank" rel="noopener noreferrer">
                                  {project.buttonText} &rarr;
                                </a>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects