import React from 'react'
import Breakpoint from './Breakpoint'

export default function DesktopBreakpoint ({ children }:{children:React.ReactNode}) {
  return (
    <Breakpoint name="desktop">
      {children}
    </Breakpoint>
  )
}
