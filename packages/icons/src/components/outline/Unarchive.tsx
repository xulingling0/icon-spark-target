import classNames from 'classnames'
import { useConfigContext } from '../config-provider/index'
import type { IconProps } from '../types/index'
import * as React from 'react'
import type { SVGProps } from 'react'
function SvgUnarchive(iconProps: IconProps) {
  const {
    className,
    color = 'currentColor',
    fontSize,
    highlight,
    nonScalingStroke = true,
    style,
    strokeWidth = 2,
    ...props
  } = useConfigContext(iconProps)
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 16 16"
      className={classNames(
        'ones-icon',
        {
          'ones-icon-non-scaling-stroke': nonScalingStroke,
        },
        className
      )}
      style={Object.assign(
        {
          fontSize,
        },
        style
      )}
      strokeWidth={strokeWidth}
    >
      <path
        stroke={color}
        strokeLinejoin="round"
        d="M3.5 6h-1V2.5h11V6h-1m-9 0v7.5H6M3.5 6h9m0 0v2M11 9l2.5 2.5L11 14"
      />
      <path stroke={color} d="M13 11.5H9.5a1 1 0 0 0-1 1V15" />
    </svg>
  )
}
SvgUnarchive.displayName = 'Unarchive'
export default SvgUnarchive
