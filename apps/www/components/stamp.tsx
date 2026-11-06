// Circular rubber-stamp logo: text set on a circle around a pixel "98".
export function Stamp({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-label="ui98 stamp">
      <defs>
        <path
          id="stamp-circle"
          d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0"
        />
      </defs>
      <g className="origin-center animate-[spin_40s_linear_infinite] motion-reduce:animate-none">
        <circle
          cx="60"
          cy="60"
          r="57"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle
          cx="60"
          cy="60"
          r="33"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <text
          fill="currentColor"
          className="font-pixel"
          fontSize="15"
          letterSpacing="2"
        >
          <textPath href="#stamp-circle">
            UI98 • RETRO COMPONENTS • EST. 1995 •
          </textPath>
        </text>
      </g>
      <text
        x="60"
        y="72"
        textAnchor="middle"
        fill="currentColor"
        className="font-pixel"
        fontSize="36"
      >
        98
      </text>
    </svg>
  )
}
