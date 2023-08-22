import classNames from 'classnames'
import { useConfigContext } from '../config-provider/index'
import type { IconProps } from '../types/index'
import * as React from 'react'
import type { SVGProps } from 'react'
function SvgStatus(iconProps: IconProps) {
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
      <path stroke={color} d="M5.132 7.253a1.5 1.5 0 1 0 2.121-2.121 1.5 1.5 0 0 0-2.121 2.121Z" />
      <path
        stroke={color}
        d="M1.5 7.586V2.5a1 1 0 0 1 1-1h5.086a1 1 0 0 1 .707.293l5.5 5.5a1 1 0 0 1 0 1.414l-5.086 5.086a1 1 0 0 1-1.414 0l-5.5-5.5a1 1 0 0 1-.293-.707Z"
      />
    </svg>
  )
}
SvgStatus.displayName = 'Status'
export default SvgStatus
