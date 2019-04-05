import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from './actions/cartActions';
import './style.css';
import Modal from './Modal';










class Home extends Component {


    constructor() {
        super();

        this.state = {
            isShowing: false
        }
    }


    handleClick = (id) => {
        this.props.addToCart(id);

    }
    openModalHandler = () => {
        this.setState({
            isShowing: true


        });



    }

    closeModalHandler = () => {
        this.setState({
            isShowing: false
        });
    }








    render() {
        let itemList = this.props.items.map(item => {
            return (


                <div className="card" key={item.id}>
                    <div className="card-image">
                        <img src={item.img} alt={item.title} />
                        <span className="card-title">{item.title}</span>



                        <span to="/" className="btn-floating halfway-fab waves-effect waves-light red" onClick={() => { this.handleClick(item.id) }}><i className="material-icons">add</i></span>
                    </div>

                    <div className="card-content">
                        <p>{item.desc}</p>
                        <p><b>Price: ${item.price}</b></p>

                        <button className="carts" type="button" onClick={() => { this.handleClick(item.id) }} >ADD TO CART</button>



                    </div>

                    <div className="App">
                        <div>

                            {this.state.isShowing ? <div onClick={this.closeModalHandler} className="back-drop"></div> : null}

                            <button className="open-modal-btn" onClick={this.openModalHandler}  >gfhf</button>


                            <Modal
                                className="modal"
                                show={this.state.isShowing}
                                close={this.closeModalHandler}>


                                <button className="carts" type="button" onClick={() => { this.handleClick(item.id) }} >ADD TO CART</button> */}
        </Modal>
                        </div>
                    </div>



                </div>

            )
        })




        return (
            <div className="container">
                <h3 className="center">Our items</h3>
                <div className="box">
                    {itemList}
                </div>
            </div>

        )


    }
}
const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}
const mapDispatchToProps = (dispatch) => {

    return {
        addToCart: (id) => { dispatch(addToCart(id)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);













