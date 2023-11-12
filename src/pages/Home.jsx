import { useState } from 'react'
import { Helmet } from 'react-helmet'
import { LoadingEffect } from './LoadingEffect';
import { DefaultToggler, EffectFunc } from './Components';
import { CleanUp, Names, People, System } from './links/HomeLinks';

export function Home() {
	const [loading, setLoading] = useState(true);
	const func = () => {
		
	}

	EffectFunc(setLoading, func);
  
	if(loading)
		return <LoadingEffect />
		
	
		
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

					<div className="row mt-5">
						<div className="col">
							<CleanUp />
							<div className="m-auto place-content-center text-center">
								<DefaultToggler msg="Toggle Names" Element={Names} className="d-inline-block me-2"/>
								<DefaultToggler msg="Toggle People" Element={People} className="d-inline-block"/>
								<DefaultToggler msg="Toggle Form" Element={System} />
							</div>
						</div>
					</div>
				</div>

				
			</>
		)
	else {
		return <LoadingEffect />
	}
}
