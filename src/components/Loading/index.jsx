import "./styles.css";

const Loading = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      width="100"
      height="100"
    >
      <rect
        fill="#4463D5"
        stroke="#4463D5"
        strokeWidth="15"
        width="30"
        height="30"
        x="25"
        y="85"
      >
        <animate
          attributeName="opacity"
          calcMode="spline"
          dur="2s"
          values="1;0;1"
          keySplines=".5 0 .5 1;.5 0 .5 1"
          repeatCount="indefinite"
          begin="-0.4s"
        />
      </rect>

      <rect
        fill="#4463D5"
        stroke="#4463D5"
        strokeWidth="15"
        width="30"
        height="30"
        x="85"
        y="85"
      >
        <animate
          attributeName="opacity"
          calcMode="spline"
          dur="2s"
          values="1;0;1"
          keySplines=".5 0 .5 1;.5 0 .5 1"
          repeatCount="indefinite"
          begin="-0.2s"
        />
      </rect>

      <rect
        fill="#4463D5"
        stroke="#4463D5"
        strokeWidth="15"
        width="30"
        height="30"
        x="145"
        y="85"
      >
        <animate
          attributeName="opacity"
          calcMode="spline"
          dur="2s"
          values="1;0;1"
          keySplines=".5 0 .5 1;.5 0 .5 1"
          repeatCount="indefinite"
          begin="0s"
        />
      </rect>
    </svg>
  );
};

export default Loading;
