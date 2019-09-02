// @media (min-width: 576px) 36em { ... }

// // Medium devices (tablets, 768px and up)
// @media (min-width: 768px) 48em { ... }

// // Large devices (desktops, 992px and up)
// @media (min-width: 992px)  62em { ... }

// // Extra large devices (large desktops, 1200px and up)
// @media (min-width: 1200px) 75em { ... }

// // Massive Extra large devices (large desktops, 1400px and up)
// @media (min-width: 1600px) 100em { ... }

export default {
  // for mobile-first approach -> blank - desktop to mobile approach taken
  up() {},

  down(size) {
    const sizes = {
      xs: "36em",
      sm: "48em",
      md: "62em",
      lg: "75em",
      xl: "100em"
    };
    return `@media (max-width: ${sizes[size]})`;
  }
};
