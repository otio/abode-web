// /deskStructure.js
import React from "react";
import S from "@sanity/desk-tool/structure-builder";
import useSlug from "../util/lib/useSlug";

// export const getDefaultDocumentNode = ({ schemaType, documentId }) => {
//   // Conditionally return a different configuration based on the schema type
//   switch (schemaType) {
//     case "page":
//       return S.document().views([
//         S.view.form(),
//         // S.view.editor(),
//         S.view.component(WebPreview).title("Web Preview"),
//       ]);
//       break;

//     default:
//       break;
//   }
// };

// const WebPreview = ({ document }) => {
//   const targetURL = useSlug(document);
//   console.log("PREVIEW URL: =>", targetURL);

//   if (targetURL !== null || targetURL !== undefined) {
//     return (
//       <iframe src={targetURL} frameBorder={0} width="100%" height="100%" />
//     );
//   }
//   return (
//     <section width="100%" height="100%">
//       <h1>NO SLUG SET FOR CONTENT PREVIEW</h1>
//     </section>
//   );
// };

export default () =>
  S.list()
    .title("Content Types")
    .items([
      S.listItem()
        .title("Site Settings")
        .child(
          S.document().schemaType("siteSettings").documentId("siteSettings")
        ),
      S.listItem()
        .title("Pages")
        .child(
          S.documentList()
            .title("Pages")
            .schemaType("page")
            .defaultOrdering([{ field: "_createdAt", direction: "asc" }])
            .filter(`_type == "page"`)
            .child((docId) =>
              S.editor()
                .title("Page Settings")
                .schemaType("page")
                .documentId(docId)
                .views([
                  S.view.form(),
                  // S.view.component(WebPreview).title("Web Preview"),
                ])
            )
        ),
      ...S.documentTypeListItems().filter(
        (listItem) => !["siteSettings", "page"].includes(listItem.getId())
      ),
    ]);
