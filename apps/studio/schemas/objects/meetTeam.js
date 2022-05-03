export default {
  name: "meetTeam",
  title: "Meet team",
  type: "object",
  fields: [
    // DEPRECATE
    {
      name: "teamImage2",
      title: "Team Image",
      type: "image",
    },
    {
      name: "teamImage",
      title: "Team Image",
      description: 'DEPRECATED - Going forward this field should not be used. Will eventually be phased out.',
      type: "cloudinary.asset",
    },
    {
      name: "introText",
      title: "Intro Text",
      type: "textTriple",
    },
    {
      name: "meetTeamPage",
      title: "meetTeamPage",
      type: "internalPageButton",
    },
  ],
};
