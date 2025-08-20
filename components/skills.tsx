"use client";
import { useState } from 'react';
import styles from './skills.module.css';
import { 
  SiJavascript, 
  SiTypescript, 
  SiReact, 
  SiNextdotjs, 
  SiNodedotjs, 
  SiPython, 
  SiGit, 
  SiDocker, 
  SiMongodb, 
  SiCss3, 
  SiPostgresql, 
  SiAmazon,
  SiSqlite,
  SiCisco,
  SiVirtualbox,
  SiRazer,
  SiHtml5,
  SiVsco,
  SiAndroidauto,
  SiFirebase,
  SiLinux,
  SiCplusplus
} from 'react-icons/si';
import { DiJava } from 'react-icons/di';
import { Disc3 } from 'lucide-react';

interface Skill {
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert' | 'Familiar';
  category: 'frontend' | 'backend' | 'tools' | 'languages'| 'Platforms';
  icon?: React.ReactNode;
  libraries?: string[];
  description?: string;
}

const skills: Skill[] = [
  { 
    name: 'JavaScript', 
    level: 'Familiar', 
    category: 'languages', 
    icon: <SiJavascript />,
    libraries: ['ES6+', 'Async/Await', 'DOM API', 'Fetch API'],
    description: 'Modern JavaScript with latest features'
  },
  { 
    name: 'TypeScript', 
    level: 'Intermediate', 
    category: 'languages', 
    icon: <SiTypescript />,
    libraries: ['Types', 'Interfaces', 'Generics', 'Decorators'],
    description: 'Type-safe JavaScript development'
  },
  { 
    name: 'React', 
    level: 'Intermediate', 
    category: 'frontend', 
    icon: <SiReact />,
    libraries: ['Hooks', 'Context', 'Redux', 'React Query'],
    description: 'Component-based UI development'
  },
  { 
    name: 'Next.js', 
    level: 'Intermediate', 
    category: 'frontend', 
    icon: <SiNextdotjs />,
    libraries: ['App Router', 'SSR', 'API Routes', 'Middleware'],
    description: 'Full-stack React framework'
  },
  { 
    name: 'Node.js', 
    level: 'Beginner', 
    category: 'backend', 
    icon: <SiNodedotjs />,
    libraries: ['Express', 'Fastify', 'PM2', 'Cluster'],
    description: 'Server-side JavaScript runtime'
  },
  { 
    name: 'Python', 
    level: 'Advanced', 
    category: 'languages', 
    icon: <SiPython />,
    libraries: ['Django', 'FastAPI', 'Pandas', 'NumPy', 'Requests', 'Flask', 'Transformer', 'PyTorch', 'OpenCV', 'nltk'],
    description: 'Versatile programming language'
  },
  { 
    name: 'Git', 
    level: 'Intermediate', 
    category: 'tools', 
    icon: <SiGit />,
    libraries: ['GitHub', 'GitLab', 'Branching', 'Merging', "Git hub Actions"],
    description: 'Version control system'
  },
  { 
    name: 'Docker', 
    level: 'Beginner', 
    category: 'tools', 
    icon: <SiDocker />,
    libraries: ['Compose', 'Swarm', 'Registry', 'Volumes'],
    description: 'Containerization platform'
  },
  { 
    name: 'MongoDB', 
    level: 'Intermediate', 
    category: 'backend', 
    icon: <SiMongodb />,
    libraries: ['Mongoose', 'Aggregation', 'Atlas', 'Compass'],
    description: 'NoSQL document database'
  },
  { 
    name: 'CSS/Sass', 
    level: 'Intermediate', 
    category: 'frontend', 
    icon: <SiCss3 />,
    libraries: ['Flexbox', 'Grid', 'Animations', 'Variables'],
    description: 'Styling and layout technologies'
  },
  { 
    name: 'SQL', 
    level: 'Intermediate', 
    category: 'backend', 
    icon: "SQL",
    libraries: ['SELECT', 'UPDATE', 'DELETE', 'WHERE', 'JOIN', 'ORDER BY', 'GROUP BY'],
    description: 'Relational database system'
  },
  { 
    name: 'AWS', 
    level: 'Beginner', 
    category: 'tools', 
    icon: <SiAmazon />,
    libraries: ['EC2', 'S3', 'Lambda', 'RDS'],
    description: 'Cloud computing services'
  },
  {
    name: 'Cisco',
    level: 'Intermediate',
    category: 'tools',
    icon: <SiCisco/>,
    description: 'Network design and simulation application'
  },
  {
    name: 'Virtual Box',
    level: 'Advanced',
    category: 'tools',
    icon: <SiVirtualbox/>,
    description: 'A application to run virtual machines on a single device giving us the ability to run multiple other computers on a single PC andcan make them interact with each other or with the real world'
  },
  {
    name: 'ASP.NET',
    level: 'Intermediate',
    category: 'Platforms',
    description: 'A web framework/platform for building web apps',
    libraries: ['ORM', 'Razor', 'Bootstrap', 'Autofac']
  },
  {
    name: "HTML",
    icon: <SiHtml5/>,
    category: 'frontend',
    description: 'The mother and structure of every website',
    level: 'Advanced'
  },
  {
    name: 'Android Studio',
    level: 'Familiar',
    category: 'Platforms',
    description: 'The IDE we know and some of us love',
    icon: <SiAndroidauto/>
  },
  {
    name: 'Firebase',
    level: 'Intermediate',
    category: 'backend',
    description: 'Well it is IAAC but at the same time isnt its basically just a over complex database',
    icon: <SiFirebase/>
  },
  {
    name: 'linux',
    level: 'Familiar',
    category: 'Platforms',
    description: 'Yes i went down that rabit hole and use linux on my laptop as a primary OS i dont use very known linux i use deepin OS',
    icon: <SiLinux/>
  },
  {
    name: 'Java',
    level: 'Intermediate',
    category: 'languages',
    description: 'JAVA is JAVA nothing to explain honestly',
    icon: <DiJava/>
  },
  {
    name: 'C#',
    level: 'Intermediate',
    category: 'languages',
    description: 'WELL WELL WELL C# my second fav child after python',
    icon: "C#"
  },
  {
    name: 'C++',
    level: 'Beginner',
    category: 'languages',
    description: 'c++ used it for arduino and also in my first year',
    icon: <SiCplusplus/>
  },
  
];

