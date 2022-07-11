export default {
  name: "agents",
  title: "Agents or Staff",
  type: "document",
  fields: [
    {
      name: "agentFullName",
      title: "Agent full name",
      type: "object",
      fields: [
        {
          name: "agentFirstName",
          title: "Agent first name",
          type: "string",
        },
        {
          name: "agentLastName",
          title: "Agent last name",
          type: "string",
        },
      ],
    },
    {
      name: "agentTitle",
      title: "Agent title",
      type: "string",
    },
    {
      name: "agentPhoneNumber",
      title: "Agent phone number",
      type: "number",
    },
    {
      name: "agentEmail",
      title: "Agent email",
      type: "string",
    },
    {
      name: "agentLicenseNumber",
      title: "Agent license number",
      description: "Optional - DRE#",
      type: "number",
    },
    {
      name: "agentBioPhoto",
      title: "Agent bio photo",
      type: "image",
    },
    {
      name: "agentLogo",
      title: "Agent logo",
      type: "image",
    },
    {
      name: "agentBioText",
      title: "Agent bio text",
      type: "text",
    },
    {
      name: "agentSocials",
      title: "Agent socials",
      type: "array",
      of: [
        {
          name: "agentSocialLink",
          title: "Agent Social Link",
          type: "object",
          fields: [
            {
              name: "socialIcon",
              title: "Social icon",
              type: "image",
            },
            {
              name: "socialLink",
              title: "Social link",
              type: "url",
            },
          ],
        },
      ],
    },
  ],
};
