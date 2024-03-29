import { SVGProps, Ref, forwardRef, memo } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    version="1.0"
    xmlns="http://www.w3.org/2000/svg"
    width="96"
    height="96"
    viewBox="0 0 1280.000000 1253.000000"
    preserveAspectRatio="xMidYMid meet"
    {...props}
    ref={ref}
  >
    <g
      transform="translate(0.000000,1253.000000) scale(0.100000,-0.100000)"
      fill="#8c61ff"
      stroke="none"
    >
      <path
        d="M12000 12520 c-192 -27 -395 -98 -655 -230 -446 -225 -961 -590
-1620 -1149 -926 -785 -2158 -2000 -3466 -3416 -661 -717 -1389 -1537 -1913
-2157 -87 -104 -159 -188 -160 -188 -1 0 -67 34 -146 76 -255 134 -875 442
-1078 536 -849 391 -1441 595 -1912 659 -134 18 -368 13 -479 -10 -224 -48
-405 -181 -495 -366 -52 -104 -69 -183 -70 -310 -1 -105 1 -113 32 -177 29
-59 55 -87 235 -254 438 -407 919 -904 1273 -1315 792 -921 1625 -2167 2579
-3858 168 -297 234 -355 405 -355 66 0 96 5 132 21 113 51 158 111 238 313
135 341 398 964 565 1335 1285 2866 2820 5295 4654 7365 520 587 971 1049
1821 1866 665 640 790 788 844 1005 81 328 -187 601 -604 614 -63 2 -144 0
-180 -5z"
      />
    </g>
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export default memo(ForwardRef)
