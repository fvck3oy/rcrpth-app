import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb, Icon, Button, Carousel } from 'antd'
import { Link } from 'react-router-dom'
import '../../App.css'
import bg1 from '../Picture/bg1.png'
const { Header, Content, Footer, Sider } = Layout
const SubMenu = Menu.SubMenu

export default class HeaderComponent extends Component {
	state = {}
	goto = e => {
		console.log('key : ', e)
	}

	render() {
		return (
			<div>
				<Carousel autoplay>
					<div>
						<img src={bg1} />
					</div>
					<div>
						<h3>2</h3>
					</div>
					<div>
						<h3>3</h3>
					</div>
					<div>
						<h3>4</h3>
					</div>
				</Carousel>

				<Header className="header">

					<Menu theme="dark" mode="horizontal" style={{ lineHeight: '64px', textAlign: 'center' , fontSize:'16px' }}>
						<Menu.Item key="/">
							<Link to="/">หน้าแรก</Link>
						</Menu.Item>
						{/* <Menu.Item key="/register">
							<Link to="/register">สมัครสมาชิก</Link>
						</Menu.Item> */}
						<Menu.Item key="/rules">
							<Link to="/rules">กฎระเบียบ</Link>
						</Menu.Item>
						{/* <Menu.Item key="/character">
							<Link to="/character">ข้อมูลตัวละคร</Link>
						</Menu.Item> */}
						<Menu.Item key="/donate">
							<Link to="/donate">โดเนท</Link>
						</Menu.Item>
						<Menu.Item key="/download">
							<Link to="/download">ดาวน์โหลด</Link>
						</Menu.Item>
						<Menu.Item key="/about">
							<Link to="/about">เกี่ยวกับเซิร์ฟเวอร์</Link>
						</Menu.Item>
					</Menu>
				</Header>
			</div>
		)
	}
}
