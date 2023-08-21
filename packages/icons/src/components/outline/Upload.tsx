import classNames from 'classnames'
import { useConfigContext } from '../config-provider/index'
import type { IconProps } from '../types/index'
import * as React from 'react'
import type { SVGProps } from 'react'
function SvgUpload(iconProps: IconProps) {
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
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="1em"
      height="1em"
      viewBox="-0.5 -0.5 711 621"
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
      <path fill="none" d="M190 340h60v30h-60z" pointerEvents="all" />
      <switch transform="translate(-.5 -.5)">
        <foreignObject
          width="100%"
          height="100%"
          pointerEvents="none"
          requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
          style={{
            overflow: 'visible',
            textAlign: 'left',
          }}
        >
          <div
            xmlns="http://www.w3.org/1999/xhtml"
            style={{
              display: 'flex',
              alignItems: 'unsafe center',
              justifyContent: 'unsafe center',
              width: 58,
              height: 1,
              paddingTop: 355,
              marginLeft: 191,
            }}
          >
            <div
              data-drawio-colors="color: rgb(0, 0, 0);"
              style={{
                boxSizing: 'border-box',
                fontSize: 0,
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  display: 'inline-block',
                  fontSize: 12,
                  fontFamily: 'Helvetica',
                  color: '#000',
                  lineHeight: 1.2,
                  pointerEvents: 'all',
                  whiteSpace: 'normal',
                  overflowWrap: 'normal',
                }}
              >
                <div
                  style={{
                    color: '#ccc',
                    backgroundColor: '#1f1f1f',
                    fontFamily: '&quot',
                    lineHeight: 18,
                  }}
                >
                  <br />
                </div>
              </div>
            </div>
          </div>
        </foreignObject>
        <text x={220} y={359} fontFamily="Helvetica" fontSize={12} textAnchor="middle" />
      </switch>
      <path
        fill="none"
        stroke="#000"
        strokeMiterlimit={10}
        d="M325 350v43.63"
        pointerEvents="stroke"
      />
      <path
        stroke="#000"
        strokeMiterlimit={10}
        d="m325 398.88-3.5-7 3.5 1.75 3.5-1.75Z"
        pointerEvents="all"
      />
      <rect
        width={310}
        height={130}
        x={170}
        y={220}
        fill="#FFF"
        stroke="#000"
        strokeDasharray="3 3"
        pointerEvents="all"
        rx={19.5}
        ry={19.5}
      />
      <path
        fill="none"
        stroke="#000"
        strokeMiterlimit={10}
        d="M323 200v33.63"
        pointerEvents="stroke"
      />
      <path
        stroke="#000"
        strokeMiterlimit={10}
        d="m323 238.88-3.5-7 3.5 1.75 3.5-1.75Z"
        pointerEvents="all"
      />
      <rect
        width={300}
        height={130}
        x={173}
        y={70}
        fill="#FFF"
        stroke="#000"
        strokeDasharray="3 3"
        pointerEvents="all"
        rx={19.5}
        ry={19.5}
      />
      <rect
        width={160}
        height={40}
        x={243}
        y={90}
        fill="#dae8fc"
        stroke="#6c8ebf"
        pointerEvents="all"
        rx={6}
        ry={6}
      />
      <switch transform="translate(-.5 -.5)">
        <foreignObject
          width="100%"
          height="100%"
          pointerEvents="none"
          requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
          style={{
            overflow: 'visible',
            textAlign: 'left',
          }}
        >
          <div
            xmlns="http://www.w3.org/1999/xhtml"
            style={{
              display: 'flex',
              alignItems: 'unsafe center',
              justifyContent: 'unsafe center',
              width: 158,
              height: 1,
              paddingTop: 110,
              marginLeft: 244,
            }}
          >
            <div
              data-drawio-colors="color: rgb(0, 0, 0);"
              style={{
                boxSizing: 'border-box',
                fontSize: 0,
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  display: 'inline-block',
                  fontSize: 12,
                  fontFamily: 'Helvetica',
                  color: '#000',
                  lineHeight: 1.2,
                  pointerEvents: 'all',
                  whiteSpace: 'normal',
                  overflowWrap: 'normal',
                }}
              >
                <span>
                  <b>{'node src/scripts/copy.cjs'}</b>
                </span>
              </div>
            </div>
          </div>
        </foreignObject>
        <text x={323} y={114} fontFamily="Helvetica" fontSize={12} textAnchor="middle">
          {'node src/scripts/copy.cjs'}
        </text>
      </switch>
      <path
        fill="none"
        stroke="#000"
        strokeMiterlimit={10}
        d="M323 40v43.63"
        pointerEvents="stroke"
      />
      <path
        stroke="#000"
        strokeMiterlimit={10}
        d="m323 88.88-3.5-7 3.5 1.75 3.5-1.75Z"
        pointerEvents="all"
      />
      <rect
        width={160}
        height={40}
        x={243}
        fill="#dae8fc"
        stroke="#6c8ebf"
        pointerEvents="all"
        rx={6}
        ry={6}
      />
      <switch transform="translate(-.5 -.5)">
        <foreignObject
          width="100%"
          height="100%"
          pointerEvents="none"
          requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
          style={{
            overflow: 'visible',
            textAlign: 'left',
          }}
        >
          <div
            xmlns="http://www.w3.org/1999/xhtml"
            style={{
              display: 'flex',
              alignItems: 'unsafe center',
              justifyContent: 'unsafe center',
              width: 158,
              height: 1,
              paddingTop: 20,
              marginLeft: 244,
            }}
          >
            <div
              data-drawio-colors="color: rgb(0, 0, 0);"
              style={{
                boxSizing: 'border-box',
                fontSize: 0,
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  display: 'inline-block',
                  fontSize: 12,
                  fontFamily: 'Helvetica',
                  color: '#000',
                  lineHeight: 1.2,
                  pointerEvents: 'all',
                  whiteSpace: 'normal',
                  overflowWrap: 'normal',
                }}
              >
                <b>{'npm run svg'}</b>
              </div>
            </div>
          </div>
        </foreignObject>
        <text x={323} y={24} fontFamily="Helvetica" fontSize={12} textAnchor="middle">
          {'npm run svg'}
        </text>
      </switch>
      <path fill="none" d="M204.5 140h237v30h-237z" pointerEvents="all" />
      <switch transform="translate(-.5 -.5)">
        <foreignObject
          width="100%"
          height="100%"
          pointerEvents="none"
          requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
          style={{
            overflow: 'visible',
            textAlign: 'left',
          }}
        >
          <div
            xmlns="http://www.w3.org/1999/xhtml"
            style={{
              display: 'flex',
              alignItems: 'unsafe center',
              justifyContent: 'unsafe center',
              width: 235,
              height: 1,
              paddingTop: 155,
              marginLeft: 206,
            }}
          >
            <div
              data-drawio-colors="color: rgb(0, 0, 0);"
              style={{
                boxSizing: 'border-box',
                fontSize: 0,
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  display: 'inline-block',
                  fontSize: 12,
                  fontFamily: 'Helvetica',
                  color: '#000',
                  lineHeight: 1.2,
                  pointerEvents: 'all',
                  whiteSpace: 'normal',
                  overflowWrap: 'normal',
                }}
              >
                <br />
                {'\u904D\u5386'}
                <b>{'Download/icons'}</b>
                {'\u7684\u56FE\u6807'}
                <br />
                {'\u590D\u5236\u5230'}
                <b>{'packages/icons/src/svg'}</b>
                <br />
                {'\u8BB0\u5F55\u4FEE\u6539\u72B6\u6001'}
                <b>{'copy-svg-status.json'}</b>
              </div>
            </div>
          </div>
        </foreignObject>
        <text x={323} y={159} fontFamily="Helvetica" fontSize={12} textAnchor="middle">
          {'\u904D\u5386 Download/icons \u7684\u56FE\u6807...'}
        </text>
      </switch>
      <rect
        width={160}
        height={40}
        x={243}
        y={240}
        fill="#dae8fc"
        stroke="#6c8ebf"
        pointerEvents="all"
        rx={6}
        ry={6}
      />
      <switch transform="translate(-.5 -.5)">
        <foreignObject
          width="100%"
          height="100%"
          pointerEvents="none"
          requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
          style={{
            overflow: 'visible',
            textAlign: 'left',
          }}
        >
          <div
            xmlns="http://www.w3.org/1999/xhtml"
            style={{
              display: 'flex',
              alignItems: 'unsafe center',
              justifyContent: 'unsafe center',
              width: 158,
              height: 1,
              paddingTop: 260,
              marginLeft: 244,
            }}
          >
            <div
              data-drawio-colors="color: rgb(0, 0, 0);"
              style={{
                boxSizing: 'border-box',
                fontSize: 0,
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  display: 'inline-block',
                  fontSize: 12,
                  fontFamily: 'Helvetica',
                  color: '#000',
                  lineHeight: 1.2,
                  pointerEvents: 'all',
                  whiteSpace: 'normal',
                  overflowWrap: 'normal',
                }}
              >
                <b>
                  {'svgr -- src/svg && prettier'}
                  <br />
                  {'--write src/components'}
                </b>
              </div>
            </div>
          </div>
        </foreignObject>
        <text x={323} y={264} fontFamily="Helvetica" fontSize={12} textAnchor="middle">
          {'svgr -- src/svg && prettie...'}
        </text>
      </switch>
      <path fill="none" d="M200 300h270v30H200z" pointerEvents="all" />
      <switch transform="translate(-.5 -.5)">
        <foreignObject
          width="100%"
          height="100%"
          pointerEvents="none"
          requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
          style={{
            overflow: 'visible',
            textAlign: 'left',
          }}
        >
          <div
            xmlns="http://www.w3.org/1999/xhtml"
            style={{
              display: 'flex',
              alignItems: 'unsafe center',
              justifyContent: 'unsafe center',
              width: 268,
              height: 1,
              paddingTop: 315,
              marginLeft: 201,
            }}
          >
            <div
              data-drawio-colors="color: rgb(0, 0, 0);"
              style={{
                boxSizing: 'border-box',
                fontSize: 0,
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  display: 'inline-block',
                  fontSize: 12,
                  fontFamily: 'Helvetica',
                  color: '#000',
                  lineHeight: 1.2,
                  pointerEvents: 'all',
                  whiteSpace: 'normal',
                  overflowWrap: 'normal',
                }}
              >
                {'\u901A\u8FC7'}
                <b>{'svgr.config.cjs'}</b>
                {'\u6A21\u7248\u5C06 svg \u8F6C\u5316\u4E3A tsx \u6587\u4EF6'}
                <br />
                {'\u901A\u8FC7'}
                <b>{'indexTemplate'}</b>
                {'\u65B9\u6CD5\u5355\u72EC\u5904\u7406 index.tsx \u5BFC\u51FA'}
              </div>
            </div>
          </div>
        </foreignObject>
        <text x={335} y={319} fontFamily="Helvetica" fontSize={12} textAnchor="middle">
          {
            '\u901A\u8FC7 svgr.config.cjs \u6A21\u7248\u5C06 svg \u8F6C\u5316\u4E3A tsx \u6587\u4EF6...'
          }
        </text>
      </switch>
      <rect
        width={200}
        height={40}
        x={225.75}
        y={580}
        fill="#f8cecc"
        stroke="#b85450"
        pointerEvents="all"
        rx={6}
        ry={6}
      />
      <switch transform="translate(-.5 -.5)">
        <foreignObject
          width="100%"
          height="100%"
          pointerEvents="none"
          requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
          style={{
            overflow: 'visible',
            textAlign: 'left',
          }}
        >
          <div
            xmlns="http://www.w3.org/1999/xhtml"
            style={{
              display: 'flex',
              alignItems: 'unsafe center',
              justifyContent: 'unsafe center',
              width: 198,
              height: 1,
              paddingTop: 600,
              marginLeft: 227,
            }}
          >
            <div
              data-drawio-colors="color: rgb(0, 0, 0);"
              style={{
                boxSizing: 'border-box',
                fontSize: 0,
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  display: 'inline-block',
                  fontSize: 12,
                  fontFamily: 'Helvetica',
                  color: '#000',
                  lineHeight: 1.2,
                  pointerEvents: 'all',
                  whiteSpace: 'normal',
                  overflowWrap: 'normal',
                }}
              >
                <b>
                  {'stories/icon.stories.mdx'}
                  <br />
                  {'\u6D88\u8D39\u5206\u7C7B\u6570\u7EC4\uFF0C\u6E32\u67D3\u56FE\u6807'}
                </b>
              </div>
            </div>
          </div>
        </foreignObject>
        <text x={326} y={604} fontFamily="Helvetica" fontSize={12} textAnchor="middle">
          {'stories/icon.stories.mdx...'}
        </text>
      </switch>
      <path
        fill="none"
        stroke="#000"
        strokeMiterlimit={10}
        d="M325 530v25l.56 18.63"
        pointerEvents="stroke"
      />
      <path
        stroke="#000"
        strokeMiterlimit={10}
        d="m325.72 578.88-3.71-6.89 3.55 1.64 3.44-1.85Z"
        pointerEvents="all"
      />
      <rect
        width={310}
        height={130}
        x={170}
        y={400}
        fill="#ffe6cc"
        fillOpacity={0.5}
        stroke="#d79b00"
        strokeDasharray="3 3"
        strokeOpacity={0.5}
        pointerEvents="all"
        rx={19.5}
        ry={19.5}
      />
      <rect
        width={201.5}
        height={40}
        x={224.25}
        y={420}
        fill="#f8cecc"
        stroke="#b85450"
        pointerEvents="all"
        rx={6}
        ry={6}
      />
      <switch transform="translate(-.5 -.5)">
        <foreignObject
          width="100%"
          height="100%"
          pointerEvents="none"
          requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
          style={{
            overflow: 'visible',
            textAlign: 'left',
          }}
        >
          <div
            xmlns="http://www.w3.org/1999/xhtml"
            style={{
              display: 'flex',
              alignItems: 'unsafe center',
              justifyContent: 'unsafe center',
              width: 200,
              height: 1,
              paddingTop: 440,
              marginLeft: 225,
            }}
          >
            <div
              data-drawio-colors="color: rgb(0, 0, 0);"
              style={{
                boxSizing: 'border-box',
                fontSize: 0,
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  display: 'inline-block',
                  fontSize: 12,
                  fontFamily: 'Helvetica',
                  color: '#000',
                  lineHeight: 1.2,
                  pointerEvents: 'all',
                  whiteSpace: 'normal',
                  overflowWrap: 'normal',
                }}
              >
                <b>{'stories/constants'}</b>
              </div>
            </div>
          </div>
        </foreignObject>
        <text x={325} y={444} fontFamily="Helvetica" fontSize={12} textAnchor="middle">
          {'stories/constants'}
        </text>
      </switch>
      <path fill="none" d="M190 470h270v40H190z" pointerEvents="all" />
      <switch transform="translate(-.5 -.5)">
        <foreignObject
          width="100%"
          height="100%"
          pointerEvents="none"
          requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
          style={{
            overflow: 'visible',
            textAlign: 'left',
          }}
        >
          <div
            xmlns="http://www.w3.org/1999/xhtml"
            style={{
              display: 'flex',
              alignItems: 'unsafe center',
              justifyContent: 'unsafe center',
              width: 268,
              height: 1,
              paddingTop: 490,
              marginLeft: 191,
            }}
          >
            <div
              data-drawio-colors="color: rgb(0, 0, 0);"
              style={{
                boxSizing: 'border-box',
                fontSize: 0,
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  display: 'inline-block',
                  fontSize: 12,
                  fontFamily: 'Helvetica',
                  color: '#000',
                  lineHeight: 1.2,
                  pointerEvents: 'all',
                  whiteSpace: 'normal',
                  overflowWrap: 'normal',
                }}
              >
                {'icons.json \u914D\u7F6E\u5BF9\u8C61\uFF08\u5206\u7C7B-\u56FE\u6807\u540D\uFF09'}
                <br />
                {
                  'index.ts \u6839\u636E \u56FE\u6807\u540D\u7684\u540E\u7F00\u5904\u7406\u5206\u7C7B\uFF0C\u5408\u5E76'
                }
                <br />
                {'\u4E0A\u8FF0 json \u5BF9\u8C61\u540E\u5BFC\u51FA'}
              </div>
            </div>
          </div>
        </foreignObject>
        <text x={325} y={494} fontFamily="Helvetica" fontSize={12} textAnchor="middle">
          {'icons.json \u914D\u7F6E\u5BF9\u8C61\uFF08\u5206\u7C7B-\u56FE\u6807\u540D\uFF09...'}
        </text>
      </switch>
      <path fill="#dae8fc" stroke="#6c8ebf" d="M0 70h110v30H0z" pointerEvents="all" />
      <switch transform="translate(-.5 -.5)">
        <foreignObject
          width="100%"
          height="100%"
          pointerEvents="none"
          requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
          style={{
            overflow: 'visible',
            textAlign: 'left',
          }}
        >
          <div
            xmlns="http://www.w3.org/1999/xhtml"
            style={{
              display: 'flex',
              alignItems: 'unsafe center',
              justifyContent: 'unsafe center',
              width: 108,
              height: 1,
              paddingTop: 85,
              marginLeft: 1,
            }}
          >
            <div
              data-drawio-colors="color: rgb(0, 0, 0);"
              style={{
                boxSizing: 'border-box',
                fontSize: 0,
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  display: 'inline-block',
                  fontSize: 12,
                  fontFamily: 'Helvetica',
                  color: '#000',
                  lineHeight: 1.2,
                  pointerEvents: 'all',
                  whiteSpace: 'normal',
                  overflowWrap: 'normal',
                }}
              >
                <b>{'\u84DD\u8272\uFF1A\u7EC4\u4EF6\u5E93\u90E8\u5206'}</b>
              </div>
            </div>
          </div>
        </foreignObject>
        <text x={55} y={89} fontFamily="Helvetica" fontSize={12} textAnchor="middle">
          {'\u84DD\u8272\uFF1A\u7EC4\u4EF6\u5E93\u90E8\u5206'}
        </text>
      </switch>
      <path fill="#f8cecc" stroke="#b85450" d="M0 400h120v30H0z" pointerEvents="all" />
      <switch transform="translate(-.5 -.5)">
        <foreignObject
          width="100%"
          height="100%"
          pointerEvents="none"
          requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
          style={{
            overflow: 'visible',
            textAlign: 'left',
          }}
        >
          <div
            xmlns="http://www.w3.org/1999/xhtml"
            style={{
              display: 'flex',
              alignItems: 'unsafe center',
              justifyContent: 'unsafe center',
              width: 118,
              height: 1,
              paddingTop: 415,
              marginLeft: 1,
            }}
          >
            <div
              data-drawio-colors="color: rgb(0, 0, 0);"
              style={{
                boxSizing: 'border-box',
                fontSize: 0,
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  display: 'inline-block',
                  fontSize: 12,
                  fontFamily: 'Helvetica',
                  color: '#000',
                  lineHeight: 1.2,
                  pointerEvents: 'all',
                  whiteSpace: 'normal',
                  overflowWrap: 'normal',
                }}
              >
                <b>{'\u7EA2\u8272\uFF1A\u6587\u6863\u5C55\u793A\u90E8\u5206'}</b>
              </div>
            </div>
          </div>
        </foreignObject>
        <text x={60} y={419} fontFamily="Helvetica" fontSize={12} textAnchor="middle">
          {'\u7EA2\u8272\uFF1A\u6587\u6863\u5C55\u793A\u90E8\u5206'}
        </text>
      </switch>
      <path
        fill="#ffe6cc"
        fillOpacity={0.5}
        stroke="#d79b00"
        strokeOpacity={0.5}
        d="M520 400h190v60H520z"
        pointerEvents="all"
      />
      <switch transform="translate(-.5 -.5)">
        <foreignObject
          width="100%"
          height="100%"
          pointerEvents="none"
          requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
          style={{
            overflow: 'visible',
            textAlign: 'left',
          }}
        >
          <div
            xmlns="http://www.w3.org/1999/xhtml"
            style={{
              display: 'flex',
              alignItems: 'unsafe center',
              justifyContent: 'unsafe center',
              width: 188,
              height: 1,
              paddingTop: 430,
              marginLeft: 521,
            }}
          >
            <div
              data-drawio-colors="color: rgb(0, 0, 0);"
              style={{
                boxSizing: 'border-box',
                fontSize: 0,
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  display: 'inline-block',
                  fontSize: 12,
                  fontFamily: 'Helvetica',
                  color: '#000',
                  lineHeight: 1.2,
                  pointerEvents: 'all',
                  whiteSpace: 'normal',
                  overflowWrap: 'normal',
                }}
              >
                <b>
                  {'\u7F3A\u70B9\uFF1A'}
                  <br />
                  {'\u5206\u7C7B\u4E0E\u547D\u540D\u5F3A\u8026\u5408\uFF0C\u4E0D\u591F\u7075\u6D3B'}
                  <br />
                  {'\u9700\u8981\u624B\u52A8\u7EF4\u62A4\u5206\u7C7B&\u5408\u5E76\u903B\u8F91'}
                  <br />
                </b>
              </div>
            </div>
          </div>
        </foreignObject>
        <text x={615} y={434} fontFamily="Helvetica" fontSize={12} textAnchor="middle">
          {
            '\u7F3A\u70B9\uFF1A\u5206\u7C7B\u4E0E\u547D\u540D\u5F3A\u8026\u5408\uFF0C\u4E0D\u591F\u7075\u6D3B\u9700\u8981\u624B\u52A8\u7EF4\u62A4\u5206\u7C7B&\u5408\u5E76\u903B\u8F91...'
          }
        </text>
      </switch>
      <switch>
        <a
          xlinkHref="https://www.diagrams.net/doc/faq/svg-export-text-problems"
          target="_blank"
          transform="translate(0 -5)"
        >
          <text x="50%" y="100%" fontSize={10} textAnchor="middle">
            {'Text is not SVG - cannot display'}
          </text>
        </a>
      </switch>
    </svg>
  )
}
SvgUpload.displayName = 'Upload'
export default SvgUpload
