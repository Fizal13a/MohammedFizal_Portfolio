export interface ProjectMedia {
  type: 'image' | 'video';
  url: string;
  alt: string;
}

export interface ProjectLink {
  label: string;
  url: string;
  type: 'play' | 'github' | 'store' | 'video' | 'monitor' | 'link';
}

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  media: ProjectMedia[];
  links: ProjectLink[];
  category: 'Professional' | 'Personal' | 'Tools';
}

export interface ProjectDetail {
  id: string;
  tags: string[];
  role: string;
  contributions: string[];
}
