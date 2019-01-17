import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FlavorContext, flavors } from 'utils'

class Stripes extends Component {
  render() {
    const { flip } = this.props
    return (
      <FlavorContext.Consumer>
        {flavor => {
          const colors = []
          for (const colorKey in flavors[flavor]) {
            colors.push(flavors[flavor][colorKey])
          }
          const rectStyles = []
          for (let i = 0; i < 5; i++) {
            let style = {
              height: Math.random() * 20 + 40,
              opacity: 0.15 * i + 0.05 + Math.random() * 0.1,
              fill: colors[3],
              transition: 'all 0.5s cubic-bezier(.82,.22,.44,1.52)',
            }
            rectStyles[i] = style
          }

          return (
            <div
              style={{
                position: 'absolute',
                margin: '0',
                width: '100%',
                height: '100%',
                top: '0',
                left: '0',
                transform: flip ? 'scaleX(-1) scaleY(-1)' : 'none',
              }}
            >
              <svg
                preserveAspectRatio="xMaxYMin slice"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  isolation: 'isolate',
                  position: 'absolute',
                  right: '0',
                  top: '0',
                }}
                viewBox="0 0 1280 800"
                width="150vw"
              >
                <defs>
                  <clipPath>
                    <rect width="1280" height="800" />
                  </clipPath>
                </defs>
                <g clipPath="url(#_clipPath_9JHGqTrrZ8G9m82yBsBhy6Kyp3HVFCFZ)">
                  <g>
                    <rect
                      css={rectStyles[0]}
                      x="550.179"
                      y="86.16"
                      width="795.744"
                      height="45.973"
                      transform="matrix(0.902,0.432,-0.578,0.832,156.306,-391.544)"
                      fill="rgb(0,0,0)"
                    />
                  </g>
                  <g>
                    <rect
                      css={rectStyles[1]}
                      x="600.749"
                      y="52.16"
                      width="795.744"
                      height="40"
                      transform="matrix(0.902,0.432,-0.578,0.832,141.618,-419.129)"
                    />
                  </g>
                  <g>
                    <rect
                      css={rectStyles[2]}
                      x="642.891"
                      y="10.16"
                      width="795.744"
                      height="45.973"
                      transform="matrix(0.902,0.432,-0.578,0.832,121.475,-444.416)"
                      fill="rgb(0,0,0)"
                    />
                  </g>
                  <g>
                    <rect
                      css={rectStyles[3]}
                      x="691.054"
                      y="-27.84"
                      width="795.744"
                      height="45.973"
                      transform="matrix(0.902,0.432,-0.578,0.832,104.238,-471.633)"
                      fill="rgb(0,0,0)"
                    />
                  </g>
                  <g>
                    <rect
                      css={rectStyles[4]}
                      x="756.073"
                      y="-58.84"
                      width="795.744"
                      height="45.973"
                      transform="matrix(0.902,0.432,-0.578,0.832,92.705,-504.96)"
                      fill="rgb(0,0,0)"
                    />
                  </g>
                </g>
              </svg>
            </div>
          )
        }}
      </FlavorContext.Consumer>
    )
  }
}

Stripes.propTypes = {
  flip: PropTypes.bool,
}

export { Stripes }
