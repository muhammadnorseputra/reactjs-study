import React from 'react'
import logo from '../../../assets/img/logo/logo-big.png'
import { MoonLoader } from 'react-spinners';

export const Loader_intro = () => {
  return (
    <React.Fragment>
    <div style={{height: '95vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <img src={logo} alt="Logo Balangan" style={{width: '80px'}}/>
      
    </div>
    </React.Fragment>
  );
}

export const Loader_content = (props) => {
  return (
      <div className="flex justify-center items-center w-full h-screen bg-white shadow">
      <MoonLoader
          color={'#123abc'} 
          loading={props.isLoading} 
          size={30}
        />
      </div>
  );
};