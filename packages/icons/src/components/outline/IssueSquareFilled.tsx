import classNames from 'classnames'
import { useConfigContext } from '../config-provider/index'
import type { IconProps } from '../types/index'
import * as React from 'react'
import type { SVGProps } from 'react'
function SvgIssueSquareFilled(iconProps: IconProps) {
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
        d="M6 3H5v2h6V3h-1L9 2H7L6 3ZM3 4a1 1 0 0 1 1-1v3h8V3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4Zm2 4h6v1H5V8Zm3 2H5v1h3v-1Z"
        clipRule="evenodd"
      />
    </svg>
  )
}
SvgIssueSquareFilled.displayName = 'IssueSquareFilled'
export default SvgIssueSquareFilled
