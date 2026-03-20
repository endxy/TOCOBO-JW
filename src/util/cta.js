const img = (path) => `/img/${path}`;
export const categories = [
  {
    id: 61,
    slug: "make-up",
    name: "바우",
    href: "/category/make-up/61/",
    img: {
      src: img("cate-1.png"),
      alt: "메이크업",
    },
  },
  {
    id: 42,
    slug: "sun",
    name: "책상",
    href: "/category/sun/42/",
    img: {
      src: img("cate-2.png"),

      alt: "선케어",
    },
  },
  {
    id: 52,
    slug: "lip",
    name: "서랍장",
    href: "/category/lip/52/",
    img: {
      src: img("cate-3.png"),

      alt: "립케어",
    },
  },
  {
    id: 50,
    slug: "skincare",
    name: "침대",
    href: "/category/skincare/50/",
    img: {
      src: img("cate-4.png"),

      alt: "스킨케어",
    },
  },
  {
    id: 47,
    slug: "cleansing",
    name: "소파",
    href: "/category/cleansing/47/",
    img: {
      src: img("cate-5.png"),

      alt: "클렌징",
    },
  },
  {
    id: 28,
    slug: "setetc",
    name: "드레스룸",
    href: "/category/setetc/28/",
    img: {
      src: img("cate-6.png"),

      alt: "세트/기타",
    },
  },
];

export default categories;