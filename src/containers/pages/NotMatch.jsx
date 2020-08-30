import React from 'react'
import {
  Link,
  useLocation
} from "react-router-dom";

export default function NotMatch () {
	let location = useLocation();
	console.log(location);
	return(
			<React.Fragment>
				<div className="w-full text-center p-4 border-t-4 border-red-600 sticky top-0" style={{top: '54px'}}>
			      <div className="text-6xl font-medium">404</div>
			      <div className="text-xl md:text-3xl font-medium mb-4">
			        Oops. This page has gone missing.
			      </div>
			      <div className="text-lg mb-8">
			        You may have mistyped the address <span className="text-red-600">{ location.pathname }</span>.
			      </div>
			      <Link to="/" className="border border-white bg-gray-100 rounded-full py-2 px-4">back to home</Link>
			    </div>
			</React.Fragment>
		)
}