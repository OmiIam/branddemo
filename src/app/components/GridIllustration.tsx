export function GridIllustration() {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 480 520"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-md lg:max-w-full"
      style={{ minHeight: '300px', maxHeight: '520px' }}
    >
      {/* Grid-based composition following Swiss design principles */}
      
      {/* Large primary block */}
      <rect
        x="0"
        y="0"
        width="240"
        height="240"
        stroke="#111111"
        strokeWidth="1"
        fill="none"
      />
      <rect
        x="16"
        y="16"
        width="208"
        height="208"
        fill="#0057FF"
      />
      
      {/* Secondary horizontal block */}
      <rect
        x="256"
        y="0"
        width="224"
        height="112"
        stroke="#111111"
        strokeWidth="1"
        fill="none"
      />
      <rect
        x="272"
        y="16"
        width="192"
        height="80"
        fill="#111111"
      />
      
      {/* Tertiary block with subdivision */}
      <rect
        x="256"
        y="128"
        width="224"
        height="112"
        stroke="#111111"
        strokeWidth="1"
        fill="none"
      />
      <line
        x1="368"
        y1="128"
        x2="368"
        y2="240"
        stroke="#E6E6E6"
        strokeWidth="1"
      />
      <rect
        x="272"
        y="144"
        width="80"
        height="80"
        fill="#F8F8F8"
        stroke="#111111"
        strokeWidth="1"
      />
      
      {/* Bottom left modular blocks */}
      <rect
        x="0"
        y="256"
        width="112"
        height="112"
        stroke="#111111"
        strokeWidth="1"
        fill="none"
      />
      <rect
        x="16"
        y="272"
        width="80"
        height="80"
        fill="#F8F8F8"
        stroke="#111111"
        strokeWidth="1"
      />
      
      <rect
        x="128"
        y="256"
        width="112"
        height="112"
        stroke="#111111"
        strokeWidth="1"
        fill="none"
      />
      <circle
        cx="184"
        cy="312"
        r="40"
        stroke="#111111"
        strokeWidth="1"
        fill="none"
      />
      
      {/* Tall vertical block */}
      <rect
        x="256"
        y="256"
        width="112"
        height="264"
        stroke="#111111"
        strokeWidth="1"
        fill="none"
      />
      <rect
        x="272"
        y="272"
        width="80"
        height="232"
        fill="#111111"
      />
      
      {/* Right side composition */}
      <rect
        x="384"
        y="256"
        width="96"
        height="96"
        stroke="#111111"
        strokeWidth="1"
        fill="none"
      />
      <line
        x1="384"
        y1="304"
        x2="480"
        y2="304"
        stroke="#E6E6E6"
        strokeWidth="1"
      />
      <line
        x1="432"
        y1="256"
        x2="432"
        y2="352"
        stroke="#E6E6E6"
        strokeWidth="1"
      />
      
      {/* Bottom accent blocks */}
      <rect
        x="0"
        y="384"
        width="240"
        height="136"
        stroke="#111111"
        strokeWidth="1"
        fill="none"
      />
      <rect
        x="16"
        y="400"
        width="64"
        height="104"
        fill="#0057FF"
      />
      <rect
        x="96"
        y="400"
        width="128"
        height="104"
        fill="#F8F8F8"
        stroke="#111111"
        strokeWidth="1"
      />
      
      {/* Bottom right detail */}
      <rect
        x="384"
        y="368"
        width="96"
        height="152"
        stroke="#111111"
        strokeWidth="1"
        fill="none"
      />
      <rect
        x="400"
        y="384"
        width="64"
        height="120"
        fill="#E6E6E6"
      />
      
      {/* Swiss-style typography element simulation */}
      <line
        x1="400"
        y1="288"
        x2="464"
        y2="288"
        stroke="#0057FF"
        strokeWidth="2"
      />
      <line
        x1="400"
        y1="296"
        x2="448"
        y2="296"
        stroke="#111111"
        strokeWidth="1"
      />
      <line
        x1="400"
        y1="304"
        x2="456"
        y2="304"
        stroke="#111111"
        strokeWidth="1"
      />
    </svg>
  );
}