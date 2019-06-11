import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb, Icon, Button, Carousel, Badge, Col, Row } from 'antd'
import news1 from '../Picture/news-1.jpg'

const { Header, Content, Footer, Sider } = Layout
export default class About extends Component {
	render() {
		return (
			<div>
				<Layout style={{ minHeight: '100vh', paddingBottom: '64px' }}>
					<Content style={{ padding: '0 50px', marginTop: 64 }}>
						<div style={{ background: '#fff', padding: 24, textAlign: 'center' }} className="content-box">
							<Row>
								<Col>
									<h1 style={{ color: 'red' }}>About Us</h1>
									<hr />
								</Col>
							</Row>
							<Row className="mt-3 mb-3">
								<Col span={12} className="p-3" style={{ fontSize: '18px' }}>
									<div>
										<h1 style={{ color: 'red' }}>What is the Red County ?</h1>
										Set in the rural areas of San Andreas: Red, Bone and Flint County are the ultimate locations for one of the best
										roleplay servers out there. Red County Roleplay uses the San Andreas Multiplayer ( SA-MP ) modification for Grand Theft
										Auto: San Andreas to offer a fun roleplaying experience for everyone !
									</div>

									</Col>

									<Col span={12}>
									<div>
										<h1 style={{ color: 'red' }}>What is the Red County ?</h1>
										Set in the rural areas of San Andreas: Red, Bone and Flint County are the ultimate locations for one of the best
										roleplay servers out there. Red County Roleplay uses the San Andreas Multiplayer ( SA-MP ) modification for Grand Theft
										Auto: San Andreas to offer a fun roleplaying experience for everyone !
										<img src={news1} className="img-fluid mt-3 border-picture" />
									</div>
								</Col>
							</Row>

							<Row>
								<Col className="mt-5 mb-5">
									<div>Coming Soon . . .</div>
								</Col>
							</Row>
						</div>
					</Content>
				</Layout>
			</div>
		)
	}
}
