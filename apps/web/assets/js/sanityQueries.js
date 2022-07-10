import { groq } from '@nuxtjs/sanity'
// TODO: Clean up Query
export const mainPage = (paramName) => groq`*[ _id == $${paramName} ]{
  title,
  slug,
  "pageComponents": components[]{
      ...,
      _type == 'bannerContent' => {
        "bannerComponents": bannerComponents[]{
          ...,
          _type == 'linkButton' => {
            ...,
            "slugType": internalLink->{
              "cta": ctaSlug.current
            }
          }
        },
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
      _type == 'tileSection' => {
        "tilesSection": tilesWrapper[]{
          _type == 'tile' => {
            _type,
            _key,
            tileText,
            "imgUrl": tileImage.asset->{...}
          },
        },
        ...,
      }
    }
}`
