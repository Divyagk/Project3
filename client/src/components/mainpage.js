

import React from 'react';

// TODO - add proptypes

const home = props => {

	return (
		<div>

			<div className="home">
				<img className="Pic" src={require("../images/images.jpg")} alt="coverimage" width="50%" height="400vh;"></img>
				<img className="Pic" src={require("../images/imagess.jpg")} alt="coverimage" width="50%" height="400vh;"></img>

				<h1>



				</h1>
			</div>


			{/* </div> */}
			<section className="grid">

				<div className="col">
					<div className="row-md-6 col-lg-4">
						<div className="displayimages">
							<h3>Our Products</h3>
					
							<img src={require("../images/item1.jpg")} alt="image1" width="15%" height="300vh;" ></img>
							<img src={require("../images/item5.jpg")} alt="image2" width="15%" height="300vh;"></img>
							<img src={require("../images/item9.jpg")} alt="image3" width="15%" height="300vh;"></img>
							<img src={require("../images/item15.jpg")} alt="image4" width="15%" height="300vh;"></img>
							<img src={require("../images/item17.jpg")} alt="image5" width="15%" height="300vh;"></img>
							<img src={require("../images/item21.jpg")} alt="image5" width="15%" height="300vh;"></img>

						</div>
					</div>


				</div>


			</section>
		</div>





	)
}


export default home