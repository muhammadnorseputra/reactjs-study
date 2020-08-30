import React, { Fragment, useState, useEffect } from 'react'
import { Tabs } from '@bumaga/tabs' 
import { Back } from '../../../components/atoms/Button/Back'
import { MyTab, MyPanel } from '../../../components/atoms/Button/Tab'
import { SimpleImg } from 'react-simple-img';

export const Office = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    setIndex(1)
  }, [])

    return (
      <Fragment>
        <header className="p-1 my-2 z-30 sticky top-0 font-bold text-xl">
          <Back />
          Office
        </header>
        <div>
          <div className="bg-white rounded-t-lg shadow">
            <div className="h-64 overflow-hidden border-t bg-cover bg-center bg-no-repeat">
              <SimpleImg
                placeholder="linear-gradient(rgb(30, 87, 153) 0%, rgb(125, 185, 232) 100%)"
                src="https://scontent.fbdj2-1.fna.fbcdn.net/v/t1.0-9/106995197_111440770632899_3912732846559373341_o.jpg?_nc_cat=104&_nc_sid=e3f864&_nc_eui2=AeHOUwQ2HOtBRafimS9kv2dzr-Z4vt9rZ0mv5ni-32tnSWvLB3bIy5WERDDBHc5hK8ARIfBFMSgw5374b1RqSZWr&_nc_ohc=bKovj6vxBzIAX9IGth2&_nc_ht=scontent.fbdj2-1.fna&oh=f40295cd53fab4af09fc48c2a83c0542&oe=5F6F7FDD"
                className="w-full z-0 rounded-t-lg"
                alt="cover-profile"
              />
            </div>
            <div className="flex justify-start">
              <div className="rounded-full border-solid border-white border-4 w-32 h-32 z-10 -mt-16 ml-5 overflow-hidden">
                <img
                  src="https://scontent.fbdj2-1.fna.fbcdn.net/v/t1.0-9/85071418_106611221115854_331630689688841953_o.jpg?_nc_cat=106&_nc_sid=09cbfe&_nc_eui2=AeF3Ay6vM1378fukOqJNMJwFVMOMZvM_F0RUw4xm8z8XRLxvyfOQBbMti7uiTqtJYIE_9g2n8ofCsjOoyLNVYKJ8&_nc_ohc=5N4uVCqPMQAAX_fRc1Q&_nc_ht=scontent.fbdj2-1.fna&oh=418d8cb04bc8580031543d45e04d0f1c&oe=5F6E3F1A"
                  alt="profile-pic"
                />
              </div>
            </div>
            <div className="text-left px-8 pb-6 pt-2">
              <h3 className="text-black text-xl font-bold">
                Badan Kepegawaian, Pendidikan dan Pelatihan Daerah
              </h3>
              <p className="mt-2 font-sans font-light text-grey-dark">
                Hello, i'm from another the other side!
              </p>
            </div>
            <Tabs state={[index, setIndex]}>
              <div className="bg-white border-b-2">
                <nav className="flex justify-around sm:flex-row">
                  <MyTab title="Visi & Misi" />
                  <MyTab title="Struktur Oraganisasi" />
                </nav>
              </div>
              <MyPanel component="test Visi" />
              <MyPanel component="test Struktur" />
            </Tabs>
          </div>
        </div>
      </Fragment>
    );
}
