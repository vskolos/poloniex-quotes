import Svg, { Path } from 'react-native-svg'

export function HouseIcon({ color }: { color?: string }) {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      style={{ width: 24, height: 24 }}
    >
      <Path
        d="M4 8.6001V21.0001H20V8.6001"
        stroke={color ?? 'currentColor'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 10L12 3L22 10"
        stroke={color ?? 'currentColor'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15 21V15C15 13.895 14.105 13 13 13H11C9.895 13 9 13.895 9 15V21"
        stroke={color ?? 'currentColor'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}
