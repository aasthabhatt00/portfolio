import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Product Manager",
      icon: mobile,
    },
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Front-end developer",
      icon: backend,
    },
    {
      title: "UX designer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "git",
      icon: git,
    },
    {
  
      name: "HTML 5",
      icon: html,
    },
    {
      
      name: "web",
      icon: web,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
    
      name: "figma",
      icon: figma,
    },
    {
  
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
  
      name: "Node JS",
      icon: nodejs,
    },
  ];
  
  const experiences = [
    {
      title: "Product Manager",
      company_name: " CatSafe ",
      icon: mobile,
      iconBg: "#383E56",
      date: "August 2022 - Present",
      points: [
        
      ],
    },
    {
      title: "Web Developer",
      company_name: "CatSafe",
      icon: web,
      iconBg: "#E6DEDD",
      date: "August 2022 - Present",
      points: [
       
      ],
    },
    {
      title: "Front-end Developer",
      company_name: "CatSafe",
      icon: backend,
     iconBg: "#383E56",
      date: "August 2022 - Present",
      points: [
       
      ],
    },
    {
      title: "UX designer",
      company_name: "CatSafe",
      icon: creator,
      iconBg: "#E6DEDD",
      date: "August 2022 - Present",
      points: [
       
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I believed that creating a website as stunning as our product was unattainable, but Aastha proved me otherwise. Additionally, she proved to be an excellent product manager who skillfully led our team.",
      name: "Samyak Piya",
      designation: "Full-stack developer",
      company: "CatSafe",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I have had the pleasure of working with numerous web developers, but I have never come across one who is as genuinely invested in their clients' success as Aastha. She goes above and beyond to ensure that her clients are satisfied, and her dedication is truly admirable.",
      name: "Bishwas Bhatt",
      designation: "Software engineering intern",
      company: "Bastin Solutions",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "Aastha's website optimization efforts resulted in huge increase in our website traffic, and we cannot express our gratitude enough. Their work has had a significant impact on our online presence, and we are thrilled with the results.",
      name: "Jhonson Bokati",
      designation: "Tech Lead",
      company: "Bank of America",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "CatSafe",
      description:
        "Web-based mental health support platform for university of Kentucky Students.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Gearball Model",
      description:
        "Created and implemented data structures to represent a Gear ball, a more complex version of the traditional Rubik's Cube that is spherical.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Socket Server",
      description:
        "Built a Python Socket Server that can manage several incoming requests at once.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };