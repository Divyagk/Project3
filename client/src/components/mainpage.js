

import React from 'react';
import "../components/mainpage.css"
// TODO - add proptypes

const home = props => {

	return (
		<div>
			<div className="home">
				<img className="Pic" src={require("../images/images.jpg")} alt="coverimage" width="100%"></img>
				<h1> Fashion House </h1>
			</div>
			<div className="loggedOut">
				<h1> WELCOME to Fashion House </h1>
				<br />
			
				<section className="boxes">

					<div className="row">
						<div className="col-md-6 col-lg-4">
							<div className="learnBox">
								<a><p></p></a>
							</div>
						</div>
						<div className="col-md-6 col-lg-4">
							<div className="teachBox">
								<a ><p></p></a>

							</div>
						</div>
						<div className="col-md-6 col-lg-4">
							<div className="feelingsBox">
								<a ><p></p></a>

							</div>
						</div>
					</div>
				</section>
			</div>
			<footer className="absoluteFooter font-small blue">
				<div className="footer-copyright py-3 text-center">

				</div>
			</footer>
		</div>


	)
}


export default home