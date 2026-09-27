import type { SkillCategory, SkillDetail } from '../types/index.ts';

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Programming Languages',
    skills: ['Python', 'C++', 'Java', 'JavaScript', 'TypeScript', 'SQL']
  },
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    skills: [
      'Scikit-learn',
      'TensorFlow',
      'PyTorch',
      'Data Preprocessing',
      'Model Evaluation',
      'Supervised Learning'
    ]
  },
  {
    id: 'llms-genai',
    title: 'LLMs & Generative AI',
    skills: [
      'Large Language Models (LLMs)',
      'Generative AI',
      'Prompt Engineering',
      'Google Gemini / Gemini API',
      'Retrieval-Augmented Generation (RAG)'
    ]
  },
  {
    id: 'data-science',
    title: 'Data Science & Analysis',
    skills: [
      'Pandas',
      'NumPy',
      'Matplotlib',
      'Seaborn',
      'Exploratory Data Analysis (EDA)',
      'Feature Engineering'
    ]
  },
  {
    id: 'web-dev',
    title: 'Web Technologies',
    skills: [
      'React',
      'Node.js',
      'Express',
      'HTML5 & Modern CSS',
      'REST APIs'
    ]
  },
  {
    id: 'tools-practices',
    title: 'Tools & Development',
    skills: [
      'Git & GitHub',
      'Linux / Bash',
      'VS Code',
      'Jupyter Notebooks',
      'Postman'
    ]
  }
];

