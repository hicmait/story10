import { useState } from "react";

import NewsletterArticle from "./NewsletterArticle";
import { Fetching } from "./Fetching";

// Mock article data
const mockArticle = {
  id: 1,
  title:
    "How to Create Dynamic, High-Performance React Components That Scale Across Applications",
  url: "how-to-use-react-effectively-2025",
  publishedAt: "2025-06-25 10:30:00",
  main_media: {
    fullMediaUrl:
      "https://s3.tamtam.pro/production/storage/media/IMAGE/25434/d0dfe8e1c3a360dff2d7ce462959815bde8c9a7d.jpeg",
    webPath:
      "storage/uploads/medias/d0dfe8e1c3a360dff2d7ce462959815bde8c9a7d.jpeg",
  },
  author: [
    {
      firstName: "Jane",
      lastName: "Doe",
      enableAvatar: true,
      avatarUrl: "https://randomuser.me/api/portraits/women/44.jpg",
      avatar: "img/authors/jane.jpg",
    },
  ],
  organization: {
    abbreviation: "TTP",
    name: "Tech Training Platform",
  },
  category: {
    colorCode: "#18a0fb",
    nameEn: "Technology",
    nameFr: "Technologie",
    nameNl: "Technologie",
  },
  nlRecipientsOrgs: [9],
  newsletterPeriods: {
    9: [
      {
        period: "WEEK",
        periodNumber: 26,
        year: 2025,
      },
      {
        period: "MONTH",
        periodNumber: 6,
        year: 2025,
      },
    ],
  },
  isProgrammedNl: 1,
  chains: [
    {
      nameEn: "Chain Name",
      nameFr: "Nom de la chaîne",
      nameNl: "Ketennaam",
      mediaChain: [
        {
          language: "en",
          avatarUrl: "https://randomuser.me/api/portraits/men/46.jpg",
          avatar: "img/chains/chain1.jpg",
        },
      ],
    },
  ],
};

const mockNLPlans = [
  { label: "Standard", value: "STANDARD" },
  { label: "Lite", value: "LITE" },
];

export default {
  title: "Blog/NewsletterArticle",
  component: NewsletterArticle,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ padding: "2rem", background: "#f8f9fa" }}>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </div>
    ),
  ],
};

export const Default = () => {
  const [articles, setArticles] = useState([]);
  const [articlesByPlanAndPeriod, setArticlesByPlanAndPeriod] = useState([]);
  // Knobs for interactive props
  const language = "en";
  const checkedPlans = true;
  const inAccordion = false;
  const navCommunity = { id: 9 };
  const NL_PLANS = mockNLPlans;

  // Minimal mock utils
  const getCurrentPeriod = () => [null, new Date(), new Date()];
  const formatDate = (date) => new Date(date).toISOString();
  const formatEndDate = (date) => new Date(date).toISOString();

  return (
    <div className="grid-container">
      <div className="grid-x">
        <div className="cell small-12 medium-6">
          <NewsletterArticle
            article={mockArticle}
            articles={articles}
            setArticles={setArticles}
            articlesByPlanAndPeriod={articlesByPlanAndPeriod}
            setArticlesByPlanAndPeriod={setArticlesByPlanAndPeriod}
            nbArticles={articles.length}
            checkedPlans={checkedPlans}
            NL_PLANS={NL_PLANS}
            navCommunity={navCommunity}
            getCurrentPeriod={getCurrentPeriod}
            formatDate={formatDate}
            formatEndDate={formatEndDate}
            period="WEEK"
            year={2025}
            month={6}
            periodConfig="W1"
            language={language}
            apiBaseUrl=""
            inAccordion={inAccordion}
          />
        </div>
      </div>
    </div>
  );
};

export const Loading = () => (
  <div className="grid-container">
    <div className="grid-x">
      <div className="cell small-12 medium-6">
        <Fetching />
      </div>
    </div>
  </div>
);
Loading.story = {
  name: "Fetching",
};
