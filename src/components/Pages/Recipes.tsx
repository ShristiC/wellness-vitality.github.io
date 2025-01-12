import styled from "@emotion/styled";
import { useState } from "react";
import AlmondCake from "../../assets/gallery/Almond and Coconut Fruit Cake.jpg";
import BesanChilla from "../../assets/gallery/Besan Vegge Chilla.jpg";
import BreakfastBowl from "../../assets/gallery/Breakfast Bowl.jpg";
import EggCurry from "../../assets/gallery/Egg Curry.jpg";
import FruitPlatter from "../../assets/gallery/Fruit Palette.jpg";
import GFWaffles from "../../assets/gallery/Gluten Free Cauliflower Waffles.jpg";
import GFPasta from "../../assets/gallery/Gluten Free Pasta.jpg";
import GreenSmoothe from "../../assets/gallery/Green Smoothies.jpg";
import HomeMadeGranola from "../../assets/gallery/Homemade Granola.jpg";
import Idlis from "../../assets/gallery/Idlis.jpg";
import LentilPasta from "../../assets/gallery/Lentil Pasta.jpg";
import Lychee from "../../assets/gallery/Orange and White.jpg";
import OrangeSmoothe from "../../assets/gallery/Orange Smoothie.jpg";
import QuinoaVeggieBowl from "../../assets/gallery/Quinoa Vegge Bowl.jpg";
import RainbowPlatter from "../../assets/gallery/Rainbow Platter.jpg";
import Smoothie from "../../assets/gallery/Smoothie.jpg";
import ThaiCurry from "../../assets/gallery/Thai Curry.jpg";
import VegNoodles from "../../assets/gallery/Veg Noodles.jpg";
import VegPulao from "../../assets/gallery/Vege Pulao.jpg";
import VegLasagna from "../../assets/gallery/Vegge lasagna.jpg";
import VegTapioca from "../../assets/gallery/Vegges with Tapioca.jpg";
import WatermelonJuice from "../../assets/gallery/Watermelon Chia Juice.jpg";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { darkGreen } from "../Core/Colors";
import { BorderRadius, PaddingOrMargin, Row } from "../Core/Layout";
import { ContentText, DisclaimerText, Title } from "../Core/Typography";
import Footer from "../Footer";
import Heading from "../Heading";
import TestimonialsFeatureComponent from "../TestimonialsFeatureComponent";

