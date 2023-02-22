const Loader = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height=" 28"
    viewBox="0 0 28 28"
    fill="none"
  >
    <path
      fill="currentColor"
      d="M14 28c7.732 0 14-6.268 14-14h-2.24c0 6.495-5.265 11.76-11.76 11.76S2.24 20.495 2.24 14 7.505 2.24 14 2.24V0C6.268 0 0 6.268 0 14s6.268 14 14 14Z"
    />
    <animateTransform
      attributeType="xml"
      attributeName="transform"
      type="rotate"
      from="0 0 0"
      to="360 0 0"
      dur="1s"
      additive="sum"
      repeatCount="indefinite"
    />
  </svg>
);

export default Loader;
