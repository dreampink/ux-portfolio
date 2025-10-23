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
export const caseStudies: CaseStudyData[] = projects.map(project => ({
  slug: project.slug,
  title: project.title,
  description: project.description,
  client: project.client,
  date: project.date,
  role: project.role,
  tools: project.tools,
  impact: project.impact,
  headerImage: project.headerImage,
  stages: {
    tension: {
      title: 'Tension',
      summary: 'Identifying key conflicts and challenges',
      content: project.stages.tension?.content
    },
    approach: {
      title: 'Approach',
      summary: 'Developing solutions and strategies',
      content: project.stages.approach?.content
    },
    problem: {
      title: 'Problem',
      summary: 'Understanding the core challenges',
      content: project.stages.problem?.content
    },
    design: {
      title: 'Design Output',
      summary: 'Creating the experience',
      content: project.stages.solution?.content
    },
    outcome: {
      title: 'Outcome',
      summary: 'Measuring success and results',
      content: project.stages.results?.content
    }
  }
}));

export const getCaseStudyBySlug = (slug: string): CaseStudyData | undefined => {
  return caseStudies.find(study => study.slug === slug);
};
