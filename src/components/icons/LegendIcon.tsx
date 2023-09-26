const LegendIcon = ({ fill }: { fill: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="8"
      height="9"
      viewBox="0 0 8 9"
      fill="none"
    >
      <circle cx="4" cy="4.5" r="4" fill={fill} />
    </svg>
  );
};

export default LegendIcon;
