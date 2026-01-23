export type CodingType = 'vibe-coded' | 'pair-coded' | 'manual';
export type ContentType = 'live' | 'static' | 'coming-soon';

export interface Project {
  id: string;
  name: string;
  description: string;
  creationDate: string;      // ISO format: YYYY-MM-DD
  codingType: CodingType;
  contentType: ContentType;
  url?: string;              // For live projects
  path?: string;             // For static projects
  isBookmarked: boolean;
  thumbnail?: string;
}
