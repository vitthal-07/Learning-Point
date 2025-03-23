export interface Tutorial {
  title: string;
  videoUrl: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  tutorials: Tutorial[];
}

export const courses: Course[] = [
  {
    id: "web-dev",
    title: "Web Development",
    description: "Learn HTML, CSS, JavaScript, and React.",
    thumbnail: "https://img.youtube.com/vi/dD2EISBDjWM/0.jpg",
    tutorials: [
      {
        title: "Introduction to HTML",
        videoUrl: "https://www.youtube.com/embed/dD2EISBDjWM",
      },
      {
        title: "CSS Basics",
        videoUrl: "https://www.youtube.com/embed/OEV8gMkCHXQ",
      },
      {
        title: "JavaScript Fundamentals",
        videoUrl: "https://www.youtube.com/embed/W6NZfCO5SIk",
      },
      {
        title: "React Basics",
        videoUrl: "https://www.youtube.com/embed/N3AkSS5hXMA",
      },
    ],
  },
  {
    id: "data-structures",
    title: "Data Structures",
    description: "Master arrays, linked lists, stacks, and queues.",
    thumbnail: "https://img.youtube.com/vi/WQoB2z67hvY/0.jpg",
    tutorials: [
      {
        title: "Arrays and Their Applications",
        videoUrl: "https://www.youtube.com/embed/WQoB2z67hvY",
      },
      {
        title: "Linked Lists Explained",
        videoUrl: "https://www.youtube.com/embed/NobHlGUjV3g",
      },
      {
        title: "Stacks & Queues",
        videoUrl: "https://www.youtube.com/embed/wjI1WNcIntg",
      },
      {
        title: "Binary Trees",
        videoUrl: "https://www.youtube.com/embed/YAdLFsTG70w",
      },
    ],
  },
  {
    id: "ai-ml",
    title: "Artificial Intelligence & Machine Learning",
    description: "Understand AI and Machine Learning fundamentals.",
    thumbnail: "https://img.youtube.com/vi/aircAruvnKk/0.jpg",
    tutorials: [
      {
        title: "Introduction to AI",
        videoUrl: "https://www.youtube.com/embed/aircAruvnKk",
      },
      {
        title: "Machine Learning Basics",
        videoUrl: "https://www.youtube.com/embed/GwIo3gDZCVQ",
      },
      {
        title: "Deep Learning Overview",
        videoUrl: "https://www.youtube.com/embed/ZyC6_8mJtM8",
      },
      {
        title: "Neural Networks Explained",
        videoUrl: "https://www.youtube.com/embed/wnZgcrcvj9w",
      },
    ],
  },
  {
    id: "cyber-security",
    title: "Cyber Security",
    description:
      "Learn the fundamentals of cyber security and ethical hacking.",
    thumbnail: "https://img.youtube.com/vi/3Kq1MIfTWCE/0.jpg",
    tutorials: [
      {
        title: "Introduction to Cyber Security",
        videoUrl: "https://www.youtube.com/embed/3Kq1MIfTWCE",
      },
      {
        title: "Common Security Threats",
        videoUrl: "https://www.youtube.com/embed/7KnwGf8U2Gk",
      },
      {
        title: "How Firewalls Work",
        videoUrl: "https://www.youtube.com/embed/XZpcwB9IqS4",
      },
      {
        title: "Ethical Hacking Basics",
        videoUrl: "https://www.youtube.com/embed/wi90UXZ8DxY",
      },
    ],
  },
  {
    id: "cloud-computing",
    title: "Cloud Computing",
    description:
      "Learn about cloud technologies and services like AWS, Azure, and Google Cloud.",
    thumbnail: "https://img.youtube.com/vi/M988_fsOSWo/0.jpg",
    tutorials: [
      {
        title: "Introduction to Cloud Computing",
        videoUrl: "https://www.youtube.com/embed/M988_fsOSWo",
      },
      {
        title: "AWS Basics",
        videoUrl: "https://www.youtube.com/embed/ulprqHHWlng",
      },
      {
        title: "Google Cloud Platform Overview",
        videoUrl: "https://www.youtube.com/embed/xXm_Pb6qE54",
      },
      {
        title: "Microsoft Azure Explained",
        videoUrl: "https://www.youtube.com/embed/KkMDCCdjyW8",
      },
    ],
  },
];
