import React from 'react'
import logo from '../../../assets/img/logo/logo.png'
import { MoonLoader } from 'react-spinners';

export const Loader_intro = () => {
  return (
    <React.Fragment>
    <center>
      <img src={logo} alt="Logo Balangan" className="p-2"/>
    </center>
    </React.Fragment>
  );
}

export const Loader_content = (props) => {
  return (
      <div className="flex justify-center items-center w-full h-screen">
      <MoonLoader
          color={'#123abc'} 
          loading={props.isLoading} 
          size={30}
        />
      </div>
  );
};