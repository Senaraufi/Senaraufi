export const education = {
  major: "Cybersecurity",
  courses: [
    {
      name: "Networking & Security",
      subjects: [
        "Networking Basics",
        "Routers and Routing",
        "LAN Switching and Wireless",
        "Network Security Fundamentals"
      ]
    },
    {
      name: "Programming & Development",
      subjects: [
        "Fundamentals of Programming 1 & 2 (Java)",
        "GUI Programming (Java)",
        "Object Oriented Design and Analysis",
        "Web Development Fundamentals",
        "Web Development Client-side",
        "Interactive Multimedia (Unity)"
      ]
    },
    {
      name: "Computer Science Core",
      subjects: [
        "Algorithmic Problem Solving",
        "Computer Systems",
        "Computer Architecture",
        "Database Fundamentals",
        "Mathematics for Computing"
      ]
    }
  ]
};

export const skills = [
  {
    category: "Programming Languages",
    technologies: ["Java", "C#", "SQL", "HTML/CSS", "JavaScript"]
  },
  {
    category: "Networking",
    technologies: ["TCP/IP", "LAN/WAN", "Routing Protocols", "Network Security"]
  },
  {
    category: "Security",
    technologies: ["Network Security", "System Architecture", "Security Fundamentals"]
  },
  {
    category: "Tools & Platforms",
    technologies: ["Unity", "Git", "Visual Studio", "Eclipse"]
  },
  {
    category: "Databases",
    technologies: ["SQL", "Database Design", "Data Modeling"]
  }
];

export const projects = [
  {
    id: 1,
    title: "Network Security Analysis Tool",
    description: "A Java-based application for analyzing network traffic and identifying potential security threats.",
    tech: ["Java", "Networking", "Security"],
    github: "https://github.com/Senaraufi/network-security-tool",
    type: "Academic"
  },
  {
    id: 2,
    title: "Interactive 3D Security Simulation",
    description: "Unity-based simulation demonstrating common security vulnerabilities and protection measures.",
    tech: ["Unity", "C#", "3D Modeling"],
    github: "https://github.com/Senaraufi/security-simulation",
    type: "Academic"
  },
  {
    id: 3,
    title: "Secure Database Management System",
    description: "A Java application implementing secure database operations with encryption and access control.",
    tech: ["Java", "SQL", "Security"],
    github: "https://github.com/Senaraufi/secure-dbms",
    type: "Academic"
  }
];
