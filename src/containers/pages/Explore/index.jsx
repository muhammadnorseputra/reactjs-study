import React, { Fragment, useState, useEffect } from 'react'
import { Tabs } from '@bumaga/tabs' 
import { _back } from '../../../components/atoms/Button/_back'
import { _tab, _panel } from '../../../components/atoms/Button/_tab'

export const Explore = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    setIndex(1)
  }, [])
    return (
      <Fragment>
        <header className="p-1 z-30 sticky top-0 font-bold text-xl">
          <_back />
          Explore
        </header>
        <Tabs state={[index, setIndex]}>
        <div className="bg-white border-b-2 border-t">
          <nav className="flex justify-around sm:flex-row">
          <_tab title="Lastest"/>
          <_tab title="Tags"/>
          <_tab title="Photos"/>
          <_tab title="Videos"/>
          <_tab title="Files"/>
          </nav>
        </div>

        <_panel component="test 1" />
        <_panel component="test 2" />
        <_panel component="test 3" />
        <_panel component="test 4" />
        <_panel component="test 5" />
        </Tabs>
      </Fragment>
    );
}
