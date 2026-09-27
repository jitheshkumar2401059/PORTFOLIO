import type { JourneyItem } from '../types/index.ts';

export const journeyData: JourneyItem[] = [
  {
    id: 'journey-3',
    period: 'Third Year • Currently Pursuing',
    title: 'B.E. in Computer Science and Engineering',
    institutionOrContext: 'Sri Ramakrishna Engineering College',
    description:
      'Advancing studies in Computer Science and Engineering with a focus on Data Science, AI/Machine Learning, software development, and web technologies. Actively learning and building practical projects exploring Large Language Models (LLMs), Generative AI, and Retrieval-Augmented Generation (RAG).',
    tags: [
      'Data Science',
      'AI / ML',
      'LLMs & Generative AI',
      'RAG',
      'Software Development',
      'Web Technologies'
    ]
  },
  {
    id: 'journey-2',
    period: 'Second Year • Academic Progression',
    title: 'Core Computer Science Foundations',
    institutionOrContext: 'Sri Ramakrishna Engineering College',
    description:
      'Studied core computer science fundamentals including Data Structures & Algorithms, Object-Oriented Programming, and database systems, applying concepts through programming practice in C++, Java, and Python.',
    tags: ['DSA', 'OOP', 'Python', 'Java', 'C++', 'Database Systems']
  },
  {
    id: 'journey-1',
    period: 'First Year • Academic Progression',
    title: 'Engineering Foundation & Programming Basics',
    institutionOrContext: 'Sri Ramakrishna Engineering College',
    description:
      'Commenced undergraduate engineering studies, establishing foundational skills in engineering mathematics, problem-solving, and introductory programming logic.',
    tags: ['Programming Basics', 'Mathematics', 'Engineering Fundamentals', 'Problem Solving']
  }
];
