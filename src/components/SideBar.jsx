import React from 'react'

import { Link } from 'react-router-dom'

function SideBar() {
	return (
		<ul className="navbar-nav backgroundSideBar sidebar sidebar-dark accordion" id="accordionSidebar">

			{/* <!-- Sidebar - Brand --> */}
			<Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
				<div className="sidebar-brand-icon">
					<img className="w-100" src="/assets/images/logo.png" alt="Electroarco" />
				</div>
			</Link>

			{/* <!-- Divider --> */}
			<hr className="sidebar-divider my-0" />

			{/* <!-- Nav Item - Dashboard --> */}
			<li className="nav-item active">
				<Link className="nav-link" to="/">
					<i className="fas fa-fw fa-tachometer-alt"></i>
					<span>Dashboard - ElectroArco</span>
				</Link>
			</li>

			{/* <!-- Divider --> */}
			<hr className="sidebar-divider" />

			{/* <!-- Heading --> */}
			<div className="sidebar-heading">Acciones</div>

			{/* <!-- Nav Item - Pages --> */}
			<li className="nav-item">
				<Link className="nav-link collapsed" to="/products">
					<i className="fas fa-fw fa-folder"></i>
					<span>Productos</span>
				</Link>
			</li>

			{/* <!-- Nav Item - Charts --> */}
			<li className="nav-item">
				<Link className="nav-link" to="/users">
				<i className="fas fa-users"></i>
					<span>Usuarios</span>
				</Link>
			</li>

			{/* <!-- Nav Item - Tables --> */}
			<li className="nav-item">
				<Link className="nav-link" to="/last-product">
					<i className="fas fa-fw fa-table"></i>
					<span>Ultimo Producto</span>
				</Link>
			</li>
			<li className="nav-item">
				<Link className="nav-link" to="/last-user">
				<i className="fas fa-user"></i>
					<span>Ultimo Usuario</span>
				</Link>
			</li>

			<li className="nav-item">
				<Link className="nav-link" to="/search">
					<i className="fas fa-search"></i>
					<span>Buscar</span>
				</Link>
			</li>

			{/* <!-- Divider --> */}
			<hr className="sidebar-divider d-none d-md-block" />
		</ul>
	)
}

export default React.memo(SideBar)
