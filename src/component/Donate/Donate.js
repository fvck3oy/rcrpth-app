import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb, Icon, Button, Carousel } from 'antd'
const { Header, Content, Footer, Sider } = Layout
export default class Donate extends Component {
  render() {
    return (
      <div>
	<Layout style={{ minHeight: '100vh', paddingBottom: '64px' }}>
					<Content style={{ padding: '0 50px', marginTop: 64 }}>
						{/* <Breadcrumb style={{ margin: '16px 0' }}>
							<Breadcrumb.Item>Home</Breadcrumb.Item>
							<Breadcrumb.Item>List</Breadcrumb.Item>
							<Breadcrumb.Item>App</Breadcrumb.Item>
						</Breadcrumb> */}
						<div style={{ background: '#fff', padding: 24, minHeight: 200 }}>Content</div>
					</Content>
				</Layout>
      </div>
    )
  }
}
