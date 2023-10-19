import React from 'react'


export default function Nav() {
    return (
        <>
            <div className='container-fluid justify-content-end' style={{ height: "100vh" }}>
                <div className='row '>
                    <div className='col-2 text-center' style={{ background: "#040440", color: "white" }}>

                        <div className='row my-1'>
                            <div className='col-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="45" fill="currentColor" className="bi bi-nut" viewBox="0 0 16 16">
                                    <path d="m11.42 2 3.428 6-3.428 6H4.58L1.152 8 4.58 2h6.84zM4.58 1a1 1 0 0 0-.868.504l-3.428 6a1 1 0 0 0 0 .992l3.428 6A1 1 0 0 0 4.58 15h6.84a1 1 0 0 0 .868-.504l3.429-6a1 1 0 0 0 0-.992l-3.429-6A1 1 0 0 0 11.42 1H4.58z" />
                                    <path d="M6.848 5.933a2.5 2.5 0 1 0 2.5 4.33 2.5 2.5 0 0 0-2.5-4.33zm-1.78 3.915a3.5 3.5 0 1 1 6.061-3.5 3.5 3.5 0 0 1-6.062 3.5z" />
                                </svg>
                            </div>
                            <div className='col-10'>
                                <h2>Dashboard</h2>
                            </div>
                        </div>
                        <hr />
                        <nav className="navbar bg-#040440 ">

                            <div className="container im" style={{ maxWidth: '24rem' }}>
                                <a className="text-white navbar-brand mb-0 h1" href="/">

                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-speedometer2" viewBox="0 0 16 16">
                                        <path d="M8 4a.5.5 0 0 1 .5.5V6a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 8 4zM3.732 5.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 10a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 10zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 9.31a.91.91 0 1 0 1.302 1.258l3.434-4.297a.389.389 0 0 0-.029-.518z" />
                                        <path fillRule="evenodd" d="M0 10a8 8 0 1 1 15.547 2.661c-.442 1.253-1.845 1.602-2.932 1.25C11.309 13.488 9.475 13 8 13c-1.474 0-3.31.488-4.615.911-1.087.352-2.49.003-2.932-1.25A7.988 7.988 0 0 1 0 10zm8-7a7 7 0 0 0-6.603 9.329c.203.575.923.876 1.68.63C4.397 12.533 6.358 12 8 12s3.604.532 4.923.96c.757.245 1.477-.056 1.68-.631A7 7 0 0 0 8 3z" />
                                    </svg>{"    "}Dashboard
                                </a>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                                </svg>
                            </div>
                        </nav>

                        <nav className="navbar bg-body-tertiary-#040440">
                            <div className="container im" style={{ maxWidth: '24rem' }}>
                                <a className="navbar-brand text-white md-0 h1" href="/" >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-boxes" viewBox="0 0 16 16">
                                        <path d="M7.752.066a.5.5 0 0 1 .496 0l3.75 2.143a.5.5 0 0 1 .252.434v3.995l3.498 2A.5.5 0 0 1 16 9.07v4.286a.5.5 0 0 1-.252.434l-3.75 2.143a.5.5 0 0 1-.496 0l-3.502-2-3.502 2.001a.5.5 0 0 1-.496 0l-3.75-2.143A.5.5 0 0 1 0 13.357V9.071a.5.5 0 0 1 .252-.434L3.75 6.638V2.643a.5.5 0 0 1 .252-.434L7.752.066ZM4.25 7.504 1.508 9.071l2.742 1.567 2.742-1.567L4.25 7.504ZM7.5 9.933l-2.75 1.571v3.134l2.75-1.571V9.933Zm1 3.134 2.75 1.571v-3.134L8.5 9.933v3.134Zm.508-3.996 2.742 1.567 2.742-1.567-2.742-1.567-2.742 1.567Zm2.242-2.433V3.504L8.5 5.076V8.21l2.75-1.572ZM7.5 8.21V5.076L4.75 3.504v3.134L7.5 8.21ZM5.258 2.643 8 4.21l2.742-1.567L8 1.076 5.258 2.643ZM15 9.933l-2.75 1.571v3.134L15 13.067V9.933ZM3.75 14.638v-3.134L1 9.933v3.134l2.75 1.571Z" />
                                    </svg>
                                    {"  "}Product
                                </a>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                                </svg>
                            </div>
                        </nav>

                        <nav className="navbar bg-body-tertiary-#040440">
                            <div className="container im" style={{ maxWidth: '24rem' }}>
                                <a className="navbar-brand text-white" href="/">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                        <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                                    </svg>
                                    {" "}Customer</a>


                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                                </svg>
                            </div>
                        </nav>

                        <nav className="navbar bg-body-tertiary-#040440">
                            <div className="container im" style={{ maxWidth: '24rem' }}>
                                <a className="navbar-brand text-white" href="/">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-wallet2" viewBox="0 0 16 16">
                                        <path d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499L12.136.326zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484L5.562 3zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z" />
                                    </svg>
                                    {"  "}Income</a>

                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                                    <path fillsnameule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                                </svg>
                            </div>
                        </nav>

                        <nav className="navbar bg-body-tertiary-#040440">
                            <div className="container im" style={{ maxWidth: '24rem' }}>
                                <a className="navbar-brand text-white" href="/">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-patch-check" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M10.354 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                                        <path d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911l-1.318.016z" />
                                    </svg>
                                    {"  "}Promote
                                </a>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                                </svg>
                            </div>
                        </nav>

                        <nav className="navbar bg-body-tertiary-#040440">
                            <div className="container im" style={{ maxWidth: '24rem' }}>
                                <a className="navbar-brand text-white" href="/">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chat-right-dots" viewBox="0 0 16 16">
                                        <path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1H2zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12z" />
                                        <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                                    </svg>
                                    {"  "}Help</a>


                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                                </svg>


                            </div>
                        </nav>

                        <br/>
                        <br/>

                        <br/>
                        <br/>


                        <hr/>
                        <div className="dropdown align-items-end ">
                            <a href="/" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src="" alt="" width="32" height="32" className="rounded-circle me-2" />
                                <strong>Profile</strong>
                            </a>
                            <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1" >
                                <li><a className="dropdown-item" href="/">New project...</a></li>
                                <li><a className="dropdown-item" href="/">Settings</a></li>
                                <li><a className="dropdown-item" href="/">Profile</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="/">Sign out</a></li>
                            </ul>
                        </div>
                        
                    </div>
                    

                    {/* RIGHT SIDE CONTAINER */}
                    
                    <div className='col-10'>
                        <nav className="navbar bg-body-tertiary">
                            <div className="container-fluid">
                                <a className="navbar-brand" href='/'>Hello, profile</a>
                                <form className="d-flex" role="search">
                                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                                    <button className="btn btn-outline-success" type="submit">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="30" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                        </svg>
                                    </button>
                                </form>
                            </div>
                        </nav>

                        <div className='container p-3'>
                            <div className='row'>

                                <div className='col-3' >
                                    <div className="card text-bg-light mb-3" style={{ maxWidth: "540px" }}>
                                        <div className="row g-0">
                                            <div className="col-md-4 ">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="70" height="100" fill="green" className="bi bi-currency-dollar" viewBox="0 0 16 16">
                                                    <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z" />
                                                </svg>

                                            </div>
                                            <div className="col-md-8">
                                                <div className="card-body">
                                                    <p className="card-title text-body-secondary">Earning</p>
                                                    <p className="card-text">
                                                        <strong>$198K</strong>
                                                        <span className="text-success">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up" viewBox="0 0 16 16">
                                                                <path fillRule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z" />
                                                            </svg>
                                                            37.8%{" "}
                                                        </span>
                                                        this Month
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='col-3'>
                                    <div className="card text-bg-light mb-3" style={{ maxWidth: "540px" }}>
                                        <div className="row g-0">
                                            <div className="col-md-4">

                                                <svg xmlns="http://www.w3.org/2000/svg" width="70" height="100" fill="#a101fe" className="bi bi-file-text" viewBox="0 0 16 16">
                                                    <path d="M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1H5z" />
                                                    <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z" />
                                                </svg>

                                            </div>
                                            <div className="col-md-8">
                                                <div className="card-body">
                                                    <p className="card-title text-body-secondary">Order</p>
                                                    <p className="card-text">
                                                        <strong>$2.4K</strong>
                                                        <span className="text-danger">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down-short" viewBox="0 0 16 16">
                                                                <path fillRule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z" />
                                                            </svg>
                                                            2%{" "}
                                                        </span>
                                                        this Month
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='col-3'>
                                    <div className="card text-bg-light mb-3" style={{ maxWidth: "540px" }}>
                                        <div className="row g-0">
                                            <div className="col-md-4 ">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="100" fill="Blue" className="bi bi-credit-card-2-back" viewBox="0 0 16 16">
                                                    <path d="M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1z" />
                                                    <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1z" />
                                                </svg>
                                            </div>
                                            <div className="col-md-8">
                                                <div className="card-body">
                                                    <p className="card-title text-body-secondary">Balence</p>
                                                    <p className="card-text">
                                                        <strong>$2.4K</strong>
                                                        <span className='text-danger'>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down-short" viewBox="0 0 16 16">
                                                                <path fillRule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z" />
                                                            </svg>
                                                            2%
                                                        </span>
                                                        this Month
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='col-3' >
                                    <div className="card  mb-3 text-bg-light " style={{ maxWidth: "540px" }}>
                                        <div className="row g-0">
                                            <div className="col-md-4">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="70" height="100" fill="red" className="bi bi-handbag" viewBox="0 0 16 16">
                                                    <path d="M8 1a2 2 0 0 1 2 2v2H6V3a2 2 0 0 1 2-2zm3 4V3a3 3 0 1 0-6 0v2H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11zm-1 1v1.5a.5.5 0 0 0 1 0V6h1.639a.5.5 0 0 1 .494.426l1.028 6.851A1.5 1.5 0 0 1 12.678 15H3.322a1.5 1.5 0 0 1-1.483-1.723l1.028-6.851A.5.5 0 0 1 3.36 6H5v1.5a.5.5 0 1 0 1 0V6h4z" />
                                                </svg>
                                            </div>
                                            <div className="col-md-8">
                                                <div className="card-body">
                                                    <p className="card-title text-body-secondary ">Total sales</p>
                                                    <p className="card-text">
                                                        <strong>$89K</strong>
                                                        <span className='text-success'>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up " viewBox="0 0 16 16">
                                                                <path fillRule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z" />
                                                            </svg>
                                                            11%
                                                        </span>
                                                        this Month
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* <hr /> */}
                        <div className='row p-3'>
                            <div className='col-8'>
                                {/* <Chart/> */}

                                <div className='row text-bg-light align-items-end'>
                                    <h4 >Overview </h4>
                                    <p>Monthly Earning</p>

                                    <div className='col-1 '>
                                        <div className="lg:rounded-md " style={{ height: "135px", width: "20px", background: "#f2efff" }}></div>
                                        <p>Jan</p>
                                    </div>

                                    <div className='col-1'>
                                        <div className="lg:rounded-md" style={{ height: "120px", width: "20px", background: "#f2efff" }}></div>


                                        <p>Feb</p>
                                    </div>

                                    <div className='col-1'>
                                        <div className="lg:rounded-md" style={{ height: "80px", width: "20px", background: "#f2efff" }}></div>

                                        <p>Mar</p>
                                    </div>

                                    <div className='col-1'>
                                        <div className="lg:rounded-md" style={{ height: "100px", width: "20px", background: "#f2efff" }}></div>

                                        <p>Apr</p>
                                    </div>

                                    <div className='col-1'>
                                        <div className="lg:rounded-md" style={{ height: "140px", width: "20px", background: "#f2efff" }}></div>

                                        <p>May</p>
                                    </div>

                                    <div className='col-1'>
                                        <div className="lg:rounded-md" style={{ height: "120px", width: "20px", background: "#f2efff" }}></div>

                                        <p>Jun</p>
                                    </div>

                                    <div className='col-1'>
                                        <div className="lg:rounded-md" style={{ height: "150px", width: "20px", background: "#f2efff" }}></div>

                                        <p>Jul</p>
                                    </div>

                                    <div className='col-1'>
                                        <div className="lg:rounded-md" style={{ height: "180px", width: "20px", background: "#5a32ea" }}></div>

                                        <p>Aug</p>
                                    </div>

                                    <div className='col-1'>
                                        <div className="lg:rounded-md" style={{ height: "127px", width: "20px", background: "#f2efff" }}></div>

                                        <p>Sep</p>
                                    </div>

                                    <div className='col-1'>
                                        <div className="lg:rounded-md" style={{ height: "80px", width: "20px", background: "#f2efff" }}></div>

                                        <p>Oct</p>
                                    </div>

                                    <div className='col-1'>
                                        <div className="lg:rounded-md" style={{ height: "120px", width: "20px", background: "#f2efff" }}></div>


                                        <p>Nov</p>
                                    </div>

                                    <div className='col-1'>
                                        <div className="lg:rounded-md" style={{ height: "100px", width: "20px", background: "#f2efff" }}></div>


                                        <p>Dec</p>
                                    </div>


                                </div>

                            </div>

                            {/* CUSTOMER VIEW */}

                            <div className='col-4'>
                                <div className="card text-bg-light mb-3" style={{ maxWidth: "540px" }}>

                                    <div className="card-body">
                                        <h5 className="card-title">Customer</h5>
                                        <p className="card-text text-sm text-slate-500">Customer that buy Product</p>

                                        65%{" "}
                                         <span className="text-sm text-center text-slate-500 mt-1">
                                                Total <br />
                                                New Customers
                                            </span>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className='row my-4'>
                            <div className='col-12'>
                                <nav className="navbar bg-body-tertiary">
                                    <div className="container-fluid">
                                        <span className="navbar-brand mb-0 h1 text-body-secondary">Product sales</span>
                                        <form className="d-flex" role="search">
                                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                            <button className="btn btn-outline-success" type="submit">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                                </svg>
                                            </button>
                                        </form>
                                    </div>
                                </nav>


                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col-6">Product Name</th>
                                            <th scope="col-2">stock</th>
                                            <th scope="col-2">Price</th>
                                            <th scope="col-2">Total sales</th>
                                        </tr>
                                    </thead>
                                    <tbody className="table-group-divider">
                                        <tr>
                                            <td>

                                                <div className='container row'>
                                                    <div className='col-2'>
                                                        <img
                                                            src="logo192.png"
                                                            alt=""
                                                            className="rounded-lg" style={{ height: "80px", width: "90px" }}
                                                        />
                                                    </div>
                                                    <div className='col-10'>
                                                        <strong>Abstract 3D</strong>
                                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>32 in stock</td>
                                            <td><strong>$ 45.99</strong></td>
                                            <td>20</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className='container row'>
                                                    <div className='col-2'>
                                                        <img
                                                            src="logo192.png"
                                                            alt=""
                                                            className="rounded-lg" style={{ height: "80px", width: "90px" }}
                                                        />
                                                    </div>
                                                    <div className='col-10'>
                                                        <strong>Sarphens illustration</strong>
                                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>32 in stock</td>
                                            <td><strong>$ 45.99</strong></td>
                                            <td>20</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}
