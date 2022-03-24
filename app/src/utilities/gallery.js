const gallery = () => {
  const images = [
    { src: "/example03.jpg" },
    { src: "/example04.jpg" },
    { src: "/example05.jpg" },
    { src: "/example06.jpg" },
    { src: "/example04.jpg" },
    { src: "/example05.jpg" },
    { src: "/example06.jpg" },
    { src: "/example03.jpg" },
    { src: "/example05.jpg" },
    { src: "/example06.jpg" },
  ];
  return [...images, ...images]
    .sort(() => Math.random() - 0.5)
    .map((src) => ({ ...src, id: Math.random() }));
};

export default gallery;
