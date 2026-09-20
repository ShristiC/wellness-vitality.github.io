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
                title="Wellness n Vitality | Functional Medicine Health Coaching"
                description="Remote-first functional medicine health coaching with Anita Chitlangia. Reverse and manage Type II Diabetes, chronic pain, weight, and gut health through sustainable lifestyle change. Book a free discovery call."
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