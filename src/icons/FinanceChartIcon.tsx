import Svg, { Circle, Path, Rect } from 'react-native-svg'

export function FinanceChartIcon({ color }: { color?: string }) {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      style={{ width: 24, height: 24 }}
    >
      <Rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke={color ?? 'currentColor'}
        strokeWidth="1.5"
      />
      <Path
        d="M15 3V8.5"
        stroke={color ?? 'currentColor'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15 12.5V21"
        stroke={color ?? 'currentColor'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.9492 10.949L21.0003 15"
        stroke={color ?? 'currentColor'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Circle
        cx="15"
        cy="10.5"
        r="2"
        stroke={color ?? 'currentColor'}
        strokeWidth="1.5"
      />
      <Path
        d="M13.05 10.9449L9 14.9999L6 11.9999L3 14.9999"
        stroke={color ?? 'currentColor'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}
