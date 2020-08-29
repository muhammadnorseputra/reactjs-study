import React, { createContext } from 'react';

const RootContext = createContext();

// Provider 
const Provider = RootContext.Provider;
const GlobalProvider = (Children) => {
	return(
			class ParentComp extends React.Component {
				  state = {
				      connection: true
				  }

				  dispatch = (action) => {
				  	if(action.type === 'ONLINE') {
					  	return this.setState({
					  		connection: true
					  	})	
				  	}
				  	if(action.type === 'OFFLINE') {
				  		return this.setState({
					  		connection: false
					  	})	
				  	}
				  }

				render() {
					return(
							<Provider value={{
								state: this.state,
								dispatch: this.dispatch
							}}>
								<Children {...this.props}/>
							</Provider>
						)
				}
			}
		)
}

export default GlobalProvider;

// Consumer
const Consumer = RootContext.Consumer;
export const GlobalConsumer = (Children) => {
	return(
		class ParentCusomer extends React.Component {
			render() {
				return(
						<Consumer>
							{
								value => {
									return(
											<Children {...this.props} {...value} />
										)
								}
							}
						</Consumer>
					)
			}
		}
		
		)
}