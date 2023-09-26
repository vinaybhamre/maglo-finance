const TotalSpending = ({
  width,
  height,
}: {
  width: number;
  height: number;
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="21" cy="21.5" r="21" fill="#292642" />
      <path
        d="M29.3338 20.641V22.3577C29.3338 22.816 28.9672 23.191 28.5005 23.2077H26.8672C25.9672 23.2077 25.1422 22.5493 25.0672 21.6493C25.0172 21.1243 25.2172 20.6327 25.5672 20.291C25.8755 19.9743 26.3005 19.791 26.7672 19.791H28.5005C28.9672 19.8077 29.3338 20.1827 29.3338 20.641Z"
        fill="white"
      />
      <path
        d="M28.0587 24.4583H26.867C25.2837 24.4583 23.9503 23.2666 23.817 21.75C23.742 20.8833 24.0587 20.0166 24.692 19.4C25.2253 18.85 25.967 18.5416 26.767 18.5416H28.0587C28.3003 18.5416 28.5003 18.3416 28.4753 18.1C28.292 16.075 26.9503 14.6916 24.9587 14.4583C24.7587 14.425 24.5503 14.4166 24.3337 14.4166H16.8337C16.6003 14.4166 16.3753 14.4333 16.1587 14.4666C14.0337 14.7333 12.667 16.3166 12.667 18.5833V24.4166C12.667 26.7166 14.5337 28.5833 16.8337 28.5833H24.3337C26.667 28.5833 28.2753 27.125 28.4753 24.9C28.5003 24.6583 28.3003 24.4583 28.0587 24.4583ZM21.8337 19.625H16.8337C16.492 19.625 16.2087 19.3416 16.2087 19C16.2087 18.6583 16.492 18.375 16.8337 18.375H21.8337C22.1753 18.375 22.4587 18.6583 22.4587 19C22.4587 19.3416 22.1753 19.625 21.8337 19.625Z"
        fill="white"
      />
    </svg>
  );
};

export default TotalSpending;
