import React from 'react'
import { FlavorContext, flavors } from 'utils'

const Logo = () => {
  return (
    <FlavorContext.Consumer>
      {flavor => {
        const colors = []
        for (const colorKey in flavors[flavor]) {
          colors.push(flavors[flavor][colorKey])
        }
        const css = {
          transition: 'all 0.3s cubic-bezier(.82,.22,.44,1.52)',
        }
        let cssStyles = colors.map(color => ({ ...css, fill: color }))

        return (
          <div style={{ gridArea: 'logo', margin: '.2rem' }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              style={{ isolation: 'isolate' }}
              viewBox="0 0 544.535 881.575"
              height="100%"
            >
              <g>
                <rect
                  x="0"
                  y="0"
                  width="544.535"
                  height="881.575"
                  transform="matrix(1,0,0,1,0,0)"
                  fill="rgb(0,0,0)"
                />
                <path
                  style={cssStyles[0]}
                  d=" M 432.856 69.827 L 111.679 69.827 L 273.364 254.733 L 432.856 69.827 Z "
                />
                <path
                  style={cssStyles[1]}
                  d=" M 73.919 114.834 L 73.919 440.787 L 470.617 440.787 L 470.617 114.834 L 273.352 340.216 L 73.919 114.834 Z "
                  vectorEffect="non-scaling-stroke"
                  strokeWidth="1"
                  stroke="rgb(0,0,0)"
                  strokeLinejoin="miter"
                  strokeLinecap="square"
                  strokeMiterlimit="3"
                />
                <rect
                  style={cssStyles[2]}
                  x="73.919"
                  y="516.771"
                  width="165.061"
                  height="294.977"
                  transform="matrix(1,0,0,1,0,0)"
                />
                <rect
                  style={cssStyles[3]}
                  x="305.556"
                  y="516.771"
                  width="165.061"
                  height="294.977"
                  transform="matrix(1,0,0,1,0,0)"
                />
              </g>
            </svg>
          </div>
        )
      }}
    </FlavorContext.Consumer>
  )
}

export { Logo }
