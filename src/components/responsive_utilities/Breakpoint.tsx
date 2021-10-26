import React from 'react'
import MediaQuery from 'react-responsive'
import { IBreakpoints, Props } from './types'

const breakpoints: IBreakpoints = {
  desktop: '(min-width: 1025px)',
  tablet: '(min-width: 768px) and (max-width: 1024px)',
  phone: '(max-width: 1024px)'
}

export default function Breakpoint (props: Props) {
  const breakpoint: string = breakpoints[props.name] || breakpoints.desktop
  return (
    <MediaQuery {...props} query={breakpoint}>
      {props.children}
    </MediaQuery>
  )
}
