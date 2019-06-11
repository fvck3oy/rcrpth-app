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
							<div className="d-md-flex coming justify-content-center">
								<div className="m-3 p-3">Silver</div>
								<div className="m-3 p-3">Gold</div>
								<div className="m-3 p-3">Platinum</div>
							</div>
							<Row>
								<Col className="mt-5 mb-5">
									<img src="https://redcountyrp.com/img/icons/$.svg" alt="icon" width="50px" /> เหรียญ
									<br />
									<img src="https://redcountyrp.com/img/icons/credit_1.svg" alt="icon" width="50px" /> บัตรเครดิต
									<br />
									<img src="https://redcountyrp.com/img/icons/userdonatortalk.svg" alt="icon" width="50px" />
									<br />
									<img src="https://redcountyrp.com/img/icons/chair_1.svg" alt="icon" width="50px" />
									<br />
									<img src="https://redcountyrp.com/img/icons/jobhalftimer.svg" alt="icon" width="50px" />
									<br />
									<img src="https://redcountyrp.com/img/icons/userplus.svg" alt="icon" width="50px" />
									<br />
									<img src="https://redcountyrp.com/img/icons/Phonerefresh.svg" alt="icon" width="50px" />
									<br />
									<img src="https://redcountyrp.com/img/icons/creditplus.svg" alt="icon" width="50px" />
									<br />
									<img src="https://redcountyrp.com/img/icons/Arrow%20down.svg" alt="icon" width="50px" />
									<br />
									<img src="https://redcountyrp.com/img/icons/chairplus.svg" alt="icon" width="50px" />
									<br />
									<img src="https://redcountyrp.com/img/icons/group2plus.svg" alt="icon" width="50px" />
									<br />
									<img src="https://redcountyrp.com/img/icons/advertdownhalf.svg" alt="icon" width="50px" />
									<br />
									<img src="https://redcountyrp.com/img/icons/Housewipe.svg" alt="icon" width="50px" />
									<br />
									<img src="https://redcountyrp.com/img/icons/creditplusplusplus.svg" alt="icon" width="50px" />
									<br />
									<img src="https://redcountyrp.com/img/icons/chair++.svg" alt="icon" width="50px" />
									<br />
									<img src="https://redcountyrp.com/img/icons/group3plus.svg" alt="icon" width="50px" />
									<br />
									<img src="https://redcountyrp.com/img/icons/Teamspeakdonate.svg" alt="icon" width="50px" />
									<br />
									<img src="https://redcountyrp.com/img/icons/advertfree_1.svg" alt="icon" width="50px" />
									<br />
									<img src="https://redcountyrp.com/img/icons/Fuelcanfree.svg" alt="icon" width="50px" />
									<br />
									<img src="https://redcountyrp.com/img/icons/Bulletplus.svg" alt="icon" width="50px" />
									<br />
									<img src="https://cdn.truemoney.com/wp-content/uploads/2019/04/truemoney-logo-20190424.png" alt="icon" width="200px" />
									<br />
								</Col>
							</Row>
						</div>
					</Content>
				</Layout>
			</div>
		)
	}
}
