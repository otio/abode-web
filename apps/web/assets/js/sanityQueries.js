import { groq } from '@nuxtjs/sanity'
export const mainPage = (paramName) => groq`*[ _id == $${paramName} ]{
  title,
  slug,
  "pageComponents": components[]{
      ...,
      _type == 'bannerContent' => {
        bannerComponents,
        "imgUrl": bannerImage.asset->{...}
      },
      _type == 'meetTeam' => {
        introText,
        "imgUrl": teamImage2.asset->{...},
        "page": meetTeamPage{
          ...,
          linkToPage->{...}
        }
      },
      _type == 'featuredListing' => {
        ...,
        "imgUrl": listingImage.asset->{...}
      },
      _type == 'reviewPicker' => {
        clientReviews[]->{
          ...,
          "imgUrl": reviewImage.asset->{...},
        }
      },
      _type == 'magazineSignup' => {
        ...,
        promoImage,
        signup->{...}
      },
      _type == 'areasServed' => {
        _key,
        _type,
        areaPages[]->{...}
      },
      _type == 'marketingCta' => {
        ...,
        ctaCapture->{...}
      },
      _type == 'ctaPicker' => {
        "form": callToActionForms[0]->{
          ...,
          "imgUrl":ctaImage.asset->{...},
        }
      },
    }
}`
