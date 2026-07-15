import AmazonImg from "../assets/logos/amazon.svg";
import DribbbleImg from "../assets/logos/dribbble.svg";
import HubSpotImg from "../assets/logos/hubSpot.svg";
import NotionImg from "../assets/logos/notion.svg";
import NetflixImg from "../assets/logos/netflix.svg";
import ZoomImg from "../assets/logos/zoom.svg";

import searchImg from "../assets/cardService/search.svg";
import clickImg from "../assets/cardService/click.svg";
import socialImg from "../assets/cardService/social.svg";
import emailImg from "../assets/cardService/email.svg";
import contentImg from "../assets/cardService/content.svg";
import analyticsImg from "../assets/cardService/analytics.svg";

import JohnSmithImg from "../assets/cardTeam/JohnSmith.svg";
import JaneDoeImg from "../assets/cardTeam/JaneDoe.svg";
import MichaelBrownImg from "../assets/cardTeam/MichaelBrown.svg";
import EmilyJohnsonImg from "../assets/cardTeam/EmilyJohnson.svg";
import BrianWilliamsImg from "../assets/cardTeam/Brian Williams.svg";
import SarahKimImg from "../assets/cardTeam/SarahKim.svg";

interface Company {
  id: number;
  name: string;
  src: string;
}

export const COMPANIES: Company[] = [
  { id: 1, name: "Amazon", src: AmazonImg },
  { id: 2, name: "Dribbble", src: DribbbleImg },
  { id: 3, name: "HubSpot", src: HubSpotImg },
  { id: 4, name: "Notion", src: NotionImg },
  { id: 5, name: "Netflix", src: NetflixImg },
  { id: 6, name: "Zoom", src: ZoomImg },
];

interface Service {
  id: number;
  titleTop: string;
  titleBottom: string;
  src: string;
  bgText: string;
  cardColor: string;
}

export const SERVICES: Service[] = [
  {
    id: 1,
    titleTop: "Search engine",
    titleBottom: "optimization",
    src: searchImg,
    bgText: "var(--accent)",
    cardColor: "var(--grey)",
  },
  {
    id: 2,
    titleTop: "Pay-per-click",
    titleBottom: "advertising",
    src: clickImg,
    bgText: "var(--white)",
    cardColor: "var(--accent)",
  },
  {
    id: 3,
    titleTop: "Social Media",
    titleBottom: "Marketing",
    src: socialImg,
    bgText: "var(--white)",
    cardColor: "var(--black)",
  },
  {
    id: 4,
    titleTop: "Email",
    titleBottom: "Marketing",
    src: emailImg,
    bgText: "var(--accent)",
    cardColor: "var(--grey)",
  },
  {
    id: 5,
    titleTop: "Content",
    titleBottom: "Creation",
    src: contentImg,
    bgText: "var(--white)",
    cardColor: "var(--accent)",
  },
  {
    id: 6,
    titleTop: "Analytics and",
    titleBottom: "Tracking",
    src: analyticsImg,
    bgText: "var(--accent)",
    cardColor: "var(--black)",
  },
];

interface Team {
  id: number;
  src: string;
  name: string;
  position: string;
  text: string;
}

export const TEAM: Team[] = [
  {
    id: 1,
    src: JohnSmithImg,
    name: "John Smith",
    position: "CEO and Founder",
    text: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
  },
  {
    id: 2,
    src: JaneDoeImg,
    name: "Jane Doe",
    position: "CEO and Founder",
    text: "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
  },
  {
    id: 3,
    src: MichaelBrownImg,
    name: "Michael Brown",
    position: "Senior SEO Specialist",
    text: "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
  },
  {
    id: 4,
    src: EmilyJohnsonImg,
    name: "Emily Johnson",
    position: "PPC Manager",
    text: "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
  },
  {
    id: 5,
    src: BrianWilliamsImg,
    name: "Brian Williams",
    position: "Social Media Specialist",
    text: "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
  },
  {
    id: 6,
    src: SarahKimImg,
    name: "Sarah Kim",
    position: "Content Creator",
    text: "2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries",
  },
];

interface Process {
  id: number;
  title: string;
  text: string;
}

export const PROCESS: Process[] = [
  {
    id: 1,
    title: "Consultation",
    text: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    id: 2,
    title: "Research and Strategy Development",
    text: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    id: 3,
    title: "Implementation",
    text: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    id: 4,
    title: "Monitoring and Optimization",
    text: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    id: 5,
    title: "Reporting and Communication",
    text: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    id: 6,
    title: "Continual Improvement",
    text: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
];

interface Review {
  id: number;
  name: string;
  position: string;
  text: string;
}

export const REVIEWS: Review[] = [
  {
    id: 1,
    name: "John Smith",
    position: "Marketing Director at XYZ Corp",
    text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
  },
  {
    id: 2,
    name: "Stef Li",
    position: "Marketing at NI Corp",
    text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
  },
  {
    id: 3,
    name: "Nick Baker",
    position: "Designer at U Corp",
    text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
  },
  {
    id: 4,
    name: "Ryan Wayne",
    position: "Marketing Director at XYZ Corp",
    text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
  },
  {
    id: 5,
    name: "Alex Kim",
    position: "Founder at WER Corp",
    text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
  },
];
