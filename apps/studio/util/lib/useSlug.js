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
  console.log("1.5 - Drafts", draft);
  console.log("1.5 - Displayed", displayed);

  console.log(` Base Preview URL`, BasePreviewUrl);

  console.log("2. DOCUMENT STATE:\n", documentState);

  async function fetchRoute(documentState) {
    console.log("PAGE-ROUTE ==> :", documentState);
    /**
     * Since draft docs don't have access to parent references
     * this checks for drafts and returns parent reference with a strippedId
     */
    // if document Id begins with "drafts" return strippedId
    // else return id
    const { slug, _id } = documentState;

    // const isDraft = documentState["_id"].startsWith("drafts.");
    // const trimmedPageId = isDraft
    //   ? documentState._id.replace("drafts.", "")
    //   : documentState._id;

    // // debugger

    const query = `*[ _id == $pageId]{"slug": slug.current}[0]`;
    const params = { pageId: _id };

    try {
      const pageSlugResult = await previewClient.fetch(query, params);

      console.log("ROUTE SLUG FOR PAGE =>", pageSlugResult);
      if (slug.current === "index" || slug.current === "/") {
        setPreviewUrl(`${BasePreviewUrl}${previewQuery}`);
      } else {
        setPreviewUrl(`${BasePreviewUrl}/${slug.current}${previewQuery}`);
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    switch (documentType) {
      case "page":
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
