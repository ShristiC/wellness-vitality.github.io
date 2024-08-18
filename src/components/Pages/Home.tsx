import CoverComponent from "../CoverComponent";
import Footer from "../Footer";
import Heading from "../Heading";
import InformationComponent from "../InformationComponent";
import PainPoints from "../PainPoints";
import SpecialtiesAndServices from "../SpecialtiesAndServices";
import TestimonialsFeatureComponent from "../TestimonialsFeatureComponent";

export default function HomePage() {
    return (
        <>
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