export default function RecipesPage() {
    const [_, isMobile] = useWindowDimensions();
    const items = [
        {
            image: VegLasagna,
            title: "Dairy Free, Vegetarian Lasagna",
            ingredients: "Bellpeppers, Corn, Pineapples, Herbs",
            alt: "Lasagna with Bellpeppers, Corn, Pineapples, and Herbs."
        },
        {
            image: AlmondCake,
            title: "Almond and Coconut Fruit Cake",
            ingredients: "Almond Flour, Dried Fruits and Nuts, Coconut Flakes",
            alt: "Loaf of Bread with Slices. On the inside you can see almonds and dried fruit.",
        },
        {
            image: BesanChilla,
            title: "Gluten Free and Dairy Free Vegetarian Chilla (Pancake)",
            ingredients: "onions, bellpeppers, carrots, cilantro, chickpea flour. Tomato Sauce and Cilantro Sauce.",
            alt: "3 Half Slice Chillas on a plate with 2 sauces"
        },
        {
            image: BreakfastBowl,
            title: "Gluten Free Oatmeal",
            ingredients: "gluten free rolled oats, raisins, strawberries, almonds, walnuts, milk",
            alt: "Breakfast bowl of oatmeal with fruits and nuts"
        },
        {
            image: EggCurry,
            title: "Gluten Free and Dairy Free Indian Egg Curry",
            ingredients: "onions, tomatoes, garlic, ginger, cilantro, garam masala, bellpeppers, eggs",
            alt: "A bowl of egg curry with indian spices and cooked vegetables"
        },
        {
            image: FruitPlatter,
            title: "Colorful Fruit Platter",
            ingredients: "mangoes, plums, rasberry, blackberry, blueberry, apples, mint leaves, papaya",
            alt: "A Plate with 3 sections. Plums and Mangoes in top left, Berries in top right, and the rest at the bottom"
        },
        {
            image: GFWaffles,
            title: "Gluten Free Waffles",
            ingredients: "Cauliflower flour, herbs, and basil",
            alt: "4 pieces of brown waffles spiced with herbs"
        },
        {
            image: GFPasta,
            title: "Gluten Free Pasta",
            ingredients: "zucchini, basil, broccilini, tomatoes, onions, garlic, spinach, chickpea pasta",
            alt: "Vegetarian pasta with sauce going over all the vegetables and fluffy pasta"
        },
        {
            image: GreenSmoothe,
            title: "Dairy Free Green Smoothie",
            ingredients: "Avocado, Spinach, Zucchini, Kale, Water",
            alt: "A glass with green smoothie filled to the brim"
        },
        {
            image: HomeMadeGranola,
            title: "Homemade Gluten Free and Dairy Free Granola",
            ingredients: "roasted gluten free rolled oats, roasted coconut shavings, roasted assortment of nuts, maple syrup",
            alt: "A tray of homemaade roasted granola with assortment of the ingredients"
        },
        {
            image: Idlis,
            title: "Gluten Free and Dairy Free Idlis (Rice Cakes) with Vegetable Sambhar and Mint Coconut Sauce",
            ingredients: "raghi, herbs, tomatoes, onions, garlic, ginger, sambhar masala, curry leaves, mustard seeds, coconut, roasted dal, mustard seeds",
            alt: "A plate with 2 Gluten Free idlis, a vegetable indian curry, and green mint and coconut sauce",
        },
        {
            image: LentilPasta,
            title: "Gluten Free and Dairy Free Lentil Pasta",
            ingredients: "lentil pasta, onions, tomatoes, bellpeppers, olive oil, zuchini, mushrooms",
            alt: "A pot of pasta with colorful vegetables and a serving spoon"
        },
        {
            image: Lychee,
            title: "Orange and White Fruit Platter",
            ingredients: "lychee, raddish, mangoes",
            alt: "Fruit platter with only orange and white colored fruits on a steel plate with a fork."
        },
        {
            image: OrangeSmoothe,
            title: "Dairy Free Orange Smoothie",
            ingredients: "carrots, oranges, water",
            alt: "A glass of orange smoothie filled to the brim"
        },
        {
            image: QuinoaVeggieBowl,
            title: "Gluten Free and Dairy Free Quinoa Veggie Bowl",
            ingredients: "quinoa, black eyed peas, cauliflower, bell peppers, peas, asparagus, spices",
            alt: "A bowl of veggies with quinoa that looks colorful"
        },
        {
            image: RainbowPlatter,
            title: "Rainbow Food Platter",
            ingredients: "raddish, snap peas, strawberries, mangoes, blueberries, rasberries, cucumber, yellow bellpepper, cherry tomatoes, olives, artichoke",
            alt: "Colorful Platter of Fruits and Exotic Vegetables",
        },
        {
            image: Smoothie,
            title: "Dairy Free Stawberry and Banana Smoothie",
            ingredients:"strawberry, rasberry, banana, almond milk",
            alt: "A glass of pink smoothie filled to the brim"
        },
        {
            image: ThaiCurry,
            title: "Yellow Thai Curry",
            ingredients: "bellpeppers, broccoli, tomato, coconut milk, sticky rice, yellow thai curry paste",
            alt: "A bowl of vegetable curry with sticky rice"
        },
        {
            image: VegNoodles,
            title: "Dairy Free Vegetable Noodles",
            ingredients: "green beans, carrots, peas, corn, cauliflower, indian chinese noodles",
            alt: "a colorful plate of noodles with vegetables"
        },
        {
            image: VegPulao,
            title: "Gluten Free Vegetable Pulao",
            ingredients: "pulao (puffed rice), peas, carrots, mustard seeds, turmeric, green beans",
            alt: "a colorful plate of pulao with indian spices"
        },
        {
            image: VegTapioca,
            title: "Gluten Free Vegetable Tapioca",
            ingredients: "bellpeppers, peanuts, roasted tapioca, tomatoes, spices",
            alt: "Tapioca bowl with mostly bellpeppers"
        },
        {
            image: WatermelonJuice,
            title: "Watermelon Juice with Chia Seeds",
            ingredients: "Watermelon, Chia Seeds",
            alt: "A glass of watermelon juice with puffed chia seeds at the brim"
        }
    ];

    const [currIndex, setCurrIndex] = useState(0);

    const handleGalleryItemClick = (index: number) => {
        setCurrIndex(index);
    }
    
    return (
        <>
            <Heading />
            <Content>
                <InnerContent>
                    <Title $isMobile={isMobile}>Gallery</Title>
                    <ContentText $isMobile={isMobile}>Healthy eating doesn't have to be bland -- check out these tasty dishes, reccommendations, and success stories!</ContentText>
                    <Gallery>
                        <CoverImgContainer>
                            <CoverImg
                                src={items[currIndex].image}
                                alt={items[currIndex].alt}
                            />
                        </CoverImgContainer>
                        <ContentText $isMobile={isMobile} style={{textAlign: "center"}}>{items[currIndex].title}</ContentText>
                        <DisclaimerText $isMobile={isMobile} style={{textAlign: "center"}}>{items[currIndex].ingredients}</DisclaimerText>
                        <GalleryRow>
                            {items.map((food, i) => {
                                return (
                                    <GalleryItem id={`gallery_item_${i}`} src={food.image} alt={food.alt} onClick={() => handleGalleryItemClick(i)}/>
                                );
                            })}
                        </GalleryRow>
                    </Gallery>
                </InnerContent>
            </Content>
            <TestimonialsFeatureComponent />
            <Footer />
        </>
    );
}

