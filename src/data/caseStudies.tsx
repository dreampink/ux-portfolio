import React from 'react';
import { projects } from './projects';

export interface CaseStudyData {
  slug: string;
  title: string;
  description: string;
  client?: string;
  date?: string;
  role?: string;
  tools?: string;
  impact?: string;
  headerImage?: string;
  stages: {
    [key: string]: {
      title: string;
      summary: string;
      content?: React.ReactNode;
      media?: React.ReactNode;
    };
  };
}

// Convert projects to caseStudies format
export const caseStudies: CaseStudyData[] = projects.map((project: any) => ({
  slug: project.slug,
  title: project.title,
  description: project.description,
  client: project.client,
  date: project.date,
  role: project.role,
  tools: project.tools || undefined,
  impact: project.impact,
  headerImage: project.headerImage,
  stages: {
    research: {
      title: 'Research',
      summary: 'Gathering insights and data',
      content: project.stages?.research?.content,
      media: project.stages?.research?.media
    },
    tension: {
      title: 'Tension',
      summary: 'Identifying key conflicts and challenges',
      content: project.stages?.tension?.content,
      media: project.stages?.tension?.media
    },
    approach: {
      title: 'Approach',
      summary: 'Developing solutions and strategies',
      content: project.stages?.approach?.content,
      media: project.stages?.approach?.media
    },
    problem: {
      title: 'Problem',
      summary: 'Understanding the core challenges',
      content: project.stages?.problem?.content,
      media: project.stages?.problem?.media
    },
    design: {
      title: 'Design Output',
      summary: 'Creating the experience',
      content: project.stages?.solution?.content,
      media: project.stages?.solution?.media
    },
    outcome: {
      title: 'Outcome',
      summary: 'Measuring success and results',
      content: project.stages?.results?.content,
      media: project.stages?.results?.media
    },
    learning: {
      title: 'Learning',
      summary: 'Continuous improvement and key takeaways',
      content: project.stages?.learning?.content,
      media: project.stages?.learning?.media
    }
  }
}));

export const getCaseStudyBySlug = (slug: string): CaseStudyData | undefined => {
  return caseStudies.find(study => study.slug === slug);
};
