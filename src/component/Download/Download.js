import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb, Icon, Button, Carousel, Badge, Row, Col, Tag } from 'antd'
const { Header, Content, Footer, Sider } = Layout
export default class Download extends Component {
	render() {
		return (
			<div>
				<Layout style={{ minHeight: '100vh', paddingBottom: '64px' }}>
					<Content style={{ padding: '0 50px', marginTop: 64 }}>
						<div style={{ background: '#fff', padding: 24 }} className="content-box">
							<Row>
								<Col style={{ textAlign: 'center' }}>
									<h1 style={{ color: 'red' }}>Download</h1>
									<hr />
									<br />
									<Badge color="#ff0000" />
									<span style={{ color: '' }}>
										สิ่งที่จำเป็นต้องมีในการเล่นเกมส์ <Icon type="download" style={{ fontSize: '20px' }} />
									</span>
								</Col>
							</Row>

							<Row>
								<Col className="mt-5 mb-5" offset={6}>
									<div className="mt-2 mb-2">
										<span style={{ color: '#13c2c2', fontSize: '18px', cursor: 'pointer' }}>
											- Grand Theft Auto San Andreas{' '}
											<Tag color="cyan" style={{ fontSize: '16px' }} className="animated infinite flash delay-1s fast">
												Download
											</Tag>
										</span>
									</div>
									<div className="mt-2 mb-2">
										<span style={{ color: '#2f54eb', fontSize: '18px', cursor: 'pointer' }}>
											- SA-MP San Andreas Multiplayer mod for Grand Theft Auto{' '}
											<Tag color="geekblue" style={{ fontSize: '16px' }} className="animated infinite flash delay-1s fast">
												Download
											</Tag>
										</span>
									</div>
									<div className="mt-2 mb-2">
										<span style={{ color: '#722ed1', fontSize: '18px', cursor: 'pointer' }}>
											- TeamSpeak 3{' '}
											<Tag color="purple" style={{ fontSize: '16px' }} className="animated infinite flash delay-1s fast">
												Download
											</Tag>
										</span>
									</div>
								</Col>
							</Row>
						</div>
					</Content>
				</Layout>
			</div>
		)
	}
}