const categoryColors = {
  frontend: '#61dafb',
  backend: '#68d391',
  tools: '#fbb6ce',
  languages: '#f6e05e',
  Platforms: '#a78bfa'
};

const levelColors = {
  'Beginner': '#fbbf24',
  'Intermediate': '#3b82f6',
  'Advanced': '#10b981',
  'Expert': '#8b5cf6',
  'Familiar': '#ef4444'
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  const filteredSkills = selectedCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

  const categories = ['all', 'frontend', 'backend', 'tools', 'languages', 'Platforms'];

  return (
    <section className={styles.skillsSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Skills & Technologies</h2>
        <p className={styles.hint}>Click on any skill planet to explore libraries and frameworks</p>
        
        <div className={styles.categoryFilter}>
          {categories.map((category) => (
            <button
              key={category}
              className={`${styles.categoryBtn} ${selectedCategory === category ? styles.active : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className={styles.skillsGalaxy}>
          <div className={styles.skillsOrbit}>
            {filteredSkills.map((skill, index) => (
              <div
                key={skill.name}
                className={`${styles.skillPlanet} ${selectedSkill?.name === skill.name ? styles.selected : ''}`}
                style={{
                  '--category-color': categoryColors[skill.category],
                  '--level-color': levelColors[skill.level],
                } as React.CSSProperties}
                onClick={() => setSelectedSkill(selectedSkill?.name === skill.name ? null : skill)}
              >
                <div className={styles.planetSphere}>
                  <div className={styles.planetSurface}>
                    <div className={styles.planetHighlight}></div>
                    <div className={styles.planetShadow}></div>
                  </div>
                  
                  <div className={styles.skillContent}>
                    <span className={styles.skillIcon}>{skill.icon}</span>
                    <div className={styles.skillInfo}>
                      <h3 className={styles.skillName}>{skill.name}</h3>
                      <span className={styles.skillLevel}>{skill.level}</span>
                    </div>
                  </div>
                </div>
                
                <div className={styles.orbitRing}></div>
                <div className={styles.planetGlow}></div>
              </div>
            ))}
          </div>
        </div>

        {selectedSkill && (
          <div className={styles.skillDetails}>
            <div className={styles.detailsCard}>
              <button 
                className={styles.closeBtn}
                onClick={() => setSelectedSkill(null)}
              >
                ✕
              </button>
              
              <div className={styles.detailsHeader}>
                <div className={styles.detailsPlanet}>
                  <span className={styles.detailsIcon}>{selectedSkill.icon}</span>
                </div>
                <div>
                  <h3 className={styles.detailsTitle}>{selectedSkill.name}</h3>
                  <span 
                    className={styles.detailsLevel}
                    style={{ color: levelColors[selectedSkill.level] }}
                  >
                    {selectedSkill.level}
                  </span>
                </div>
              </div>
              
              <p className={styles.detailsDescription}>{selectedSkill.description}</p>
              
              {selectedSkill.libraries && (
                <div className={styles.librariesSection}>
                  <h4 className={styles.librariesTitle}>
                    {selectedSkill.category === 'languages' ? 'Libraries & Frameworks' : 'Tools & Features'}
                  </h4>
                  <div className={styles.librariesList}>
                    {selectedSkill.libraries.map((library, index) => (
                      <span 
                        key={index}
                        className={styles.libraryTag}
                        style={{ 
                          '--tag-color': categoryColors[selectedSkill.category],
                          animationDelay: `${index * 0.1}s`
                        } as React.CSSProperties}
                      >
                        {library}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
