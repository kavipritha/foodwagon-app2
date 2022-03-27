import React from "react";
import './deal.scss';

//import discountItem1 from '../../static/images/discount-item-1.png'

class Deals extends React.Component {
    constructor(props) {
      super(props);
      this.state = {  dealItem: this.props.dealItem }
    }
  render() {
    return (
      <div className="deal">
            <div className="row h-100 gx-2 mt-7">
              <div className="col-sm-6 col-lg-3 mb-3 mb-md-0 h-100 pb-4">
                <div className="card card-span h-100">
                  <div className="position-relative"> 
                  <img className="img-fluid rounded-3 w-100" src={this.state.dealItem.image} alt="..." />
                    <div className="card-actions">
                      <div className="badge badge-foodwagon bg-primary p-4">
                        <div className="d-flex flex-between-center">
                          <div className="text-white fs-7">{this.state.dealItem.discount}</div>
                          <div className="d-block text-white fs-2">% <br />
                            <div className="fw-normal fs-1 mt-2">Off</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-body px-0">
                    <h5 className="fw-bold text-1000 text-truncate">{this.state.dealItem.name}</h5><span className="badge bg-soft-danger py-2 px-3"><span className="fs-1 text-danger">6 days Remaining</span></span>
                  </div><a className="stretched-link" href="#"></a>
                </div>
              </div>
              
              </div>
            </div> 
    );
  }
}

export default Deals;