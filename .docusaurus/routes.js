import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/git-hub-pages/blog',
    component: ComponentCreator('/git-hub-pages/blog', '021'),
    exact: true
  },
  {
    path: '/git-hub-pages/blog/archive',
    component: ComponentCreator('/git-hub-pages/blog/archive', '019'),
    exact: true
  },
  {
    path: '/git-hub-pages/blog/authors',
    component: ComponentCreator('/git-hub-pages/blog/authors', '7ca'),
    exact: true
  },
  {
    path: '/git-hub-pages/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/git-hub-pages/blog/authors/all-sebastien-lorber-articles', '601'),
    exact: true
  },
  {
    path: '/git-hub-pages/blog/authors/yangshun',
    component: ComponentCreator('/git-hub-pages/blog/authors/yangshun', '8b6'),
    exact: true
  },
  {
    path: '/git-hub-pages/blog/first-blog-post',
    component: ComponentCreator('/git-hub-pages/blog/first-blog-post', '675'),
    exact: true
  },
  {
    path: '/git-hub-pages/blog/long-blog-post',
    component: ComponentCreator('/git-hub-pages/blog/long-blog-post', 'c51'),
    exact: true
  },
  {
    path: '/git-hub-pages/blog/mdx-blog-post',
    component: ComponentCreator('/git-hub-pages/blog/mdx-blog-post', 'd8f'),
    exact: true
  },
  {
    path: '/git-hub-pages/blog/tags',
    component: ComponentCreator('/git-hub-pages/blog/tags', 'a86'),
    exact: true
  },
  {
    path: '/git-hub-pages/blog/tags/docusaurus',
    component: ComponentCreator('/git-hub-pages/blog/tags/docusaurus', 'bc3'),
    exact: true
  },
  {
    path: '/git-hub-pages/blog/tags/facebook',
    component: ComponentCreator('/git-hub-pages/blog/tags/facebook', 'b1e'),
    exact: true
  },
  {
    path: '/git-hub-pages/blog/tags/hello',
    component: ComponentCreator('/git-hub-pages/blog/tags/hello', '2f5'),
    exact: true
  },
  {
    path: '/git-hub-pages/blog/tags/hola',
    component: ComponentCreator('/git-hub-pages/blog/tags/hola', 'f6c'),
    exact: true
  },
  {
    path: '/git-hub-pages/blog/welcome',
    component: ComponentCreator('/git-hub-pages/blog/welcome', '8bf'),
    exact: true
  },
  {
    path: '/git-hub-pages/markdown-page',
    component: ComponentCreator('/git-hub-pages/markdown-page', 'f35'),
    exact: true
  },
  {
    path: '/git-hub-pages/docs',
    component: ComponentCreator('/git-hub-pages/docs', '1fe'),
    routes: [
      {
        path: '/git-hub-pages/docs',
        component: ComponentCreator('/git-hub-pages/docs', '1f6'),
        routes: [
          {
            path: '/git-hub-pages/docs',
            component: ComponentCreator('/git-hub-pages/docs', 'd7e'),
            routes: [
              {
                path: '/git-hub-pages/docs/category/tutorial---basics',
                component: ComponentCreator('/git-hub-pages/docs/category/tutorial---basics', '2d8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/git-hub-pages/docs/category/tutorial---extras',
                component: ComponentCreator('/git-hub-pages/docs/category/tutorial---extras', '3ee'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/git-hub-pages/docs/intro',
                component: ComponentCreator('/git-hub-pages/docs/intro', '403'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/git-hub-pages/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/git-hub-pages/docs/tutorial-basics/congratulations', '66e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/git-hub-pages/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/git-hub-pages/docs/tutorial-basics/create-a-blog-post', '925'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/git-hub-pages/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/git-hub-pages/docs/tutorial-basics/create-a-document', '723'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/git-hub-pages/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/git-hub-pages/docs/tutorial-basics/create-a-page', 'd5f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/git-hub-pages/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/git-hub-pages/docs/tutorial-basics/deploy-your-site', '788'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/git-hub-pages/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/git-hub-pages/docs/tutorial-basics/markdown-features', '63e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/git-hub-pages/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/git-hub-pages/docs/tutorial-extras/manage-docs-versions', 'f37'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/git-hub-pages/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/git-hub-pages/docs/tutorial-extras/translate-your-site', '490'),
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
    path: '/git-hub-pages/',
    component: ComponentCreator('/git-hub-pages/', '19f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
