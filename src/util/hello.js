const img = (path) => `/img/${path}`;
export const helloData = {

  media: {
    type: "image",                     // "image" | "video"
    src: img("tocobosun_final_s.gif"),   // public 폴더 기준
    alt: "Pink square demo image",
    radius: 24                         // 이미지 둥근 모서리(px)
  },

  
  title: "Follow <br/> Your Intuition",
  description:
    "조이웍스엔코는 온라인 인테리어 가구를 시작으로 <br/> 가전제품과 스포츠 유통 시장까지 아우르는<br/> 종합 라이프 스타일 기업입니다.",
  cta: {
    label: "MEET",
    href: "/about"
  }
};


