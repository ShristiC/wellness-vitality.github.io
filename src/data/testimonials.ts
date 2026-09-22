// Shared testimonial data. Used by the Testimonials page (featured video +
// horizontal preview row) and the full Testimonials gallery page. Keep this as
// the single source of truth so both stay in sync.

export interface TestimonialVideo {
    title: string;
    description: string;
    thumbnailTitle: string;
    tag: string;
    /** YouTube video id (may include a "?si=..." suffix). */
    videoId: string;
    /** Human month/year label, e.g. "April 2026". */
    date: string;
}

export const testimonialVideos: TestimonialVideo[] = [
    {
        title: "Avoided Stomach Surgery within 4 months",
        description: `At 74, Gloria was facing stomach surgery. Four months later, she told her surgeon she didn’t need it.
For over a decade, severe digestive pain kept her from eating basic foods like nuts and raw vegetables. After seeing scarring on her endoscopy, surgery seemed like the only road left.
She decided to give natural gut healing a chance first.
Four months into her personalized nutrition plan:
•⁠  ⁠Small intestine surgery cancelled
•⁠  ⁠Eating nuts, and raw veggies again with zero pain
•⁠  ⁠Acid reflux and severe stomach aches completely gone
•⁠  ⁠Arthritis pain relieved and bladder control restored
•⁠  ⁠Sleeping through the night and waking up refreshed
As Gloria says: "Age is just a number... I’m getting a new lease on life."
Everything starts in the gut. When you give your body the right environment to heal, real change is possible at any age.
`,
        thumbnailTitle: "Gloria's Journey",
        tag: "Avoided Surgery & Arthrtitis & Sleep",
        videoId: "Og9yT9MYmGs",
        date: "April 2026",
    },
    {
        title: "Lost 12lbs, Reversed Pre-Diabetes Symptoms, and Off Cholesterol Medication",
        description: "Meet Karen, she lost 12lbs, reversed pre-diabetes symptoms, and got off cholesterol medication. She stopped using Atorvastatin. Blood Pressure medicine got reduced from 20mg to 5mg. She no longer has Acid Reflux symptoms either.",
        thumbnailTitle: "Karen's Journey",
        tag: "Weight Loss & Pre-Diabetes & Cholesterol",
        videoId: "BMhv-ZdZVYg",
        date: "August 2026"
    },
    {
        title: "In 30 Days - I had Regular Bowel Movement after 20 years",
        description: "Meet Cameron, who had acute constipation for 2 decades, acid reflux, knee pain, and brain fog. In a month, all of it has been reversed.",
        thumbnailTitle: "Cameron's Journey",
        tag: "Constipation, Acid Reflux & Knee Pain",
        videoId: "YzLEwxfVGQ4?si=rD0atdX03HAm2dDi",
        date: "May 2025"
    },
    // {
    //     title: "I am Not Internalizing the Saddness in the World. I now have a Brighter Outlook in Life",
    //     description: "Meet Suzan Dimon, who stopped taking allergy shots, reduced steroid sprays, stopped taking cholestorl medication, eliminated muscle scramps, and lost 15 pounds.",
    //     thumbnailTitle: "Suzan's Journey",
    //     tag: "Allergies, Cholesterol & Weight Loss",
    //     videoId: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2FWellnessnVitality%2Fvideos%2F3983651408538457%2F&show_text=false&width=476&t=0",
    //     date: "April 2025"
    // }, // need youtube
    {
        title: "I Reveresed my Type II Diabetes",
        description: "Meet Sonal, who reversed her Type II Diabetes within weeks.",
        thumbnailTitle: "Sonal's Story",
        tag: "Type II Diabetes",
        videoId: "kPhsQI_eBRk?si=cTB68ym-1AkWnmWM",
        date: "January 2025"
    },
    {
        title: "I lost 15lbs, and my Cholesterol Levels Reduced Significantly",
        description: "Meet Amit, who learned how to manage his lifestyle and food, leading to life changes that felt so difficult before.",
        thumbnailTitle: "Amit's Journey",
        tag: "Cholesterol & Weight Loss",
        videoId: "52I-bTy2mMU?si=53sFFiZby-dZ1WFm",
        date: "June 2024"
    },
    {
        title: "My 40 Day Report Card",
        description: "Meet Satish, who reflects on his 40 day journey with Wellness & Vitality and achieves unimagined success in reducing Insulin Medication with Type II Diabetes.",
        thumbnailTitle: "Satish's Story",
        tag: "Type II Diabetes & Weight Loss",
        videoId: "j6GY5FYBKlk",
        date: "August 2023"
    },
    {
        title: "Managed my Type II Diabetes without Medication",
        description: "Meet Indira, who is 72 years old and has managed her Type II Diabetes without medication, and is feeling more energetic.",
        thumbnailTitle: "Indira's Story",
        tag: "Type II Diabetes",
        videoId: "kPhsQI_eBRk?si=Qa13pl7plCIllo-s",
        date: "August 2023"
    },
    {
        title: "15 days - My Migrane Pain Went Away",
        description: "For 18 years, Shyam was struggling with severe migrane pains. Within 15 days, his migrane is gone and his sugar levels went down by 132 points.",
        thumbnailTitle: "Shyam's Journey",
        tag: "Migrane and Type II Diabetes",
        videoId: "E6h3_ut6bEg",
        date: "April 2023"
    },
    {
        title: "3 months - I Reversed my Type II Diabetes",
        description: "Meet Rahul, who reversed his Type II Diabetes, lost 11lbs, and is feeling healthier overall.",
        thumbnailTitle: "Rahul's Journey",
        tag: "Type II Diabetes & Weight Loss",
        videoId: "-9tIFR7MiGs?si=iM1gfftC7adGd3Ap",
        date: "Jan 2023"
    },
    {
        title: "How Wellness & Vitality helped my Arthritis",
        description: "Meet Catherine, who regained her life back from Severe Pain due to Arthritis and High Inflammation.",
        thumbnailTitle: "Catherine's Journey",
        tag: "Arthritis & Inflammation",
        videoId: "iS0Z10eWd9o",
        date: "August 2022"
    },
    {
        title: "I Reversed My Type II Diabetes",
        description: "Meet Vikas, who reversed his Type II Diabetes and is off all his medications.",
        thumbnailTitle: "Vikas's Journey",
        tag: "Type II Diabetes",
        videoId: "2VNg5YESa9o?si=SMXQrP7VO3pSHNSH",
        date: "April 2022"
    },
    {
        title: "How Wellness & Vitality regained my Self-Confidence",
        description: "Meet Hasita, who struggled with her self-confidence due to obesity and weight. She meets her goals in sustainable ways and is on the journey to regain her life back",
        thumbnailTitle: "Hasita's Journey",
        tag: "Weight Loss",
        videoId: "ZwkWNf4cI_c",
        date: "March 2022"
    },
    {
        title: "I regained my Stamina and My Rashes were Reduced by 50%",
        description: "Meet Shefali, who regained her stamina for exercising and was finally able to address skin rashes on her face and hands.",
        thumbnailTitle: "Shefali's Journey",
        tag: "Skin Rashes & Stamina",
        videoId: "T_-S6ZJo-cs?si=SER8iqRAhdYpqacR",
        date: "Nov 2021"
    },
    {
        title: "In 90 Days - I Reduced Medication by 75%",
        description: "Meet Radhe. He was suffering from diabetes since long and in 3 months turned his life around so drastically that his doctor was also shocked!",
        thumbnailTitle: "Radhe's Journey",
        tag: "Type II Diabetes",
        videoId: "BlqDOuy4M5s?si=IZxXL_r7z-5ahe15",
        date: "Nov 2021"
    },
];
