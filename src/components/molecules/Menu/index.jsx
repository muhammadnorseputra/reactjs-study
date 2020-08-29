import React from 'react';
import MenuItem from '../../atoms/MenuItems';
import StickyBox from "react-sticky-box";
import SkyLight from 'react-skylight';
import imgLogin from '../../../assets/img/svg/undraw_secure_login_pdn4.svg'
import Toast from 'light-toast';

class Menu extends React.Component {
  render() {
    const modalStyle = {
      width: '60%',
      marginLeft: '-30%',
      padding: '0px',
      backgroundColor: 'trasparent',
      boxShadow: 'none'
    }
    const modalOverlay = {
      backgroundColor: 'rgba(255,255,255,0.8)'
    }
    const modalCloseBtn = {
      right: '0px',
      fontSize: '2em',
      top: '-40px'
    }
  return (
    <React.Fragment>
    <StickyBox bottom={false} offsetTop={80} offsetBottom={20}>
      <nav>
        <ul className="ml-2 mt-5">
          <MenuItem title="Home" icon="home" path="/" />
          <MenuItem title="Office" icon="building" path="/office" />
          <MenuItem title="Explore" icon="compass" path="/explore" />
          <MenuItem title="Information Cpns" icon="user" path="/cpns" />
          <MenuItem title="Notification" icon="bell" path="/notification" />
        </ul>
      </nav>
      <div className="mt-5 flex justify-center">
        <button onClick={() => this.simpleDialog.show()} className="bg-green-400 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full block">
          Registartion / Login
        </button>
      </div>
      </StickyBox>
      <SkyLight dialogStyles={modalStyle} overlayStyles={modalOverlay} closeButtonStyle={modalCloseBtn} hideOnOverlayClicked ref={ref => this.simpleDialog = ref}>
        <div
  className="container max-w-md mx-auto xl:max-w-3xl h-full flex bg-white rounded-lg shadow-lg border border-4"
>
  <div className="flex justify-center items-center hidden xl:block xl:w-1/2 h-100 my-8">
    <img
      src={imgLogin}
      alt="my login"
    />
  </div>
  <div className="w-full xl:w-1/2 p-8">
    <form method="post" action="#" onSubmit="return false">
      <h1 className=" text-2xl font-bold">Sign in to your account</h1>
      <div>
        <span className="text-gray-600 text-sm">
          Don't have an account?
        </span>
        <span className="text-gray-700 text-sm font-semibold">
          Sign up
        </span>
      </div>
      <div className="mb-4 mt-6">
        <label
          className="block text-gray-700 text-sm font-semibold mb-2"
          htmlFor="email"
        >
          Email
        </label>
        <input
          className="text-sm appearance-none rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline h-10"
          id="email"
          type="text"
          placeholder="Your email address"
        />
      </div>
      <div className="mb-6 mt-6">
        <label
          className="block text-gray-700 text-sm font-semibold mb-2"
          htmlFor="password"
        >
          Password
        </label>
        <input
          className="text-sm bg-gray-200 appearance-none rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline h-10"
          id="password"
          type="password"
          placeholder="Your password"
        />
        <a
          className="inline-block align-baseline text-sm text-gray-600 hover:text-gray-800"
          href="/forgot"
        >
          Forgot Password?
        </a>
      </div>
      <div className="flex w-full mt-8">
        <button 
          className="w-full bg-gray-800 hover:bg-grey-900 text-white text-sm py-2 px-4 font-semibold rounded focus:outline-none focus:shadow-outline h-10"
          type="button"
        >
          Sign in
        </button>
      </div>
    </form>
  </div>
</div>
      </SkyLight>
    </React.Fragment>
  );
}
}


export default Menu;