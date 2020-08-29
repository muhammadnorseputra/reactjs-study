import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useHistory } from "react-router-dom";

export const Back = (props) => {
	const history = useHistory();
	return (
			<button onClick={() => history.goBack()} className="rounded-full h-10 w-10 hover:bg-gray-100 text-gray-800 mr-2">
            <FontAwesomeIcon
            icon={['fas', 'arrow-left']}
          />
          </button>
		)
}