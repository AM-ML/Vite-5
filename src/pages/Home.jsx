import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { LoadingEffect } from './LoadingEffect';
import { EffectFunc } from './Components';

export function Home() {
	const [loading, setLoading] = useState(true);
	const func = () => {
		
	}

	EffectFunc(setLoading, func);
  
	if(loading)
		return <LoadingEffect />
		
	
	const Main = () => {
		return(
			<div className="container">
				<div className="row mt-4">
					
				</div>
			</div>
		)
	}
	
	
	if(!loading)
		return (
			<>
				<Helmet>
					<title>InQuill</title>
				</Helmet>

				
				<div className="container min-100vh">
					<div className="row">
						<div className="col">
							<h1 className="text-center text-blue text-bold">
								Home Page
							</h1>
						</div>
					</div>

					<div className="row">
						<div className="col">
							<Main />
						</div>
					</div>
				</div>

				
			</>
		)
	else {
		return <LoadingEffect />
	}
}
