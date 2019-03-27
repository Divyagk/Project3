

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
							<img className="teamMatePic" src={require("../images/item5.jpg")} alt="Greg thumbnail"></img>

							<img className="teamMatePic" src={require("../images/item6.jpg")} alt="Sam thumbnail"></img>
							<img className="teamMatePic" src={require("../images/item4.jpg")} alt="Greg thumbnail"></img>
							<img className="teamMatePic" src={require("../images/item3.jpg")} alt="Greg thumbnail"></img>
							<img className="teamMatePic" src={require("../images/item2.jpg")} alt="Greg thumbnail"></img>
							<img className="teamMatePic" src={require("../images/item1.jpg")} alt="Greg thumbnail"></img>
						
						</div>
					</div>


				</div>

				
			</section>
		</div>





	)
}


export default home