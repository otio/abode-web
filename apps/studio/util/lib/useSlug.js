import { useState, useEffect } from "react";
import sanityClient from "part:@sanity/base/client";
const previewClient = sanityClient.withConfig({
  // projectId: process.env.NUXT_PUBLIC_SANITY_PROJECT_ID,
  // dataset: process.env.NUXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2021-10-21",
  useCdn: false,
  withCredentials: true,
});

export default function (document) {
  const [previewUrl, setPreviewUrl] = useState("");

  const BasePreviewUrl =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000/"
      : "https://develop.aboderealty.group/";

  const previewQuery = "?preview=true";

  // HANDLE document State
  const { draft, displayed } = document;
  const documentState = draft !== null ? draft : displayed;
  const documentType = documentState._type;

  console.log("1. GET DOCUMENT TYPE PREVIEW URL", documentState);

  console.log(` Base Preview URL`, BasePreviewUrl);

  console.log("2. DOCUMENT STATE:\n", documentState);

  useEffect(() => {
    switch (documentType) {
      case "page":
        async function fetchRoute(documentState) {
          console.log("PAGE-ROUTE ==> :", documentState);
          /**
           * Since draft docs don't have access to parent references
           * this checks for drafts and returns parent reference with a strippedId
           */
          // if document Id begins with "drafts" return strippedId
          // else return id

          const isDraft = documentState["_id"].startsWith("drafts.");
          const trimmedPageId = isDraft
            ? documentState._id.replace("drafts.", "")
            : documentState._id;

          // debugger

          const query = `*[ _id == $pageId]{"slug": slug.current}`;
          const params = { pageId: documentState._id };

          try {
            const pageSlugResult = await previewClient.fetch(query, params);

            console.log("ROUTE SLUG FOR PAGE =>", pageSlugResult);
            if (
              pageSlugResult.slug === "index" ||
              pageSlugResult.slug === "/"
            ) {
              setPreviewUrl(`${BasePreviewUrl}${previewQuery}`);
            } else {
              setPreviewUrl(
                `${BasePreviewUrl}/${pageSlugResult.slug}${previewQuery}`
              );
            }
          } catch (error) {
            console.error(error);
          }
        }
        const pageSlug = fetchRoute(documentState);
        setPreviewUrl(pageSlug);
        break;
      default:
        setPreviewUrl(null);
        break;
    }
  }, [document._id, documentType]);

  return previewUrl;
}
