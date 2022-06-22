import Link from "next/link" 

const EducationForm = () => {
  return (
    <div>
          <div className="d-flex flex-column flex-root">
			<div className="d-flex flex-column flex-lg-row flex-column-fluid stepper stepper-pills stepper-column" id="kt_create_account_stepper">
				{/* <!--begin::Aside--> */}
				{/* <div className="d-flex flex-column flex-lg-row-auto w-xl-500px bg-lighten shadow-sm">
					{/* <!--begin::Wrapper--> */}
					
					{/* <!--end::Wrapper--> 
				</div> */}
				{/* <!--begin::Aside-->
				<!--begin::Body--> */}
				<div className="d-flex flex-column flex-lg-row-fluid py-10">
					{/* <!--begin::Content--> */}
					<div className="d-flex flex-center flex-column flex-column-fluid">
						{/* <!--begin::Wrapper--> */}
						<div className="w-lg-800px p-10 p-lg-15 mx-auto">
							{/* <!--begin::Form--> */}
							<form className="my-auto pb-5"  id="kt_create_account_form">
								{/* <!--begin::Step 1--> */}
								<div className="current" data-kt-stepper-element="content">
									{/* <!--begin::Wrapper--> */}
									<div className="w-100">
										{/* <!--begin::Heading--> */}
										<div className="pb-10 pb-lg-15">
											{/* <!--begin::Title--> */}
											<h2 className="fw-bolder d-flex align-items-center text-dark">Have You graduated yet?
											{/* <i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Billing is issued based on your selected account type"></i> */}
                                            </h2>
											{/* <!--end::Title-->*/}
										</div>
										{/* <!--end::Heading-->
										<!--begin::Input group--> */}
										<div className="fv-row">
											{/* <!--begin::Row--> */}
											<div className="row">
												{/* <!--begin::Col--> */}
												<div className="col-lg-4 col-md-4 col-sm-6">
                                                
                                                    
													{/* <!--begin::Option--> */}
                                                    <Link href={"/GraduateForm"}>
                                                    {/* <input type="radio" className="btn-check" name="account_type" value="personal"  id="kt_create_account_form_account_type_personal" /> */}
													<label className="btn btn-outline btn-outline-default p-5 d-flex align-items-center mb-10" htmlFor="kt_create_account_form_account_type_personal">
															<span className="d-block fw-bold text-start">
                                                                <span className="svg-icon svg-icon-3x me-5">
															        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
															         	<path d="M20 14H18V10H20C20.6 10 21 10.4 21 11V13C21 13.6 20.6 14 20 14ZM21 19V17C21 16.4 20.6 16 20 16H18V20H20C20.6 20 21 19.6 21 19ZM21 7V5C21 4.4 20.6 4 20 4H18V8H20C20.6 8 21 7.6 21 7Z" fill="black" />
															         	<path opacity="0.3" d="M17 22H3C2.4 22 2 21.6 2 21V3C2 2.4 2.4 2 3 2H17C17.6 2 18 2.4 18 3V21C18 21.6 17.6 22 17 22ZM10 7C8.9 7 8 7.9 8 9C8 10.1 8.9 11 10 11C11.1 11 12 10.1 12 9C12 7.9 11.1 7 10 7ZM13.3 16C14 16 14.5 15.3 14.3 14.7C13.7 13.2 12 12 10.1 12C8.10001 12 6.49999 13.1 5.89999 14.7C5.59999 15.3 6.19999 16 7.39999 16H13.3Z" fill="black" />
															        </svg>
                                                            </span>
                                                                
																<span className="text-dark fw-bolder d-block fs-4 mb-2">YES</span>
																{/* <span className="text-muted fw-bold fs-6">Start as a student</span> */}
															</span>
														{/* <!--end::Info--> */}
													</label>
                                                    </Link>
													
													{/* <!--end::Option--> */}
												</div>
												{/* <!--end::Col-->
												<!--begin::Col--> */}

                                               

                                                <div className="col-lg-4 col-md-4 col-sm-6">
													{/* <!--begin::Option--> */}
													<input type="radio" className="btn-check" name="account_type" value="personal" checked="checked" id="kt_create_account_form_account_type_personal" />
                                                    <Link href={"/GraduateForm"}>
                                                   
													<label className="btn btn-outline btn-outline-default p-5 d-flex align-items-center mb-10" htmlFor="kt_create_account_form_account_type_personal">
														{/* <!--begin::Svg Icon | path: icons/duotune/communication/com005.svg--> */}
														
														{/* <!--end::Svg Icon-->
														<!--begin::Info--> */}
															<span className="d-block fw-bold text-start">
                                                                <span className="svg-icon svg-icon-3x me-5">				
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
															    	    <path d="M20 14H18V10H20C20.6 10 21 10.4 21 11V13C21 13.6 20.6 14 20 14ZM21 19V17C21 16.4 20.6 16 20 16H18V20H20C20.6 20 21 19.6 21 19ZM21 7V5C21 4.4 20.6 4 20 4H18V8H20C20.6 8 21 7.6 21 7Z" fill="black" />
															    	    <path opacity="0.3" d="M17 22H3C2.4 22 2 21.6 2 21V3C2 2.4 2.4 2 3 2H17C17.6 2 18 2.4 18 3V21C18 21.6 17.6 22 17 22ZM10 7C8.9 7 8 7.9 8 9C8 10.1 8.9 11 10 11C11.1 11 12 10.1 12 9C12 7.9 11.1 7 10 7ZM13.3 16C14 16 14.5 15.3 14.3 14.7C13.7 13.2 12 12 10.1 12C8.10001 12 6.49999 13.1 5.89999 14.7C5.59999 15.3 6.19999 16 7.39999 16H13.3Z" fill="black" />
															        </svg>
                                                                </span>
																<span className="text-dark fw-bolder d-block fs-4 mb-2">NO</span>
																{/* <span className="text-muted fw-bold fs-6">Start as a student</span> */}
															</span>
														{/* <!--end::Info--> */}
													</label>
                                                    </Link>
													{/* <!--end::Option--> */}
												</div>
												{/* <!--end::Col--> */}
											</div>
											{/* <!--end::Row--> */}
										</div>
										{/* <!--end::Input group--> */}
									</div>
									{/* <!--end::Wrapper--> */}
								</div>
							</form>
							{/* <!--end::Form--> */}
						</div>
						{/* <!--end::Wrapper--> */}
					</div>

				</div>
				{/* <!--end::Body--> */}
			</div>
		</div>
    </div>
  )
}

export default EducationForm