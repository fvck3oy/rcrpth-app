import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb, Icon, Button, Carousel, Badge, Row, Col } from 'antd'
const { Header, Content, Footer, Sider } = Layout
export default class Download extends Component {
	render() {
		return (
			<div>
				<Layout style={{ minHeight: '100vh', paddingBottom: '64px' }}>
					<Content style={{ padding: '0 50px', marginTop: 64 }}>
						<div style={{ background: '#fff', padding: 24 }} className="content-box">
							<Row>
								<Col style={{textAlign: 'center'}}>
									<h1 style={{ color: 'red' }}>Download</h1>
									<hr />
									<br />
									<Badge color="#ff0000" />
									<span style={{ color: '' }}>
										สิ่งที่จำเป็นต้องมีในการเล่นเกมส์ <Icon type="download" style={{ fontSize:'20px'}}/>
								</span>
								</Col>
							</Row>

							<Row>
								<Col className="mt-5 mb-5" offset={6}>
									<div><span style={{ color: 'red', fontSize: '18px' }}>- Grand Theft Auto San Andreas</span></div>
									<div><span style={{ color: 'red', fontSize: '18px' }}>- SA-MP San Andreas Multiplayer mod for Grand Theft Auto</span></div>
								</Col>
							</Row>
						</div>
					</Content>
				</Layout>
			</div>
		)
	}
}
