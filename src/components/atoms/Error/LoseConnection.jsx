import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NoConection from '../../../assets/img/error/no-internet.png'
import { useHistory } from "react-router-dom";

export const LoseConnection = () => {
	
	const history = useHistory();
	const handleReload= () => {
		window.location.reload(false)
	}

	return(
			<React.Fragment>
				<div className="flex justify-center items-center h-screen">
					<div className="font-bold text-gray-500 text-center">
						<img className="w-20 block mx-auto opacity-50" src={ NoConection } alt="No Internet Connection"/>
						<br/>
						Koneksi Internet Lambat atau Tidak Terhubung
						<br/>
						<br/>
						<button onClick={handleReload} className="px-3 py-2 rounded-full bg-gray-100">
							<FontAwesomeIcon icon={['fas', 'redo']} /> Try again
						</button>
					</div>
				</div>
			</React.Fragment>
		)
}