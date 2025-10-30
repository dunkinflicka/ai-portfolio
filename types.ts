
export interface Project {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  githubUrl: string;
  liveUrl?: string;
}

export interface EducationItem {
  degree: string;
  university: string;
  details: string;
}

export interface WorkExperienceItem {
  role: string;
  company: string;
  duration: string;
  details: string[];
}

export interface LanguageItem {
  name: string;
  level: 'Native' | 'Fluent' | 'Conversational' | 'Basic';
}