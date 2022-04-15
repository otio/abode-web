export default {
  widgets: [
    {
      name: "sanity-tutorials",
    },
    {
      name: "project-info",
    },
    {
      name: "project-users",
    },
    {
      name: "netlify",
      options: {
        title: "Abode Sites",
        sites: [
          {
            title: "Development - Non-Public - develop.aboderealty.group",
            apiId: process.env.SANITY_STUDIO_NETLIFY_API_ID_ABODE_MAIN,
            buildHookId: process.env.SANITY_STUDIO_NETLIFY_ABODE_DEV_HOOK_ID,
            name: "abode-sf Development",
            url: "https://develop.aboderealty.group/",
          },
          {
            title: "Production - Public Site - www.aboderealty.group",
            apiId: process.env.SANITY_STUDIO_NETLIFY_API_ID_ABODE_MAIN,
            buildHookId: process.env.SANITY_STUDIO_NETLIFY_ABODE_MAIN_HOOK_ID,
            name: "abode-sf Production",
            url: "https://aboderealty.group/",
          },
        ],
      },
    },
  ],
};
