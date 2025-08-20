import React from 'react'
import styles from './workxp.module.css'
import { cn } from '@/utils/cn'
import { HoverEffect } from './ui/card-hover-effect'

export const runtime = "edge"

const Work_xp = () => {

  return (
    <div className={cn(styles.container, "relative z-20 w-full px-4")}>
        <h1 className={cn(styles.heading, "relative z-20 text-center text-2xl md:text-3xl lg:text-4xl mb-6")}>Work Experience</h1>
        <div className="relative z-20 w-full">
          <HoverEffect items={projects} className="relative z-20 w-full max-w-5xl mx-auto"/>
        </div>
    </div>
  )
}

export const projects = [
    {
            title: "",
            roles: "Full Stack Developer",
            description: "Made websites and web applications for local business as well as helped in the process of modernising management like inventory, keeping track of customer purchases at resturants, and helping manage the servers for these companies"
        },
        {
            title: "Lynxio Tech",
            roles: "Junior Software Engineer (Part-time)",
            description: "Worked as a part time Jnr Software Engineer working for them under them i was sent to work at Plantify tech a subsidary of Lynxio. At Lynxio i built front end websites with direction from the design team basically my job was to make visions come to life"
        },
        {
            title: "Plantify",
            roles: "Backend Developer / API Developer",
            description: "At Plantify i worked in FinTech focusing on backend and API devlopment i did also dive into front end during the MVP and in the website creation"
        },
        {
          title: "ASG Studios",
          roles: "Network Engineer",
          description: "I worked as a network engineer at ASG Studios, I did the planning on how to modify peoples home networks, after designing and speaking to owners I would connect everything and testing to make sure what was being done fully works, from extending ethernet cables across the house discreetly to setting up servers for people and small businesses in the area."
        },
];

export default Work_xp