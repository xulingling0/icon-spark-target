import classNames from 'classnames'
import { useConfigContext } from '../config-provider/index'
import type { IconProps } from '../types/index'
import * as React from 'react'
import type { SVGProps } from 'react'
function SvgThumbsUpFilled(iconProps: IconProps) {
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
        fill={color}
        d="m12.207 13.275 1.429-5A1 1 0 0 0 12.674 7H10.12A.119.119 0 0 1 10 6.881V3.968C10 2.88 9.12 2 8.032 2a.048.048 0 0 0-.044.03L6 7v7h5.246a1 1 0 0 0 .961-.725ZM3 14h1V7H3a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z"
      />
    </svg>
  )
}
SvgThumbsUpFilled.displayName = 'ThumbsUpFilled'
export default SvgThumbsUpFilled