export const skillDetails: Record<string, SkillDetail> = {
  // Programming Languages
  Python: {
    name: 'Python',
    category: 'Programming Languages',
    description: 'High-level programming language utilized for data analysis, machine learning pipelines, automation scripting, and backend development.'
  },
  'C++': {
    name: 'C++',
    category: 'Programming Languages',
    description: 'Core systems and algorithmic programming language applied in data structures, algorithms, and performance-critical computing coursework.'
  },
  Java: {
    name: 'Java',
    category: 'Programming Languages',
    description: 'Object-oriented programming language studied for fundamental software engineering principles and structured application development.'
  },
  JavaScript: {
    name: 'JavaScript',
    category: 'Programming Languages',
    description: 'Universal language of the web used for building dynamic client-side user interfaces and interactive browser functionality.'
  },
  TypeScript: {
    name: 'TypeScript',
    category: 'Programming Languages',
    description: 'Typed superset of JavaScript providing static type checking, improved maintainability, and code reliability for modern web projects.'
  },
  SQL: {
    name: 'SQL',
    category: 'Programming Languages',
    description: 'Standard relational database query language applied for schema design, data querying, filtering, aggregation, and relational joins.'
  },

  // AI & Machine Learning
  'Scikit-learn': {
    name: 'Scikit-learn',
    category: 'AI & Machine Learning',
    description: 'Python machine learning library used for classical predictive modeling, data splitting, cross-validation, and baseline algorithms.'
  },
  TensorFlow: {
    name: 'TensorFlow',
    category: 'AI & Machine Learning',
    description: 'Open-source machine learning framework explored for deep learning workflows, neural network layers, and model training.'
  },
  PyTorch: {
    name: 'PyTorch',
    category: 'AI & Machine Learning',
    description: 'Flexible deep learning framework utilized for experimenting with tensor computations and neural network architectures.'
  },
  'Data Preprocessing': {
    name: 'Data Preprocessing',
    category: 'AI & Machine Learning',
    description: 'Techniques for preparing raw datasets, including missing value imputation, categorical encoding, normalization, and feature scaling.'
  },
  'Model Evaluation': {
    name: 'Model Evaluation',
    category: 'AI & Machine Learning',
    description: 'Quantitative assessment of model performance using metrics including accuracy, precision, recall, F1-score, and ROC-AUC curves.'
  },
  'Supervised Learning': {
    name: 'Supervised Learning',
    category: 'AI & Machine Learning',
    description: 'Foundational machine learning paradigm focused on training classification and regression models from labeled ground-truth data.'
  },

  // LLMs & Generative AI
  'Large Language Models (LLMs)': {
    name: 'Large Language Models (LLMs)',
    category: 'LLMs & Generative AI',
    description: 'Foundation language models trained on large-scale text to understand, summarize, generate, and reason across natural language tasks.'
  },
  'Generative AI': {
    name: 'Generative AI',
    category: 'LLMs & Generative AI',
    description: 'AI paradigm enabling the creation of novel text, structured data, and code outputs through modern generative architectures.'
  },
  'Prompt Engineering': {
    name: 'Prompt Engineering',
    category: 'LLMs & Generative AI',
    description: 'Practices for designing structured instructions, system roles, few-shot examples, and contextual constraints to guide model outputs.'
  },
  'Google Gemini / Gemini API': {
    name: 'Google Gemini / Gemini API',
    category: 'LLMs & Generative AI',
    description: 'Google’s multimodal AI model platform and API interfaces used for integrating text reasoning and generative capabilities into software.'
  },
  'Retrieval-Augmented Generation (RAG)': {
    name: 'Retrieval-Augmented Generation (RAG)',
    category: 'LLMs & Generative AI',
    description: 'Architectural concept connecting language models with external reference data to provide contextually grounded and accurate answers.'
  },

  // Data Science & Analysis
  Pandas: {
    name: 'Pandas',
    category: 'Data Science & Analysis',
    description: 'Primary Python library for structured tabular data manipulation, cleaning, grouping, filtering, and time-series analysis.'
  },
  NumPy: {
    name: 'NumPy',
    category: 'Data Science & Analysis',
    description: 'Fundamental package for scientific computing in Python, providing multidimensional array operations and linear algebra routines.'
  },
  Matplotlib: {
    name: 'Matplotlib',
    category: 'Data Science & Analysis',
    description: 'Core 2D plotting library for generating publication-ready charts, histograms, scatter plots, and exploratory data visualizations.'
  },
  Seaborn: {
    name: 'Seaborn',
    category: 'Data Science & Analysis',
    description: 'Statistical visualization library built on top of Matplotlib, designed for visualizing distributions, relationships, and categorical data.'
  },
  'Exploratory Data Analysis (EDA)': {
    name: 'Exploratory Data Analysis (EDA)',
    category: 'Data Science & Analysis',
    description: 'Methodology for investigating dataset distributions, detecting outliers, understanding correlations, and validating data hypotheses.'
  },
  'Feature Engineering': {
    name: 'Feature Engineering',
    category: 'Data Science & Analysis',
    description: 'Process of selecting, transforming, and creating domain-relevant features from raw data to improve model learning capacity.'
  },

  // Web Technologies
  React: {
    name: 'React',
    category: 'Web Technologies',
    description: 'Declarative component-based JavaScript library used for building modern, responsive, and maintainable user interfaces.'
  },
  'Node.js': {
    name: 'Node.js',
    category: 'Web Technologies',
    description: 'Asynchronous JavaScript runtime used for building scalable server-side applications, microservices, and developer tooling.'
  },
  Express: {
    name: 'Express',
    category: 'Web Technologies',
    description: 'Minimal and unopinionated web framework for Node.js used to architect RESTful APIs and handle routing and middleware logic.'
  },
  'HTML5 & Modern CSS': {
    name: 'HTML5 & Modern CSS',
    category: 'Web Technologies',
    description: 'Semantic markup standards and modern CSS systems incorporating CSS Grid, Flexbox, custom properties, and responsive design.'
  },
  'REST APIs': {
    name: 'REST APIs',
    category: 'Web Technologies',
    description: 'Standard architectural pattern for designing stateless client-server HTTP web services with JSON data interchange.'
  },

  // Tools & Development
  'Git & GitHub': {
    name: 'Git & GitHub',
    category: 'Tools & Development',
    description: 'Distributed version control system and cloud repository platform used for code tracking, branching workflows, and open collaboration.'
  },
  'Linux / Bash': {
    name: 'Linux / Bash',
    category: 'Tools & Development',
    description: 'Unix-based command-line environment and shell scripting utilized for developer workflows, file management, and tool automation.'
  },
  'VS Code': {
    name: 'VS Code',
    category: 'Tools & Development',
    description: 'Extensible source-code editor configured with language servers, linters, debuggers, and Git integration for daily development.'
  },
  'Jupyter Notebooks': {
    name: 'Jupyter Notebooks',
    category: 'Tools & Development',
    description: 'Interactive web-based computational notebook used for iterative data analysis, model prototyping, and visualized documentation.'
  },
  Postman: {
    name: 'Postman',
    category: 'Tools & Development',
    description: 'API testing platform used for constructing, validating, and debugging HTTP requests against RESTful endpoints.'
  }
};

