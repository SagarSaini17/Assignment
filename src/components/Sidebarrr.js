import React from 'react'

export default function Sidebar() {
    return (
        <div>

            <div class="d-flex flex-column flex-shrink-0 p-3" style={{width:"280px",height:"100vh",color:'white', background:"#040440"}}>
                <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="45" fill="currentColor" class="bi bi-nut" viewBox="0 0 16 16">
                                    <path d="m11.42 2 3.428 6-3.428 6H4.58L1.152 8 4.58 2h6.84zM4.58 1a1 1 0 0 0-.868.504l-3.428 6a1 1 0 0 0 0 .992l3.428 6A1 1 0 0 0 4.58 15h6.84a1 1 0 0 0 .868-.504l3.429-6a1 1 0 0 0 0-.992l-3.429-6A1 1 0 0 0 11.42 1H4.58z" />
                                    <path d="M6.848 5.933a2.5 2.5 0 1 0 2.5 4.33 2.5 2.5 0 0 0-2.5-4.33zm-1.78 3.915a3.5 3.5 0 1 1 6.061-3.5 3.5 3.5 0 0 1-6.062 3.5z" />
                                </svg>
                    <span class="fs-4">Dashbord</span>
                </a>
                <hr/>
                    <ul class="nav nav-pills flex-column mb-auto">
                        <li class="nav-item">
                            <a href="/" class="nav-link active" aria-current="page">
                                <svg class="bi me-2" width="16" height="16"><use href="#home"></use></svg>
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="/" class="nav-link text-white">
                                <svg class="bi me-2" width="16" height="16"><use href="#speedometer2"></use></svg>
                                Dashboard
                            </a>
                        </li>
                        <li>
                            <a href="/" class="nav-link text-white">
                                <svg class="bi me-2" width="16" height="16"><use href="#table"></use></svg>
                                Orders
                            </a>
                        </li>
                        <li>
                            <a href="/" class="nav-link text-white">
                                <svg class="bi me-2" width="16" height="16"><use href="#grid"></use></svg>
                                Products
                            </a>
                        </li>
                        <li>
                            <a href="/" class="nav-link text-white">
                                <svg class="bi me-2" width="16" height="16"><use href="#people-circle"></use></svg>
                                Customers
                            </a>
                        </li>
                         <li>
                            <a href="/" class="nav-link text-white">
                                <svg class="bi me-2" width="16" height="16"><use href="#people-circle"></use></svg>
                                Help
                            </a>
                        </li>
    
                    </ul>
                    <hr/>
                        <div class="dropdown">
                            <a href="/" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src="" alt="" width="32" height="32" class="rounded-circle me-2" />
                                <strong>Profile</strong>
                            </a>
                            <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1" >
                                <li><a class="dropdown-item" href="/">New project...</a></li>
                                <li><a class="dropdown-item" href="/">Settings</a></li>
                                <li><a class="dropdown-item" href="/">Profile</a></li>
                                <li><hr class="dropdown-divider" /></li>
                                <li><a class="dropdown-item" href="/">Sign out</a></li>
                            </ul>
                        </div>
            </div>
        </div>

    )
}
