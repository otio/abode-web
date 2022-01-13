export default {
  name: "meetTeam",
  title: "Meet team",
  type: "object",
  fields: [
    {
      name: "teamImage",
      title: "Team Image",
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
