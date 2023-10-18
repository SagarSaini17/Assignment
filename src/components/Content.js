import React from 'react'

export default function Content() {
  return (
    <div>
      <div className='container-fluid justify-content-end' style={{ height: "100vh" }}>
        <div className='row '>
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
      </div>
    </div>
  )
}
