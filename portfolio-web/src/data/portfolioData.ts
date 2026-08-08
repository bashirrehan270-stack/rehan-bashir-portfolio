// ===============================
// Portfolio Data
// Rehan Bashir
// ===============================

export interface ContactLink {
  label: string;
  href: string;
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string[];
  technologies: string[];
}

export interface Project {
  title: string;
  description: string;
  category: string;
  year: string;
  status: "Completed" | "In Progress";
  featured: boolean;
  technologies: string[];
  github: string;

  images: string;

  features: string[];
  challenges: string[];
  learned: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  type: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface PortfolioData {
  name: string;
  role: string;
  location: string;
  email: string;
  phone: string;

  hero: {
    headline: string;
    subHeadline: string;
    description: string;
  };

  about: string;

  contacts: ContactLink[];

  experience: Experience[];

  projects: Project[];

  certifications: Certification[];

  skills: SkillCategory[];
}

export const portfolioData: PortfolioData = {
  name: "Rehan Bashir",

  role: "Python Developer • AI Enthusiast • Software Engineering Student",

  location: "Islamabad, Pakistan",

  email: "bashirrehan270@gmail.com",

  phone: "+92 3411625538",

  hero: {
    headline: "Building Practical Python Applications That Solve Real Problems",

    subHeadline:
      "Python Developer • AI Enthusiast • Building Backend Application ",

    description:
      "I enjoy transforming ideas into clean, maintainable software. My focus is Python, backend development, object-oriented programming, AI applications, and continuously improving through real-world projects."
  },

  about:
    "Most people learn Python by following tutorials. I learn by building projects. I am currently pursuing a BS in Software Engineering and actively developing practical applications using Python, C++, AI tools, and modern software engineering practices. My goal is to become a professional Python Backend Developer capable of building scalable and reliable software.",

  contacts: [
    {
      label: "GitHub",
      href: "https://github.com/bashirrehan270-stack"
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/rehan-bashir-se"
    },
    {
      label: "Email",
      href: "mailto:bashirrehan270@gmail.com"
    }
  ],

  experience: [
    {
      company: "Decode Labs",

      role: "Python Programming Virtual Intern",

      duration: "Jul 2026 - Aug 2026",

      location: "Remote",

      description: [
        "Developed multiple Python applications during a one-month virtual internship.",
        "Applied object-oriented programming principles in practical projects.",
        "Built a terminal-based Expense Tracker using CSV storage.",
        "Developed a Password Generator with customizable security options.",
        "Created a terminal-based To-Do Management System.",
        "Strengthened debugging, testing, modular programming, and clean code practices."
      ],

      technologies: [
        "Python",
        "CSV",
        "OOP",
        "File Handling",
        "Git",
        "Debugging"
      ]
    }
  ],

  projects: [
    {
      title: "AI Multi-Agent Research Assistant",
      images: "./project/ai-multi-agent-assistant.png",
      description:
        "Developed a multi-agent AI workflow using LangChain, Google Gemini API, and DuckDuckGo Search. Implemented Researcher, Writer, and Reviewer agents to automate structured research.",
      category: "Artificial Intelligence",

      year: "2026",

      status: "Completed",

      technologies: [
        "Python",
        "LangChain",
        "Gemini API",
        "DuckDuckGo",
        "Prompt Engineering"
      ],

      github:
        "https://github.com/bashirrehan270-stack/ai-multi-agent-research-assistant",

      featured: true,
      features: [
         "Research agent",
         "Writer agent",
         "Reviewer agent",
         "Automated report generation"
       ],

       challenges: [
         "Coordinating multiple AI agents",
         "Prompt engineering",
         "API integration"
       ],

       learned: [
         "LangChain workflows",
         "Agent architecture",
         "Debugging LLM pipelines"
       ],
    },

    {
      title: "Expense Tracker",
      images: "./project/expense_tracker.png",
      description:
        "Terminal-based expense tracking application using Python and CSV storage with modular architecture for recording and managing financial transactions.",
      category: "Python Application",

      year: "2026",

      status: "Completed",

      technologies: [
        "Python",
        "CSV",
        "OOP",
        "File Handling"
      ],

      github:
        "https://github.com/bashirrehan270-stack/DecodeLabs-Internship",

      featured: true,
      features: [
        "Add new income and expense records",
        "Store transactions in CSV files",
        "View complete transaction history",
        "Organize financial records",
        "Modular Python architecture"
      ],

      challenges: [
        "Designing a reusable project structure",
        "Managing CSV file operations",
        "Handling invalid user input",
        "Keeping financial data organized"
      ],

      learned: [
        "CSV file handling",
        "Modular programming",
        "Python functions",
        "Code organization",
        "Debugging techniques"
      ],
    },

    {
      title: "Student Record Management System",

      images: "./project/student_record.png",

      description:
        "Python application supporting CRUD operations with CSV storage while applying object-oriented programming concepts and structured file management.",
          category: "Python Application",

      year: "2026",

      status: "Completed",

      technologies: [
        "Python",
        "CSV",
        "Object-Oriented Programming"
      ],

      github:
        "https://github.com/bashirrehan270-stack/-Student-Record-Management-System",

      featured: true,
      features: [
        "Add student records",
        "View student records",
        "Remove student records",
        "Store data in CSV files",
        "Object-oriented design"
      ],

      challenges: [
        "Implementing CRUD operations",
        "Maintaining data consistency",
        "Designing reusable classes",
        "Working with persistent storage"
      ],

      learned: [
        "Object-Oriented Programming",
        "CSV data management",
        "CRUD application design",
        "File handling",
        "Program structure"
      ],
    },

    {
      title: "Restaurant Billing System",

      images: "./project/resturant_billing.png",

      description:
        "Console-based billing application developed in C++. Supports billing, menu management, reusable classes, and order processing.",
      category: "C++ Application",

      year: "2025",

      status: "Completed",

      technologies: [
        "C++",
        "OOP",
        "Algorithms"
      ],

      github:
        "https://github.com/bashirrehan270-stack/Restaurant-Billing-System",

      featured: true,
      features: [
        "Restaurant menu management",
        "Order processing",
        "Automatic bill generation",
        "Console-based interface",
        "Reusable C++ classes"
      ],

      challenges: [
        "Managing billing calculations",
        "Designing menu structures",
        "Applying object-oriented concepts",
        "Improving code organization"
      ],

      learned: [
        "C++ programming",
        "Object-Oriented Programming",
        "Control structures",
        "Algorithms",
        "Program modularization"
      ],
    },

    {
      title: "Password Generator",
      images: "./project/password_generator.png",
      description:
        "Python application that generates strong passwords using configurable character sets and user-defined lengths.",
      category: "Python Utility",

      year: "2026",

      status: "Completed",

      technologies: [
        "Python"
      ],

      github:
        "https://github.com/bashirrehan270-stack/DecodeLabs-Internship",

      featured: false,
        features: [
          "Generate secure passwords",
          "Custom password length",
          "Support multiple character sets",
          "Random password generation"
        ],

        challenges: [
          "Creating unpredictable passwords",
          "Balancing simplicity and flexibility",
          "Validating user input"
        ],

        learned: [
          "Python random module",
          "String manipulation",
          "Input validation",
          "Function design"
        ],
    },

    {
      title: "To-Do Management System",
      images: "./project/to_do_project.png",
      description:
        "Command-line task management application supporting task organization using clean modular Python architecture.",
      category: "Python Application",

      year: "2026",

      status: "Completed",

      technologies: [
        "Python",
        "OOP"
      ],

      github:
        "https://github.com/bashirrehan270-stack/DecodeLabs-Internship",

      featured: false,
      features: [
        "Create new tasks",
        "View task list",
        "Delete completed tasks",
        "Simple command-line interface"
      ],

      challenges: [
        "Managing task data",
        "Designing a user-friendly workflow",
        "Keeping code modular"
      ],

      learned: [
        "Python lists",
        "Function decomposition",
        "Program organization",
        "Command-line application development"
      ],
    }
  ],

  certifications: [
    {
      title: "AI Fluency: Framework & Foundations",

      issuer: "Anthropic",

      type: "Online"
    },

    {
      title: "Agentic AI Fundamentals",

      issuer: "Edureka",

      type: "Project Based"
    },

    {
      title: "Technology Job Simulation",

      issuer: "Deloitte Australia",

      type: "Work Based"
    },

    {
      title: "Gemini Certification for Students",

      issuer: "Google",

      type: "Online"
    }
  ],

  skills: [
    {
      title: "Programming",

      skills: [
        "Python",
        "C++",
        "Object-Oriented Programming",
        "Data Structures",
        "Algorithms"
      ]
    },

    {
      title: "Backend",

      skills: [
        "File Handling",
        "CSV Processing",
        "Modular Programming",
        "Debugging"
      ]
    },

    {
      title: "AI",

      skills: [
        "LangChain",
        "Google Gemini API",
        "Prompt Engineering",
        "Agentic AI",
        "AI Fundamentals"
      ]
    },

    {
      title: "Tools",

      skills: [
        "Git",
        "GitHub",
        "VS Code",
        "PyCharm"
      ]
    },

    {
      title: "Soft Skills",

      skills: [
        "Problem Solving",
        "Communication",
        "Teamwork",
        "Continuous Learning"
      ]
    }
  ]
};

export default portfolioData;