const Content = styled.div`
    display: block;
    position: relative;
    top: 110px;
    padding: ${PaddingOrMargin.extraLarge}px 10% ${PaddingOrMargin.extraLarge * 3}px 10%;
    max-width: 100%;
    overflow-x: clip;
    margin-bottom: ${PaddingOrMargin.large * 3}px;
`;

const InnerContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${PaddingOrMargin.extraLarge}px;
`;

const CoverImgContainer = styled.div`
  width: 500px; /* Full width of the parent container */
  height: 400px; /* Fixed height for the Cover component */
  display: flex;
  justify-content: center; /* Center the image horizontally */
  align-items: center; /* Center the image vertically */
  align-self: center;
  background-color: black; /* Black background behind the image */
  overflow: hidden; /* Ensure no overflow from images */
  border-radius: ${BorderRadius.button}px; /* Rounded corners */
  margin: ${PaddingOrMargin.medium}px auto; /* Add space above and below the image */

  @media (max-width: 768px) {
    width: 90%; /* Adjust for mobile view */
    height: 40vh; /* Let height adjust based on content */
  }
`;

const CoverImg = styled.img`
  max-width: 100%; /* Scale the image to fit within the container width */
  max-height: 100%; /* Scale the image to fit within the container height */
  object-fit: contain; /* Maintain the aspect ratio, ensuring no cropping */
`;

const GalleryItem = styled.img`
    width: 130px;
    height: 120px;
    object-fit: cover;
    :hover {
        cursor: pointer;
        border: 2px solid ${darkGreen};
    }
`;

const GalleryRow = styled(Row)`
    overflow-x: auto;
    gap: 10px;
    margin-top: 40px;
`;

const Gallery = styled.div`
    padding: 20px;
`;