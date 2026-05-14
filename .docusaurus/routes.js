import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/4-week-starter-course-plan',
    component: ComponentCreator('/4-week-starter-course-plan', '554'),
    exact: true
  },
  {
    path: '/archive',
    component: ComponentCreator('/archive', '51a'),
    exact: true
  },
  {
    path: '/authors',
    component: ComponentCreator('/authors', '498'),
    exact: true
  },
  {
    path: '/authors/all-johnson-articles',
    component: ComponentCreator('/authors/all-johnson-articles', '915'),
    exact: true
  },
  {
    path: '/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/authors/all-sebastien-lorber-articles', '594'),
    exact: true
  },
  {
    path: '/authors/yangshun',
    component: ComponentCreator('/authors/yangshun', '786'),
    exact: true
  },
  {
    path: '/css-basics',
    component: ComponentCreator('/css-basics', 'fbd'),
    exact: true
  },
  {
    path: '/frontend',
    component: ComponentCreator('/frontend', '9dc'),
    exact: true
  },
  {
    path: '/html-basics',
    component: ComponentCreator('/html-basics', '2af'),
    exact: true
  },
  {
    path: '/javascript-basics',
    component: ComponentCreator('/javascript-basics', '378'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/tags',
    component: ComponentCreator('/tags', '626'),
    exact: true
  },
  {
    path: '/tags/course',
    component: ComponentCreator('/tags/course', '37c'),
    exact: true
  },
  {
    path: '/tags/css',
    component: ComponentCreator('/tags/css', 'bf4'),
    exact: true
  },
  {
    path: '/tags/frontend',
    component: ComponentCreator('/tags/frontend', 'cac'),
    exact: true
  },
  {
    path: '/tags/html',
    component: ComponentCreator('/tags/html', 'ce6'),
    exact: true
  },
  {
    path: '/tags/javascript',
    component: ComponentCreator('/tags/javascript', '6c6'),
    exact: true
  },
  {
    path: '/tags/plan',
    component: ComponentCreator('/tags/plan', '10e'),
    exact: true
  },
  {
    path: '/tags/starter',
    component: ComponentCreator('/tags/starter', 'ebd'),
    exact: true
  },
  {
    path: '/tags/week',
    component: ComponentCreator('/tags/week', '291'),
    exact: true
  },
  {
    path: '/what-is-frontend',
    component: ComponentCreator('/what-is-frontend', 'bf2'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'dc1'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '9c9'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'bde'),
            routes: [
              {
                path: '/docs/category/tutorial---basics',
                component: ComponentCreator('/docs/category/tutorial---basics', '20e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/tutorial---extras',
                component: ComponentCreator('/docs/category/tutorial---extras', '9ad'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/docs/tutorial-basics/congratulations', '458'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/docs/tutorial-basics/create-a-blog-post', '108'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/docs/tutorial-basics/create-a-document', '8fc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/docs/tutorial-basics/create-a-page', '951'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/docs/tutorial-basics/deploy-your-site', '4f5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/docs/tutorial-basics/markdown-features', 'b05'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/docs/tutorial-extras/manage-docs-versions', '978'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/docs/tutorial-extras/translate-your-site', 'f9a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/vercel-web-analytics',
                component: ComponentCreator('/docs/vercel-web-analytics', '1e2'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'ab5'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
