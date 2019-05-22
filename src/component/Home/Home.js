import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb, Icon, Button, Carousel, Tag, Badge } from 'antd'
import '../../App.css'
import news1 from '../Picture/news-1.jpg'

const { Header, Content, Footer, Sider } = Layout
const SubMenu = Menu.SubMenu
export default class Home extends Component {
	render() {
		return (
			<div>
				<Layout style={{ minHeight: '100vh', paddingBottom: '64px' }}>
					<Content style={{ padding: '0 50px', marginTop: 64, textAlign: 'center' }}>
						<div style={{ background: '#fff', padding: 24, minHeight: 200 }} className="content-box">
							<h1 style={{ color: 'red' }}>Welcome to Red County Role Play TH ! </h1>
							<hr />
							<Badge color="#2db7f5" />
							ยินดีต้อนรับเข้าสู่เซิร์ฟเวอร์ <span style={{ color: 'red', fontSize: '20px' }}>Red County Role Play TH </span>น่ะครับ <br />
							<Badge color="#32cd32" />
							ติดตามข่าวสารได้ที่เเฟนเพจ{' '}
							<a href="https://www.facebook.com/rcrp.th">
								<span style={{ color: 'red', fontSize: '20px' }} className="animated infinite flash delay-2s slow">
									Click !
								</span>
							</a>
							<br />
							<Badge color="#ffa500" />
							เข้าร่วมกลุ่มได้ที่{' '}
							<a href="https://www.facebook.com/groups/1896647480435975/">
								<span style={{ color: 'red', fontSize: '20px' }} className="animated infinite flash delay-2s slow">
									Click !
								</span>
							</a>
							<img src={news1} className="img-fluid mt-3" />
						</div>
					</Content>
				</Layout>
			</div>
		)
	}
}
