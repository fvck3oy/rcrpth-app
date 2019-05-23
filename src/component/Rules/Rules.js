import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb, Icon, Button, Collapse, Row, Col, Badge } from 'antd'
const { Header, Content, Footer, Sider } = Layout
const Panel = Collapse.Panel
export default class Rules extends Component {
	render() {
		return (
			<div>
				<Layout style={{ minHeight: '100vh', paddingBottom: '64px' }}>
					<Content style={{ padding: '0 50px', marginTop: 64, textAlign: 'center' }}>
						<div style={{ background: '#fff', padding: 24, minHeight: 200, paddingBottom: '60px' }} className="content-box">
							<h1 style={{ color: 'red' }}>Rules</h1>
							<hr />
							<br />
							<Badge color="#ff0000" />
							<span style={{ color: '' }}>
								ผมรู้พวกคุณ <span style={{ color: 'red', fontSize: '18px' }}>ไม่อ่าน</span> กันหรอก
							</span>
							<br />
							<Badge color="#ff0000" />
							<span style={{ color: '' }}>
								แต่ขอให้ปฏิบัติตามกฎอย่างเคร่งครัดเพื่อสังคม <span style={{ color: 'red', fontSize: '20px' }}>Red County</span> ที่ดี
							</span>
							<br />
							<br />
							<Row>
								<Col style={{ textAlign: 'start', fontSize: '20px' }}>
									In Character [ IC ]
									<p style={{ fontSize: '15px' }}>
										คือ พูดคุยตัวละครในบทบาทคุยส่วนของบทบาทตัวละคร ไม่เกี่ยวกับชีวิตจริงของเรา เป็นการพูดคุยของตัวละครในเกม
									</p>
									<br />
									Out Of Character [ OOC ]
									<p style={{ fontSize: '15px' }}>
										คือ การพูดคุย นอกบทบาทหรือการพูดคุยในชีวิตจริงๆของเรานั้นเอง ซื่งต่างจากการคุยแบบ IC อย่างตรงข้าม
									</p>
									<br />
									Powergaming [ PG ]
									<p style={{ fontSize: '15px' }}>
										คือ การกระทำที่เกิดคนปกติใน ชีวิตจริงเขาทำได้เช่น ไม่กลัวรถชน วิ่งอย่างไม่เหนื่อยกระโดดอย่างไม่เหนื่อยกระโดดลงมา
										จากรถโดยไม่เกรงกลัว อะไรเลยไม่เกรงกลัวอะไรเลย
									</p>
									<br />
									Metagaming [ MG ]
									<p style={{ fontSize: '15px' }}>คือ การนำ IC OOC มารวมกัน คือนำบทบาทของตัวละครมาปนกับ ชีวิตจริงซื่งมันผิดหลัก RolePlay</p>
									<br />
									Deathmatch [ DM ]
									<p style={{ fontSize: '15px' }}>
										คือ เป็นการยิงที่ไม่มีบทบาทที่คุณสามารถเจอใครคุณสามารถยิงได้เลย ซึ่งมันผิดจากกฏชีวิตจริงและกฏ Roleplay
									</p>
									<br />
									Revenge Kill [ RK ]
									<p style={{ fontSize: '15px' }}>
										คือ
										กฏที่กำหนดขึ้นมาเพื่อให้ผู้เล่นหรือเซิฟเวอร์สมจริงยิ่งขึ้นถ้าเป็นกฏที่ตั้งมาเพื่อให้ผู้เล่นที่โดนฆ่าตายนั้นลืมความจำไป
										30 นาที กฏนี้ต้องขึ้นอยู่กับสามัญสำนึกของผู้เล่นแต่ละท่าน
									</p>
									<br />
									Spawn Kill [ SK ]
									<p style={{ fontSize: '15px' }}>
										คือ การยิงตรงจุดต้องห้ามหรือจุดเกิดต่างๆภายในเซิฟเวอร์ เป็นกฏที่ตั้งขึ้นมากันผู้เล่น Deathmatch และการยิงดักจุดเกิด
										สถานที่ห้ามยิงในกฏ Spawn Kill
									</p>
									<br />
									Ninjajack [ NJ ]
									<p style={{ fontSize: '15px' }}>
										คือ
										เป็นการที่ผู้เล่นท่านหนึ่งจอดรถอยู่และอยู่ดีๆมีผู้เล่นอีกท่านหนึ่งวิ่งมาดึงท่านลงจากรถและขับรถหนีไปนี่คือการNJหรือขโมยรถไม่มีบทบาท
									</p>
									<br />
									Drive-by [ DB ]
									<p style={{ fontSize: '15px' }}>คือ การขี่รถทับให้ผู้เล่นท่านอืนถึงแกชีวิต หรือการฆ่าคนด้วยรถโดยไม่มีเหตุผลมากพอ</p>
									<br />
									Quit Game [ QG ]
									<p style={{ fontSize: '15px' }}>
										คือ การออกเกมหนีบทบาทส์ของผู้เล่นบางท่าน
										เป็รวิธีการที่ไม่น่าเล่นเอาซะเลยและเป็นวิธีการที่ทำให้ผู้เล่นบางท่านหัวเสียไปเลยทีเดียวทางเราจึงจัดตั้งกฏนี้ขึ้นมา
									</p>
									<br />
									Escape character death [ CK ]
									<p style={{ fontSize: '15px' }}>
										คือ เป็นการ accept death หนีบทบาท หรือเป็นบทบาทเจ็บแต่กด accept death หรือไม่ กด accept death โดยไม่มีบทบาท /do /me
									</p>
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
