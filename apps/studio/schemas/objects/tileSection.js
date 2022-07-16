export default {
  name: "tileSection",
  title: "Tile Section",
  type: "object",
  fields: [
    {
      name: "tileSectionHeader",
      title: "Tile Section Header",
      type: "textContent",
    },
    {
      name: "tilesWrapper",
      title: "Tiles",
      type: "array",
      of: [
        {
          name: "tile",
          title: "Tile",
          type: "object",
          fields: [
            {
              name: "tileImage",
              title: "Tile Image",
              type: "image",
            },
            {
              name: "tileText",
              title: "Tile Text",
              type: "textContent",
            },
          ],
        },
      ],
    },
    {
      name: "tileBottomBorder",
      title: "Tile bottom border",
      type: "boolean",
    },
  ],
};