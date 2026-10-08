export const portfolio = {
  personal: {
    name: "Swapon Kumar Das",
    role: "Full Stack Developer",
    location: "Dhaka, Bangladesh",
    email: "swaponkumardas540@gmail.com",
  },

  navigation: [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ],

  hero: {
    eyebrow: "Hello, I’m",
    description:
      "I build modern, fast and responsive web applications using HTML, CSS, JavaScript and modern front-end technologies.",
    primaryAction: "Explore my work",
    secondaryAction: "Get in touch",
  },

  about: {
    eyebrow: "A little about me",
    title: "Thoughtful code. Useful experiences.",
    description:
      "I build modern, fast, responsive web applications. The work focuses on thoughtful interface implementation, practical JavaScript, and how a product reads and behaves across screen sizes.",
    principles: [
      { title: "Responsive by default", description: "Layouts that adapt with care from small screens to wide displays." },
      { title: "Built for people", description: "Clear structure, useful interactions, and accessible foundations." },
      { title: "Performance conscious", description: "A lightweight approach using native web technologies." },
    ],
  },

  skillsSection: {
    eyebrow: "The toolkit",
    title: "Technologies I work with",
    description: "A practical set of tools for building and shipping web experiences.",
  },

  skills: [
    {
      category: "Frontend",
      items: [
        { name: "HTML5", icon: "HTML5.svg" },
        { name: "CSS3", icon: "CSS3.svg" },
        { name: "JavaScript", icon: "JavaScript.svg" },
        { name: "Tailwind CSS", icon: "Tailwind.svg" },
        { name: "React", icon: "React.svg" },
      ],
    },
    {
      category: "Backend & tools",
      items: [
        { name: "Node.js", icon: "Node.js.svg" },
        { name: "MongoDB", icon: "MongoDB.svg" },
        { name: "Git", icon: "Git.svg" },
      ],
    },
  ],

  projectsSection: {
    eyebrow: "Concept previews",
    title: "Projects",
    description: "The supplied dashboard visual is shown in three layout contexts. These are design concepts, not verified completed client or personal projects.",
  },

  projects: [
    {
      title: "Dashboard UI Concept",
      description: "A general dashboard layout study with navigation, summary metrics, and data panels.",
      image: "assets/images/projects/Dashboard.png",
      imageAlt: "Generic dashboard interface concept with navigation, metric cards, and charts",
      liveUrl: "https://www.facebook.com/olpo.kotha.581/",
      tags: ["Dashboard UI", "Concept preview"],
      placeholder: true,
    },
    {
      title: "Analytics Dashboard Concept",
      description: "A second presentation of the supplied dashboard visual, focused on reading metrics and charts.",
      image: "assets/images/projects/Dashboard.png",
      imageAlt: "Generic analytics dashboard concept with metric cards and charts",
      tags: ["Analytics layout", "Concept preview"],
      placeholder: true,
    },
    {
      title: "Admin Dashboard Concept",
      description: "A layout concept showing how navigation and data summaries can share a compact workspace.",
      image: "assets/images/projects/Dashboard.png",
      imageAlt: "Generic admin dashboard concept with sidebar navigation and data summaries",
      tags: ["Admin layout", "Concept preview"],
      placeholder: true,
    },
  ],

  servicesSection: {
    eyebrow: "How I can help",
    title: "Services",
    description: "Practical support for building, refining, and maintaining web interfaces.",
  },

  services: [
    {
      number: "01",
      icon: "responsive",
      title: "Responsive websites",
      description: "Build clear, adaptable page layouts that work across phones, tablets, and desktops.",
    },
    {
      number: "02",
      icon: "interface",
      title: "Interface development",
      description: "Translate interface ideas into polished, accessible HTML and CSS experiences.",
    },
    {
      number: "03",
      icon: "javascript",
      title: "JavaScript interactions",
      description: "Add focused, useful interactions with lightweight vanilla JavaScript.",
    },
    {
      number: "04",
      icon: "support",
      title: "Interface updates",
      description: "Refine existing layouts and fix front-end issues across common screen sizes.",
    },
    {
      number: "05",
      icon: "integration",
      title: "API integration",
      description: "Connect browser interfaces to available APIs and handle returned data clearly.",
    },
    {
      number: "06",
      icon: "performance",
      title: "Performance improvements",
      description: "Review front-end delivery and reduce avoidable work in the browser.",
    },
  ],

  contact: {
    eyebrow: "Have something in mind?",
    title: "Let’s make it work well.",
    description:
      "Share a question or an idea. The form will open a prefilled email in your email app; it does not send messages to a server.",
    emailLabel: "Email",
    locationLabel: "Based in",
  },

  socialLinks: [
    { label: "Email", type: "email", icon: "✉" },
  ],

  footer: {
    tagline: "Better Code, Better Tomorrow",
    copyright: "All rights reserved.",
  },
};
