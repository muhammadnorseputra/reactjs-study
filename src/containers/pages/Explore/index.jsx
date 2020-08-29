import React, { Fragment, useState, useEffect } from 'react'
import { Tabs } from '@bumaga/tabs' 
import { Back } from '../../../components/atoms/Button/Back'
import { MyTab, MyPanel } from '../../../components/atoms/Button/Tab'

export const Explore = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    setIndex(1)
  }, [])
    return (
      <Fragment>
        <header className="p-1 z-30 sticky top-0 font-bold text-xl">
          <Back />
          Explore
        </header>
        <Tabs state={[index, setIndex]}>
        <div className="bg-white border-b-2 border-t">
          <nav className="flex justify-around sm:flex-row">
          <MyTab title="Lastest"/>
          <MyTab title="Tags"/>
          <MyTab title="Photos"/>
          <MyTab title="Videos"/>
          <MyTab title="Files"/>
          </nav>
        </div>

        <MyPanel component="test 1" />
        <MyPanel component="test 2" />
        <MyPanel component="test 3" />
        <MyPanel component="test 4" />
        <MyPanel component="test 5" />
        </Tabs>
      </Fragment>
    );
}
