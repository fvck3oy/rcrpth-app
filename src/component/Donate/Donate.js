import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb, Icon, Button, Carousel, Badge, Row, Col } from 'antd'
const { Header, Content, Footer, Sider } = Layout
export default class Donate extends Component {
	render() {
		return (
			<div>
				<Layout style={{ minHeight: '100vh', paddingBottom: '64px' }}>
					<Content style={{ padding: '0 50px', marginTop: 64 }}>
						<div style={{ background: '#fff', padding: 24, textAlign: 'center' }} className="content-box">
							<Row>
								<Col>
									<h1 style={{ color: 'red' }}>Donate</h1>
									<hr />
									<br />
									<Badge color="#ff0000" />
									<span style={{ color: '' }}>
										เพื่อช่วย <span style={{ color: 'red', fontSize: '18px' }}>สนับสนุน</span> ให้กับทางเซิร์ฟเวอร์
									</span>
									<br />
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
