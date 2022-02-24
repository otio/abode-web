// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

import siteSettings from "./documents/siteSettings";
import page from "./documents/page";
import neighborhood from "./documents/neighborhood";
import clientReview from "./documents/clientReview";

// Objects
import callToAction from "./objects/callToAction";
import reviewPicker from "./objects/reviewPicker";
import bannerContent from "./objects/bannerContent";
import textTriple from "./objects/textTriple";
import internalPageButton from "./objects/internalPageButton";
import meetTeam from "./objects/meetTeam";
import featuredListing from "./objects/featuredListing";
import magazineSignup from "./objects/magazineSignup";
import areasServed from "./objects/areasServed";
import marketingCta from "./objects/marketingCta";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    siteSettings,
    page,
    callToAction,
    neighborhood,
    clientReview,
    /* Your Object types here! */
    bannerContent,
    reviewPicker,
    textTriple,
    internalPageButton,
    meetTeam,
    featuredListing,
    magazineSignup,
    areasServed,
    marketingCta,
    /* Your Document types here! */
  ]),
});
