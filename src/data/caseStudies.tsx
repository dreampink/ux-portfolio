import React from 'react';

export interface CaseStudyData {
  slug: string;
  title: string;
  intro: string;
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

export const caseStudies: CaseStudyData[] = [
  {
    slug: 'payments',
    title: 'Streamlined Payments',
    intro: 'Reducing drop-off during checkout.',
    client: 'TechCorp',
    date: 'Q3 2024',
    role: 'Lead UX Designer',
    headerImage: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=600&fit=crop&crop=center',
    stages: {
      problem: {
        title: 'Problem',
        summary: 'Frame the opportunity with constraints, metrics, and user impact.',
        content: (
          <div className="space-y-6">
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-zinc-800">Key Insights</h4>
              <div className="space-y-3">
                <div className="p-4 bg-zinc-50 rounded-lg">
                  <p className="text-sm text-zinc-700">Users were dropping off during checkout due to complex form validation and unclear error messages.</p>
                </div>
                <div className="p-4 bg-zinc-50 rounded-lg">
                  <p className="text-sm text-zinc-700">Mobile users had 40% higher abandonment rates compared to desktop users.</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-zinc-800">Business Impact</h4>
              <p className="text-sm text-zinc-600 leading-relaxed">
                The checkout process was causing significant revenue loss. We identified that 23% of users who started checkout never completed their purchase.
              </p>
            </div>
          </div>
        ),
        media: (
          <div className="aspect-[16/9] rounded-3xl border border-dashed border-zinc-300 grid place-items-center text-zinc-500">
            <p>Problem analysis charts</p>
          </div>
        )
      },
      research: {
        title: 'Research',
        summary: 'Triangulate qualitative and quantitative signals to map realities.',
        content: (
          <div className="space-y-6">
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-zinc-800">User Interviews</h4>
              <p className="text-sm text-zinc-600 leading-relaxed">
                Conducted 15 user interviews to understand pain points in the checkout process.
              </p>
              <ul className="space-y-2 text-sm text-zinc-600">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-zinc-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span>"I got confused by the error messages and gave up"</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-zinc-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span>"The form felt too long on my phone"</span>
                </li>
              </ul>
            </div>
          </div>
        ),
        media: (
          <div className="aspect-[16/9] rounded-3xl border border-dashed border-zinc-300 grid place-items-center text-zinc-500">
            <p>User research insights</p>
          </div>
        )
      }
    }
  },
  {
    slug: 'onboarding',
    title: 'Onboarding Revamp',
    intro: 'Helping new users find value faster.',
    client: 'StartupXYZ',
    date: 'Q2 2024',
    role: 'UX Researcher & Designer',
    headerImage: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&h=600&fit=crop&crop=center',
    stages: {
      problem: {
        title: 'Problem',
        summary: 'New users were struggling to understand the core value proposition.',
        content: (
          <div className="space-y-6">
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-zinc-800">User Journey Analysis</h4>
              <p className="text-sm text-zinc-600 leading-relaxed">
                Analyzed the first-time user experience and identified key drop-off points in the onboarding flow.
              </p>
            </div>
          </div>
        ),
        media: (
          <div className="aspect-[16/9] rounded-3xl border border-dashed border-zinc-300 grid place-items-center text-zinc-500">
            <p>Onboarding flow analysis</p>
          </div>
        )
      }
    }
  },
  {
    slug: 'insights',
    title: 'Insights Dashboard',
    intro: 'Surfacing KPIs with clarity.',
    client: 'DataCorp',
    date: 'Q1 2024',
    role: 'Product Designer',
    headerImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop&crop=center',
    stages: {
      problem: {
        title: 'Problem',
        summary: 'Stakeholders needed better visibility into key metrics and performance indicators.',
        content: (
          <div className="space-y-6">
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-zinc-800">Data Visualization Challenge</h4>
              <p className="text-sm text-zinc-600 leading-relaxed">
                Created an intuitive dashboard to help teams understand complex data relationships.
              </p>
            </div>
          </div>
        ),
        media: (
          <div className="aspect-[16/9] rounded-3xl border border-dashed border-zinc-300 grid place-items-center text-zinc-500">
            <p>Dashboard wireframes</p>
          </div>
        )
      }
    }
  },
  {
    slug: 'mobile',
    title: 'Mobile IA Refresh',
    intro: 'Simplifying navigation on small screens.',
    client: 'MobileFirst Inc',
    date: 'Q4 2023',
    role: 'UX/UI Designer',
    headerImage: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=600&fit=crop&crop=center',
    stages: {
      problem: {
        title: 'Problem',
        summary: 'Mobile navigation was cluttered and users couldn\'t find key features.',
        content: (
          <div className="space-y-6">
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-zinc-800">Information Architecture</h4>
              <p className="text-sm text-zinc-600 leading-relaxed">
                Redesigned the mobile navigation to prioritize the most important user actions.
              </p>
            </div>
          </div>
        ),
        media: (
          <div className="aspect-[16/9] rounded-3xl border border-dashed border-zinc-300 grid place-items-center text-zinc-500">
            <p>Mobile navigation mockups</p>
          </div>
        )
      }
    }
  }
];

export const getCaseStudyBySlug = (slug: string): CaseStudyData | undefined => {
  return caseStudies.find(study => study.slug === slug);
};
