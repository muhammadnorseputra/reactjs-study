import React from 'react'
import logo from '../../../assets/img/logo/logo-big.png'
import { MoonLoader } from 'react-spinners';

export const Loader_intro = () => {
  return (
    <React.Fragment>
    <div style={{height: '100vh', top: '0', left: '0', width: '100%', position: 'absolute', backgroundColor: '#edf2f7', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <img src={logo} alt="Logo Balangan" style={{width: '80px'}}/>
    </div>
    </React.Fragment>
  );
}

export const Loader_content = (props) => {
  return (
    <React.Fragment>
      <div className="flex justify-center items-center w-full rounded-lg" style={{height: props.height, backgroundColor: props.bgColorLoading}}>
      <MoonLoader
          color={'#123abc'} 
          loading={props.isLoading} 
          size={props.sizeLoading}
        />
      </div>
    </React.Fragment>
  );
};

Loader_content.defaultProps = {
  sizeLoading: 30,
  height: '100vh',
  bgColorLoading: 'trasparent'
}