import { FC, PropsWithChildren, ReactNode } from 'react'

const DarkLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: 'rgb(0 0 0 / .3)',
        borderRadius: '5px',
        padding: '10px',
      }}
    >
      <h3>Dark Layout</h3>
      {children}
    </div>
  )
}

export default DarkLayout
