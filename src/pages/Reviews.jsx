import Seo from '../components/layout/Seo';
import PageHero from '../components/ui/PageHero';
import Section from '../components/ui/Section';
import CtaBand from '../components/ui/CtaBand';
import ReviewsList, { GoogleReviewsButton } from '../components/sections/ReviewsList';
import { reviews } from '../data/reviews';

export default function Reviews() {
  return (
    <>
      <Seo title="Customer Reviews | Manchester Garage" path="/reviews" description="Read customer reviews of Motor Fix Autos, the independent garage and German car specialist in Ardwick Green, Manchester M13." />
      <PageHero eyebrow="Reviews" title="What customers say" intro="Our reviews come from real customers on our Google Business profile." >
        <GoogleReviewsButton className="btn-primary lg:float-right" />
      </PageHero>
      <Section>
        <div className="container-x">
          <ReviewsList />
          {reviews.length > 0 && <p className="mt-8 text-sm text-text-mute">Reviews are copied from Google with permission and shown unedited.</p>}
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
