import classNames from 'classnames'
import { useConfigContext } from '../config-provider/index'
import type { IconProps } from '../types/index'
import * as React from 'react'
import type { SVGProps } from 'react'
function SvgSubTaskSquareFilled(iconProps: IconProps) {
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
      <rect width={16} height={16} fill="#408CFF" rx={3} />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M3.5 3a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5H5v6a2 2 0 0 0 2 2h5.5a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5v.5H7v-2h5.5a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5V8H7V6h1.5a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-5Z"
        clipRule="evenodd"
      />
    </svg>
  )
}
SvgSubTaskSquareFilled.displayName = 'SubTaskSquareFilled'
export default SvgSubTaskSquareFilled
