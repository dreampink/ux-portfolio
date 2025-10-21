import React from 'react';
import { projects } from './projects';

export interface CaseStudyData {
  slug: string;
  title: string;
  description: string;
  client?: string;
  date?: string;
  role?: string;
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
  headerImage: project.headerImage,
  stages: {
    tension: {
      title: project.stages.tension.title,
      summary: project.stages.tension.title,
      content: project.stages.tension.content
    },
    approach: {
      title: project.stages.approach.title,
      summary: project.stages.approach.title,
      content: project.stages.approach.content
    },
    problem: {
      title: project.stages.problem.title,
      summary: project.stages.problem.title,
      content: project.stages.problem.content
    },
    design: {
      title: project.stages.solution.title,
      summary: project.stages.solution.title,
      content: project.stages.solution.content
    },
    outcome: {
      title: project.stages.results.title,
      summary: project.stages.results.title,
      content: project.stages.results.content
    }
  }
}));

export const getCaseStudyBySlug = (slug: string): CaseStudyData | undefined => {
  return caseStudies.find(study => study.slug === slug);
};
