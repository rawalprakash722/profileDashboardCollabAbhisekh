import styles from '../styles/Home.module.css'
import Head from 'next/head'
// import 'dashboard.css'

const Dashboard = () => {
  return (
    <div>
        <Head>
            <title>Home</title>
        </Head>

	
        <div className="card mb-5 mb-lg-8">
		<div className="card-body pt-9 mt-n3">
			{/* <!--begin::Details--> */}
			<div className="d-flex flex-wrap flex-sm-nowrap">
				{/* <!--begin: Pic--> */}
				<div className="me-7 mb-4">
					<div className="symbol symbol-100px symbol-lg-160px symbol-fixed position-relative">
						<img src="/assets/media/avatars/300-1.jpg" alt="image" />
					</div>
				</div>
				{/* <!--end::Pic-->
				<!--begin::Info--> */}
				<div className="flex-grow-1">
					{/* <!--begin::Title--> */}
					<div className="d-flex justify-content-between align-items-start flex-wrap mb-2">
						{/* <!--begin::User--> */}
						<div className="d-flex flex-column">
							{/* <!--begin::Name--> */}
							<div className="d-flex align-items-center mb-2">
								<a href="#" className="text-gray-900 text-hover-primary fs-2 fw-bolder me-1">Nikhil Upreti</a>
								<a href="#">
									{/* <!--begin::Svg Icon | path: icons/duotune/general/gen026.svg--> */}
									<span className="svg-icon svg-icon-1 svg-icon-primary">
									</span>
									{/* <!--end::Svg Icon--> */}
								</a>
							</div>
							{/* <!--end::Name-->
							<!--begin::Info--> */}
							<div className="d-flex flex-wrap fw-bold fs-6 mb-4 pe-2">
								<a href="#" className="d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2">
								{/* <!--begin::Svg Icon | path: icons/duotune/communication/com006.svg--> */}
								<span className="svg-icon svg-icon-4 me-1">
									{/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
										<path opacity="0.3" d="M22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2C17.5 2 22 6.5 22 12ZM12 7C10.3 7 9 8.3 9 10C9 11.7 10.3 13 12 13C13.7 13 15 11.7 15 10C15 8.3 13.7 7 12 7Z" fill="currentColor"></path>
										<path d="M12 22C14.6 22 17 21 18.7 19.4C17.9 16.9 15.2 15 12 15C8.8 15 6.09999 16.9 5.29999 19.4C6.99999 21 9.4 22 12 22Z" fill="currentColor"></path>
									</svg> */}
									 Normal User
								</span>
          						 </a>
								{/* <!--end::Svg Icon-->Developer</a> */}
							</div>
								{/* <!--end::Info--> */}
							</div>
							{/* <!--end::User */}
							</div>
							{/* <!--end::Title-->
							<!--begin::Stats--> */}
							<div className="d-flex flex-wrap flex-stack">
								{/* <!--begin::Wrapper--> */}
								<div className="d-flex flex-column flex-grow-1 pe-8">
									{/* <!--begin::Stats--> */}
									<div className="d-flex flex-wrap">
										{/* <!--begin::Stat--> */}
										<div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
											{/* <!--begin::Number--> */}
											<div className="d-flex align-items-center">
												{/* <!--begin::Svg Icon | path: icons/duotune/arrows/arr066.svg--> */}
												
												{/* <!--end::Svg Icon--> */}
												<div className="fs-2 fw-bolder counted" data-kt-countup="true" data-kt-countup-value="4500" data-kt-countup-prefix="$">100</div>
											</div>
											{/* <!--end::Number-->
											<!--begin::Label--> */}
											<div className="fw-bold fs-6 text-gray-400">Total followers</div>
											{/* <!--end::Label--> */}
										</div>
										{/* <!--end::Stat-->
										<!--begin::Stat--> */}
										<div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3 ">
											{/* <!--begin::Number--> */}
											<div className="d-flex align-items-center">
													<div className="fs-2 fw-bolder counted" data-kt-countup="true" data-kt-countup-value="80">80</div>
												</div>
												{/* <!--end::Number-->
												<!--begin::Label--> */}
												<div className="fw-bold fs-6 text-gray-400">Following</div>
												{/* <!--end::Label--> */}
											</div>											
										</div>
									</div>
									{/* <!--end::Wrapper-->
									<!--begin::Progress--> */}
									
										{/* <!--end::Progress--> */}
							</div>
							
							{/* <!--end::Stats--> */}
									</div>
									{/* <!--end::Info--> */}
								</div>
								
								{/* <!--end::Details--> */}
							</div>
							<div className="d-flex align-items-center w-100%  flex-column  mt-n6 p-5" style={{backgroundColor:"#FFF8E1"}}>
								<div className="d-flex justify-content-between w-100 mt-auto mb-2">
									<span className="fw-bold fs-6 text-400">Profile Completion status</span>
									<span className="fw-bolder fs-6">60%</span>
								</div>
								<div className="h-10px mx-3 w-100 mb-n3 rounded" style={{backgroundColor: "#DCDCDC"}}>
									<div className="bg-success rounded h-10px" role="progressbar" style={{width: "60%"}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
								</div>
							</div>
			</div>
    </div>
 
    
  )
}

export default Dashboard