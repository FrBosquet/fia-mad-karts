import { ReactNode } from "react"

export const Logo = ({ className, children }: { className?: string, children: ReactNode }) => {
  return <h1 className={`text-center font-logo bg-gradient-radial from-yellow-300 to-orange-400 inline-block w-fit bg-clip-text text-transparent ${className}`}>
    {children}
  </h1>
}