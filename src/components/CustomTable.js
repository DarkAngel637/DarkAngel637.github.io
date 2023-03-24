/*
 * @Author: Dark Angel
 * @Date: 2023-03-22 01:11:01
 * @LastEditTime: 2023-03-25 03:29:53
 * @LastEditors: Dark Angel
 * @Description: 干就完事了!
 * @FilePath: \DarkAngel637.github.io\src\components\CustomTable.js
 */
import React, { Component } from 'react'

import data from "../assets/index"

import { Row, Col, Image, Card } from "antd";

import html from "../assets/cover/html.png"
import css from "../assets/cover/css.jpg"
import js from "../assets/cover/js.png"
import requirejs from "../assets/cover/requirejs.png"
import mobile from "../assets/cover/mobile.png"
import nodejs from "../assets/cover/nodejs.png"
import vue from "../assets/cover/vue.png"
import react from "../assets/cover/react.png"
import typescript from "../assets/cover/typescript.png"
import egg from "../assets/cover/egg.png"
import prictice from "../assets/cover/prictice.png"
import "./index.css";
export default class CustomTable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            one: false,
            two: false,
            three: false,
            four: false,
            five: false,
            six: false,
            seven: false,
            eight: false,
            nine: false,
            ten: false,
            eleven: false,
        }
    }
    // componentDidMount() {
    //     console.log(data, 'data')
    // }
    onClick(number, visible) {
        this.setState({
            ...this.state,
            [number]: visible
        })
    }
    handleVisibleChange(number, visible) {
        this.setState({
            ...this.state,
            [number]: visible
        })
    }
    render() {
        const noteArray = Object.entries(data);
        const { Meta } = Card;
        return (
            <>
                <Row gutter={24}>
                    <Col span={24}>
                        <Card>
                            <h1>note list</h1>
                        </Card>
                    </Col>
                </Row>
                <Row gutter={[24, 24]} >
                    <Col span={8}>
                        <Card
                            hoverable
                            style={{ height: '20vh' }}
                            onClick={() => this.onClick('one', true)}
                            cover={<div
                                style={{
                                    width: '100%',
                                    display: 'flex',
                                    justifyContent: 'space-around'
                                }}
                            className='coverContainer'
                            ><Image preview={{ visible: false }} src={html} width={'40%'} height={200} /></div>}
                        >
                            <div style={{ display: 'none' }}>
                                <Image.PreviewGroup preview={{ visible: this.state.one, onVisibleChange: (vis) => this.handleVisibleChange("one", vis) }}>
                                    {noteArray.map((item, index) => {
                                        console.log(item)
                                        if (index <= 14) {
                                            return (<Image src={item[1]} />)
                                        }
                                    })
                                    }
                                </Image.PreviewGroup>
                            </div>
                            <Meta title="html" description="html note" />
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card
                            hoverable
                            style={{ height: '20vh' }}
                            onClick={() => this.onClick('two', true)}
                            cover={<div
                                style={{
                                    width: '100%',
                                    display: 'flex',
                                    justifyContent: 'space-around'
                                }}
                            className='coverContainer'
                            ><Image preview={{ visible: false }} src={css} width={'40%'} height={200} /></div>}
                        >
                            <div style={{ display: 'none' }}>
                                <Image.PreviewGroup preview={{ visible: this.state.two, onVisibleChange: (vis) => this.handleVisibleChange("two", vis) }}>
                                    {noteArray.map((item, index) => {
                                        if (index <= 37 && index >= 15) {
                                            return (<Image src={item[1]} />)
                                        }
                                    })
                                    }
                                </Image.PreviewGroup>
                            </div>
                            <Meta title="css" description="css note" />
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card
                            hoverable
                            style={{ height: '20vh' }}
                            onClick={() => this.onClick('three', true)}
                            cover={<div
                                style={{
                                    width: '100%',
                                    display: 'flex',
                                    justifyContent: 'space-around'
                                }}
                            className='coverContainer'
                            ><Image preview={{ visible: false }} src={js} width={'40%'} height={200} /></div>}
                        >
                            <div style={{ display: 'none' }}>
                                <Image.PreviewGroup preview={{ visible: this.state.three, onVisibleChange: (vis) => this.handleVisibleChange("three", vis) }}>
                                    {noteArray.map((item, index) => {
                                        if (index <= 101 && index >= 38) {
                                            return (<Image src={item[1]} />)
                                        }
                                    })
                                    }
                                </Image.PreviewGroup>
                            </div>
                            <Meta title="javascript" description="javascript note" />
                        </Card>
                    </Col>
                </Row>
                <Row gutter={[24, 24]} >
                    <Col span={8}>
                        <Card
                            hoverable
                            style={{ height: '20vh' }}
                            onClick={() => this.onClick('four', true)}
                            cover={<div
                                style={{
                                    width: '100%',
                                    display: 'flex',
                                    justifyContent: 'space-around'
                                }}
                            className='coverContainer'
                            ><Image preview={{ visible: false }} src={requirejs} width={'40%'} height={200} /></div>}
                        >
                            <div style={{ display: 'none' }}>
                                <Image.PreviewGroup preview={{ visible: this.state.four, onVisibleChange: (vis) => this.handleVisibleChange("four", vis) }}>
                                    {noteArray.map((item, index) => {
                                        if (index <= 105 && index >= 102) {
                                            return (<Image src={item[1]} />)
                                        }
                                    })
                                    }
                                </Image.PreviewGroup>
                            </div>
                            <Meta title="requirejs" description="requirejs note" />
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card
                            hoverable
                            style={{ height: '20vh' }}
                            onClick={() => this.onClick('five', true)}
                            cover={<div
                                style={{
                                    width: '100%',
                                    display: 'flex',
                                    justifyContent: 'space-around'
                                }}
                            className='coverContainer'
                            ><Image preview={{ visible: false }} src={mobile} width={'40%'} height={200} /></div>}
                        >
                            <div style={{ display: 'none' }}>
                                <Image.PreviewGroup preview={{ visible: this.state.five, onVisibleChange: (vis) => this.handleVisibleChange("five", vis) }}>
                                    {noteArray.map((item, index) => {
                                        if (index <= 124 && index >= 106) {
                                            return (<Image src={item[1]} />)
                                        }
                                    })
                                    }
                                </Image.PreviewGroup>
                            </div>
                            <Meta title="moile" description="moile note" />
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card
                            hoverable
                            style={{ height: '20vh' }}
                            onClick={() => this.onClick('six', true)}
                            cover={
                                <div
                                    style={{
                                        width: '100%',
                                        display: 'flex',
                                        justifyContent: 'space-around'
                                    }}                        >
                                    <Image src={nodejs} preview={{ visible: false }} width={'40%'} height={200} />
                                </div>
                            }
                        >
                            <div style={{ display: 'none' }}>
                                <Image.PreviewGroup preview={{ visible: this.state.six, onVisibleChange: (vis) => this.handleVisibleChange("six", vis) }}>
                                    {noteArray.map((item, index) => {
                                        if (index <= 137 && index >= 125) {
                                            return (<Image src={item[1]} />)
                                        }
                                    })
                                    }
                                </Image.PreviewGroup>
                            </div>
                            <Meta title="nodejs" description="nodejs note" />
                        </Card>
                    </Col>
                </Row>
                <Row gutter={[24, 24]} >
                    <Col span={8}>
                        <Card
                            hoverable
                            style={{ height: '20vh' }}
                            onClick={() => this.onClick('seven', true)}
                            cover={<div
                                style={{
                                    width: '100%',
                                    display: 'flex',
                                    justifyContent: 'space-around'
                                }}
                            className='coverContainer'
                            ><Image src={vue} preview={{ visible: false }} width={'40%'} height={200} /></div>}
                        >
                            <div style={{ display: 'none' }}>
                                <Image.PreviewGroup preview={{ visible: this.state.seven, onVisibleChange: (vis) => this.handleVisibleChange("seven", vis) }}>
                                    {noteArray.map((item, index) => {
                                        if (index <= 149 && index >= 138) {
                                            return (<Image src={item[1]} />)
                                        }
                                    })
                                    }
                                </Image.PreviewGroup>
                            </div>
                            <Meta title="vuejs" description="vuejs note" />
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card
                            hoverable
                            style={{ height: '20vh' }}
                            onClick={() => this.onClick('eight', true)}
                            cover={<div
                                style={{
                                    width: '100%',
                                    display: 'flex',
                                    justifyContent: 'space-around'
                                }}
                            className='coverContainer'
                            ><Image src={react} preview={{ visible: false }} width={'40%'} height={200} /></div>}
                        >

                            <div style={{ display: 'none' }}>
                                <Image.PreviewGroup preview={{ visible: this.state.eight, onVisibleChange: (vis) => this.handleVisibleChange("eight", vis) }}>
                                    {noteArray.map((item, index) => {
                                        if (index <= 161 && index >= 150) {
                                            return (<Image src={item[1]} />)
                                        }
                                    })
                                    }
                                </Image.PreviewGroup>
                            </div>
                            <Meta title="react" description="react note" />
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card
                            hoverable
                            style={{ height: '20vh' }}
                            onClick={() => this.onClick('nine', true)}
                            cover={<div
                                style={{
                                    width: '100%',
                                    display: 'flex',
                                    justifyContent: 'space-around'
                                }}
                            className='coverContainer'
                            ><Image src={typescript} preview={{ visible: false }} width={'40%'} height={200} /></div>}
                        >

                            <div style={{ display: 'none' }}>
                                <Image.PreviewGroup preview={{ visible: this.state.nine, onVisibleChange: (vis) => this.handleVisibleChange("nine", vis) }}>
                                    {noteArray.map((item, index) => {
                                        if (index <= 171 && index >= 162) {
                                            return (<Image src={item[1]} />)
                                        }
                                    })
                                    }
                                </Image.PreviewGroup>
                            </div>
                            <Meta title="typescript" description="typescript note" />
                        </Card>
                    </Col>
                </Row>
                <Row gutter={[24, 24]} >
                    <Col span={8}>
                        <Card
                            hoverable
                            style={{ height: '20vh' }}
                            onClick={() => this.onClick('ten', true)}
                            cover={<div
                                style={{
                                    width: '100%',
                                    display: 'flex',
                                    justifyContent: 'space-around'
                                }}
                            className='coverContainer'
                            ><Image src={egg} preview={{ visible: false }} width={'40%'} height={200} /></div>}
                        >
                           
                            <div style={{ display: 'none' }}>
                                <Image.PreviewGroup preview={{ visible: this.state.ten, onVisibleChange: (vis) => this.handleVisibleChange("ten", vis) }}>
                                    {noteArray.map((item, index) => {
                                        if (index <= 186 && index >= 172) {
                                            return (<Image src={item[1]} />)
                                        }
                                    })
                                    }
                                </Image.PreviewGroup>
                            </div>
                            <Meta title="nodejs pro" description="nodejs note pro" />
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card
                            hoverable
                            style={{ height: '20vh' }}
                            onClick={() => this.onClick('eleven', true)}
                            cover={<div
                                style={{
                                    width: '100%',
                                    display: 'flex',
                                    justifyContent: 'space-around'
                                }}
                            className='coverContainer'
                            ><Image src={prictice} preview={{ visible: false }} width={'40%'} height={200} /></div>}
                        >
                            <div style={{ display: 'none' }}>
                                <Image.PreviewGroup preview={{ visible: this.state.eleven, onVisibleChange: (vis) => this.handleVisibleChange("eleven", vis) }}>
                                    {noteArray.map((item, index) => {
                                        if (index <= 200 && index >= 187) {
                                            return (<Image src={item[1]} />)
                                        }
                                    })
                                    }
                                </Image.PreviewGroup>
                            </div>
                            <Meta title="prictice" description="prictice note" />
                        </Card>
                    </Col>

                </Row>
            </>
        )
    }
}
