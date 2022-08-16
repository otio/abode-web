// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

import siteSettings from "./documents/siteSettings";
import page from "./documents/page";
import neighborhood from "./documents/neighborhood";
import clientReview from "./documents/clientReview";
import marketReport from "./documents/marketReport";
import callToAction from "./documents/callToAction";
import agents from "./documents/agents";
import form from "./documents/form";

// Objects
import reviewPicker from "./objects/reviewPicker";
import bannerContent from "./objects/bannerContent";
import textTriple from "./objects/textTriple";
import internalPageButton from "./objects/internalPageButton";
import meetTeam from "./objects/meetTeam";
import featuredListing from "./objects/featuredListing";
// import magazineSignup from "./objects/magazineSignup";
import areasServed from "./objects/areasServed";
import marketingCta from "./objects/marketingCta";
import marketReportsPicker from "./objects/marketReportsPicker";
import ctaPicker from "./objects/ctaPicker";
import textContent from "./objects/textContent";
import textShort from "./objects/textShort";
import textLong from "./objects/textLong";
import tileSection from "./objects/tileSection";
import linkButton from "./objects/linkButton";
import agentPicker from "./objects/agentPicker";
import fieldDefaults from "./objects/fieldDefaults";
import formPicker from "./objects/formPicker";

// FIELDS
import formBox from "./fields/formBox";
import formButton from "./fields/formButton";
import formGroup from "./fields/formGroup";
import formSelect from "./fields/formSelect";
import formSlider from "./fields/formSlider";
import formText from "./fields/formText";
import formTextarea from "./fields/formTextarea";
import formValidations from "./fields/formValidations";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your Document types here! */
    siteSettings,
    page,
    callToAction,
    neighborhood,
    clientReview,
    marketReport,
    agents,
    form,
    /* Your Object types here! */
    bannerContent,
    reviewPicker,
    agentPicker,
    textTriple,
    textContent,
    internalPageButton,
    meetTeam,
    featuredListing,
    // magazineSignup,
    areasServed,
    marketingCta,
    marketReportsPicker,
    ctaPicker,
    formPicker,
    textShort,
    textLong,
    tileSection,
    linkButton,
    fieldDefaults,
    formBox,
    formButton,
    formGroup,
    formSelect,
    formSlider,
    formText,
    formTextarea,
    formValidations,
  ]),
});
