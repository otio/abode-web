<template>
  <main>
    <HeroSection></HeroSection>
    <MeetTeam></MeetTeam>
    <FeaturedListing></FeaturedListing>
    <ClientReviews></ClientReviews>
    <AreasServed></AreasServed>
    <MarketingHouseEmail></MarketingHouseEmail>
    <Footer></Footer>
  </main>
</template>

<script>
import HeroSection from '../components/home/HeroSection'
import MeetTeam from '../components/home/MeetTeam'
import FeaturedListing from '../components/home/FeaturedListing'
import ClientReviews from '../components/home/ClientReviews'
import AreasServed from '../components/home/AreasServed'
import MarketingHouseEmail from '../components/home/MarketingHouseEmail'
import Footer from '../components/home/Footer'
export default {
  components: {
    HeroSection,
    MeetTeam,
    FeaturedListing,
    ClientReviews,
    AreasServed,
    MarketingHouseEmail,
    Footer
  },
}
</script>

<style lang="scss"></style>
