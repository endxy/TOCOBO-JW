// src/util/footer.js
const img = (path) => `/img/${path}`;
import { FaInstagramSquare, FaYoutube } from "react-icons/fa";
import { RiKakaoTalkFill } from "react-icons/ri";

// 로고
export const logoData = {
  src: img("logo.svg"),
  alt: "TOCOBO 로고",
  href: "/",
};

// 회사 정보
export const companyData = [

];
export const footerLegal = {
  copyright: "COPYRIGHT© 2022 조이웍스앤코 ALL RIGHT RESERVED.",
  links: [
    { label: "이용약관", href: "/terms" },
    { label: "개인정보처리방침", href: "/privacy" },
    { label: "이용안내", href: "/guide" }
  ]
};
// 고객센터
export const customerCenterData = {
  title: "Customer Center",
  tel: { value: "070 - 4077- 5050", href: "tel:0263522410" },
  hours: "AM 10:00 - PM 6:00 (Lunch 12:00 - 13:00)",
  notice: "토, 일요일 및 공휴일 휴무",
  talk: { label: "1:1 TALK", href: "#" },
};

// 메뉴
export const footerMenus = [
  {
    title: "Brand",
    items: [
      { label: "Brand Story", href: "/brand-story" },
      { label: "Collection", href: "/collection" },
    ],
  },
  {
    title: "Shop",
    items: [
      { label: "All Product", href: "/shop" },
      { label: "MakeUp", href: "/shop/makeup" },
      { label: "Cleansing", href: "/shop/cleansing" },
      { label: "Skincare", href: "/shop/skincare" },
      { label: "Sun", href: "/shop/sun" },
      { label: "Lip", href: "/shop/lip" },
      { label: "Set/Etc", href: "/shop/etc" },
    ],
  },
  {
    title: "Promotion",
    items: [{ label: "Promotion", href: "/promotion" }],
  },
  {
    title: "Community",
    items: [
      { label: "Notice", href: "/notice" },
      { label: "FAQ", href: "/faq" },
      { label: "Review", href: "/review" },
      { label: "1:1 CS", href: "/cs" },
    ],
  },
];

export const socialLinks = [
  {
    id: "kakao",
    label: "KakaoTalk 채널",
    href: "https://pf.kakao.com/your-channel",
    icon: RiKakaoTalkFill
  },
  {
    id: "instagram",
    abel: "Instagram",
    href: "https://www.instagram.com/your-instagram",
    icon: FaInstagramSquare
  },
  {
    id: "youtube", 
    label: "YouTube",
    href: "https://www.youtube.com/@your-youtube",
    icon: FaYoutube
  },
];
