import React from 'react'
import { useTabState, usePanelState } from '@bumaga/tabs' 
const cn = (...args) => args.filter(Boolean).join(' ');

const Tab = ({ children }) => {
  const { isActive, onClick } = useTabState()

  return (
    <button className={cn('text-gray-600 py-4 px-6 block hover:bg-green-100 hover:text-green-500 focus:outline-none font-bold w-full', isActive && 'text-green-600 py-4 px-6 block hover:bg-green-100 hover:text-green-500 focus:outline-none font-bold w-full')} onClick={onClick}>
      {children}
    </button>
  )
}

const Panel = ({ children }) => {
  const isActive = usePanelState();

  return isActive ? <p>{children}</p> : null;
};

export const MyTab = ({title}) => {
	return(
		<Tab>{title}</Tab>
		)
}

export const MyPanel = ({component}) => {
	return(
			<Panel>
				{component}
			</Panel>

		)
}

