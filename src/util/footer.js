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
  "조이웍스앤코  대표 : 송윤섭",
  "주소 : 서울특별시 서초구 매헌로 16, 하이브랜드 패션관 5층(양재동)",
  "사업자등록번호 : 291-88-01393  [사업자정보확인]",
  "통신판매업신고 :  2024-서울강남-04439",
  "TEL : 02-6352-2410  E-MAIL : help@thepicton.com",
  "기업 문의 :  info@joyworksnco.com ",
  "마케팅 협업 문의 : marketing@joyworksnco.com",
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
  tel: { value: "02-6352-2410", href: "tel:0263522410" },
  hours: "AM 10:00 - PM 5:00 (Lunch 12:00 - 13:00)",
  notice: "토, 일요일 및 공휴일 휴무",
  talk: { label: "1:1 TALK", href: "#" },
};

// 메뉴
export const footerMenus = [
  {
    title: "Brand",
    items: [
      { label: "LADY", href: "/brand-story" },
      { label: "FOR THE HOME", href: "/collection" },
      { label: "SLOW ALLEE", href: "/collection" },
    ],
  },
  {
    title: "Shop",
    items: [
      { label: "All Product", href: "/shop" },
      { label: "Bed", href: "/shop/makeup" },
      { label: "Desk", href: "/shop/cleansing" },
      { label: "Sofa", href: "/shop/skincare" },
      { label: "Dress Room", href: "/shop/sun" },
    ],
  },
  {
    title: "Career",
    items: [
            { label: "Recrult", href: "/Recrult" },
            { label: "Location", href: "/Location" }],
  },
  {
    title: "Community",
    items: [
      { label: "Notice", href: "/notice" },
      { label: "PR/News", href: "/PR/News" },
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