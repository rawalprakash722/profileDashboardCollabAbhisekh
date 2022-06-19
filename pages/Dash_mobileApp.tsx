import { Button } from "react-bootstrap"

const Dash_mobileApp = () => {
    return (
      <div>
        {/* <!--begin::Col--> */}
        <div className="card mb-5 mb-xxl-8">
            {/* <!--begin::Feeds Widget 1--> */}
            <div className="card mb-5 ">
                {/* <!--begin::Body--> */}
                <div className="card-body p-5">
                    {/* <!--begin::Header--> */}
                    <div className="align-items-center text-center">
                        <h3>Get Our Mobile App</h3>
                        <div>
                        <img src="mobile.png" alt="phone" className="mb-6"/>
                        </div>
                       <div>
                       <a className="btn btn-dark me-2 " style={{width:"12rem"}}>Explore</a>
                        <a className="btn btn-white text-black border border-dark border border-2 rounded-3  fw-bold " style={{width:"12rem"}}>Learn More</a>
                       </div>
                    </div>
                </div>
                    {/* <!--end::Timeline--> */}
            </div>
                {/* <!--end: Card Body--> */}
        </div>
            {/* <!--end: List Widget 5--> */}
    </div>
                                          
    )
  }
  
  export default Dash_mobileApp