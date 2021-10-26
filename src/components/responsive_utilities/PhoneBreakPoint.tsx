import React from 'react'
import Breakpoint from './Breakpoint'

export default function PhoneBreakpoint ({ children }:{children:React.ReactNode}) {
  return (
    <Breakpoint name="phone">
      {children}
    </Breakpoint>
  )
}
