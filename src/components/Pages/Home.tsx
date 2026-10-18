import CoverComponent from "../CoverComponent";
import Footer from "../Footer";
import Heading from "../Heading";
import InformationComponent from "../InformationComponent";
import PainPoints from "../PainPoints";
import Seo from "../Seo";
import SpecialtiesAndServices from "../SpecialtiesAndServices";
import TestimonialsFeatureComponent from "../TestimonialsFeatureComponent";
import { businessSchema, serviceSchema, websiteSchema } from "../../seo/schema";

export default function HomePage() {
    return (
        <>
            <Seo
                title="Wellness n Vitality | Functional Medicine Nutrition Counselor & Health Coach"
                description="Anita Chitlangia is a Functional Medicine Nutrition Counselor and Certified Health Coach offering remote-first care. Reverse and manage Type II Diabetes, chronic pain, weight, and gut health through sustainable lifestyle change. Book a free discovery call."
                path="/"
                jsonLd={[businessSchema(), websiteSchema(), serviceSchema()]}
            />
            <Heading />
            <CoverComponent />
            <PainPoints />
            <InformationComponent />
            <SpecialtiesAndServices />
            <TestimonialsFeatureComponent />
            <Footer />
        </>
    );
}