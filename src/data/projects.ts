import type { Project } from '../types/index.ts';

export const projectsData: Project[] = [
  {
    id: 'jarvis-ai-assistant',
    title: 'JARVIS — AI Assistant',
    category: 'AI / ML',
    summary:
      'Real-time personal AI voice assistant powered by Google Gemini and LiveKit for streaming voice conversations and automated tool execution.',
    description:
      'A personal AI voice assistant inspired by JARVIS, built with Python, Google Gemini, and LiveKit. It features a low-latency real-time voice interaction pipeline, handling natural audio responses and executing modular Python tools for live weather queries, location resolution, and web search.',
    technologies: ['Python', 'Google Gemini', 'LiveKit', 'WebRTC', 'Docker'],
    keyHighlights: [
      'Real-time streaming voice interaction pipeline orchestrated using LiveKit Agents and Google Gemini',
      'Integrated modular Python tool callers for automated weather retrieval, location lookup, and web search',
      'Structured modular architecture separating agent brain logic, voice handling, data, and external tools'
    ],
    githubUrl: 'https://github.com/jitheshkumar2401059/JARVIS'
  },
  {
    id: 'kavach-train-protection',
    title: 'Kavach — Automatic Train Protection System',
    category: 'Embedded Systems / IoT',
    summary:
      'NodeMCU-based railway safety prototype featuring proximity sensing, automated gate control, and alert mechanisms for collision prevention.',
    description:
      'An automated train protection and railway safety prototype built around a NodeMCU microcontroller. The system incorporates proximity sensing to detect incoming trains, automatically actuates railway gate barriers via a servo motor, and triggers auditory buzzer alert mechanisms to enhance level-crossing safety.',
    technologies: ['NodeMCU', 'IoT', 'C++', 'Sensors & Actuators', 'Embedded Systems'],
    keyHighlights: [
      'Proximity sensing mechanism to detect incoming trains in real time',
      'Automated railway gate control actuated by servo motor positioning',
      'Auditory alert and buzzer subsystem for enhanced level-crossing safety'
    ]
  }
];
