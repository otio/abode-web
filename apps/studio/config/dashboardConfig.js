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
            title: "aboderealty.group",
            apiId: process.env.SANITY_STUDIO_NETLIFY_API_ID_ABODE_MAIN,
            buildHookId: process.env.SANITY_STUDIO_NETLIFY_ABODE_MAIN_HOOK_ID,
            name: "abode-sf",
            url: "https://aboderealty.group/",
          },
        ],
      },
    },
  ],
};
