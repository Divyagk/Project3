

import React from 'react';
import "../components/mainpage.css"
// TODO - add proptypes

const home = props => {

	return (
		<div>

			<div className="home">
				<img className="Pic" src={require("../images/images.jpg")} alt="coverimage" width="100%" height="400vh;"></img>
				<h1>


				</h1>
			</div>


			{/* </div> */}
			<section className="grid">

				<div className="col">
					<div className="row-md-6 col-lg-4">
						<div className="teamMate">
							<img  src={require("../images/item1.jpg")} alt="image1"></img>

							<img  src={require("../images/item5.jpg")} alt="image2"></img>
							<img src={require("../images/item9.jpg")} alt="image3"></img>
							<img  src={require("../images/item15.jpg")} alt="image4"></img>
							<img src={require("../images/item17.jpg")} alt="image5"></img>
							<img src={require("../images/item21.jpg")} alt="image5"></img>
						
						</div>
					</div>


				</div>

				
			</section>
		</div>





	)
}


export default home