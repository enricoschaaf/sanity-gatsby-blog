export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fbbed3ee1cd8b010c8d277a',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-iv9o24vu',
                  apiId: 'a2835df0-c891-4066-a1fb-be196947a9a8'
                },
                {
                  buildHookId: '5fbbed3ee1cd8b008a8d2a88',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-34npe6qi',
                  apiId: '75a98030-3868-4c97-8fbf-3c67ecec80af'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/enricoschaaf/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-34npe6qi.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
