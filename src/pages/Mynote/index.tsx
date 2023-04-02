/*
 * @Author: Dark Angel
 * @Date: 2023-03-22 01:11:01
 * @LastEditTime: 2023-04-02 15:31:13
 * @LastEditors: Dark Angel
 * @Description: 干就完事了!
 * @FilePath: \DarkAngel637.github.io\src\pages\Mynote\index.tsx
 */
// @ts-nocheck
import React, { Component } from 'react';

import data from '../Mynote/assets/index';

import { Row, Col, Image, Card } from 'antd';

import { PageContainer } from '@ant-design/pro-layout';

import html from '../Mynote/assets/cover/html.png';
import css from '../Mynote/assets/cover/css.jpg';
import js from '../Mynote/assets/cover/js.png';
import requirejs from '../Mynote/assets/cover/requirejs.png';
import mobile from '../Mynote/assets/cover/mobile.png';
import nodejs from '../Mynote/assets/cover/nodejs.png';
import vue from '../Mynote/assets/cover/vue.png';
import react from '../Mynote/assets/cover/react.png';
import typescript from '../Mynote/assets/cover/typescript.png';
import egg from '../Mynote/assets/cover/egg.png';
import prictice from '../Mynote/assets/cover/prictice.png';
import './index.less';
export default class CustomTable extends Component {
  constructor(props) {
    super(props);
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
    };
  }
  // componentDidMount() {
  //     console.log(data, 'data')
  // }
  onClick(number, visible) {
    this.setState({
      ...this.state,
      [number]: visible,
    });
  }
  handleVisibleChange(number, visible) {
    this.setState({
      ...this.state,
      [number]: visible,
    });
  }
  render() {
    const noteArray = Object.values(data);
    const { Meta } = Card;
    const { one, two, three, four, five, six, seven, eight, nine, ten, eleven } = this.state;
    return (
      <PageContainer>
        {/* <Row gutter={24}>
          <Col span={24}>
            <Card>
              <h1>note list</h1>
            </Card>
          </Col>
        </Row> */}
        <Row gutter={[24, 24]}>
          <Col span={8}>
            <Card
              hoverable
              style={{ height: '20vh' }}
              onClick={() => this.onClick('one', true)}
              cover={
                <div
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-around',
                  }}
                  className="coverContainer"
                >
                  <Image
                    loading="lazy"
                    preview={{ visible: false }}
                    src={html}
                    width={'40%'}
                    height={200}
                  />
                </div>
              }
            >
              <div style={{ display: 'none' }}>
                <Image.PreviewGroup
                  preview={{
                    visible: this.state.one,
                    onVisibleChange: (vis) => this.handleVisibleChange('one', vis),
                  }}
                >
                  {one
                    ? noteArray.map((item, index) => {
                        if (index <= 14) {
                          return <Image src={item} />;
                        }
                      })
                    : null}
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
              cover={
                <div
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-around',
                  }}
                  className="coverContainer"
                >
                  <Image
                    preview={{ visible: false }}
                    loading="lazy"
                    src={css}
                    width={'40%'}
                    height={200}
                  />
                </div>
              }
            >
              <div style={{ display: 'none' }}>
                <Image.PreviewGroup
                  preview={{
                    visible: this.state.two,
                    onVisibleChange: (vis) => this.handleVisibleChange('two', vis),
                  }}
                >
                  {two
                    ? noteArray.map((item, index) => {
                        if (index <= 37 && index >= 15) {
                          return <Image src={item} />;
                        }
                      })
                    : null}
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
              cover={
                <div
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-around',
                  }}
                  className="coverContainer"
                >
                  <Image
                    preview={{ visible: false }}
                    loading="lazy"
                    src={js}
                    width={'40%'}
                    height={200}
                  />
                </div>
              }
            >
              <div style={{ display: 'none' }}>
                <Image.PreviewGroup
                  preview={{
                    visible: this.state.three,
                    onVisibleChange: (vis) => this.handleVisibleChange('three', vis),
                  }}
                >
                  {three
                    ? noteArray.map((item, index) => {
                        if (index <= 101 && index >= 38) {
                          return <Image src={item} />;
                        }
                      })
                    : null}
                </Image.PreviewGroup>
              </div>
              <Meta title="javascript" description="javascript note" />
            </Card>
          </Col>
        </Row>
        <Row gutter={[24, 24]}>
          <Col span={8}>
            <Card
              hoverable
              style={{ height: '20vh' }}
              onClick={() => this.onClick('four', true)}
              cover={
                <div
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-around',
                  }}
                  className="coverContainer"
                >
                  <Image
                    preview={{ visible: false }}
                    loading="lazy"
                    src={requirejs}
                    width={'40%'}
                    height={200}
                  />
                </div>
              }
            >
              <div style={{ display: 'none' }}>
                <Image.PreviewGroup
                  preview={{
                    visible: this.state.four,
                    onVisibleChange: (vis) => this.handleVisibleChange('four', vis),
                  }}
                >
                  {four
                    ? noteArray.map((item, index) => {
                        if (index <= 105 && index >= 102) {
                          return <Image src={item} />;
                        }
                      })
                    : null}
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
              cover={
                <div
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-around',
                  }}
                  className="coverContainer"
                >
                  <Image
                    preview={{ visible: false }}
                    loading="lazy"
                    src={mobile}
                    width={'40%'}
                    height={200}
                  />
                </div>
              }
            >
              <div style={{ display: 'none' }}>
                <Image.PreviewGroup
                  preview={{
                    visible: this.state.five,
                    onVisibleChange: (vis) => this.handleVisibleChange('five', vis),
                  }}
                >
                  {five
                    ? noteArray.map((item, index) => {
                        if (index <= 124 && index >= 106) {
                          return <Image src={item} />;
                        }
                      })
                    : null}
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
                    justifyContent: 'space-around',
                  }}
                >
                  <Image
                    src={nodejs}
                    preview={{ visible: false }}
                    loading="lazy"
                    width={'40%'}
                    height={200}
                  />
                </div>
              }
            >
              <div style={{ display: 'none' }}>
                <Image.PreviewGroup
                  preview={{
                    visible: this.state.six,
                    onVisibleChange: (vis) => this.handleVisibleChange('six', vis),
                  }}
                >
                  {six
                    ? noteArray.map((item, index) => {
                        if (index <= 137 && index >= 125) {
                          return <Image src={item} />;
                        }
                      })
                    : null}
                </Image.PreviewGroup>
              </div>
              <Meta title="nodejs" description="nodejs note" />
            </Card>
          </Col>
        </Row>
        <Row gutter={[24, 24]}>
          <Col span={8}>
            <Card
              hoverable
              style={{ height: '20vh' }}
              onClick={() => this.onClick('seven', true)}
              cover={
                <div
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-around',
                  }}
                  className="coverContainer"
                >
                  <Image
                    src={vue}
                    preview={{ visible: false }}
                    loading="lazy"
                    width={'40%'}
                    height={200}
                  />
                </div>
              }
            >
              <div style={{ display: 'none' }}>
                <Image.PreviewGroup
                  preview={{
                    visible: this.state.seven,
                    onVisibleChange: (vis) => this.handleVisibleChange('seven', vis),
                  }}
                >
                  {seven
                    ? noteArray.map((item, index) => {
                        if (index <= 149 && index >= 138) {
                          return <Image src={item} />;
                        }
                      })
                    : null}
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
              cover={
                <div
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-around',
                  }}
                  className="coverContainer"
                >
                  <Image
                    src={react}
                    preview={{ visible: false }}
                    loading="lazy"
                    width={'40%'}
                    height={200}
                  />
                </div>
              }
            >
              <div style={{ display: 'none' }}>
                <Image.PreviewGroup
                  preview={{
                    visible: this.state.eight,
                    onVisibleChange: (vis) => this.handleVisibleChange('eight', vis),
                  }}
                >
                  {eight
                    ? noteArray.map((item, index) => {
                        if (index <= 161 && index >= 150) {
                          return <Image src={item} />;
                        }
                      })
                    : null}
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
              cover={
                <div
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-around',
                  }}
                  className="coverContainer"
                >
                  <Image
                    src={typescript}
                    preview={{ visible: false }}
                    loading="lazy"
                    width={'40%'}
                    height={200}
                  />
                </div>
              }
            >
              <div style={{ display: 'none' }}>
                <Image.PreviewGroup
                  preview={{
                    visible: this.state.nine,
                    onVisibleChange: (vis) => this.handleVisibleChange('nine', vis),
                  }}
                >
                  {nine
                    ? noteArray.map((item, index) => {
                        if (index <= 171 && index >= 162) {
                          return <Image src={item} />;
                        }
                      })
                    : null}
                </Image.PreviewGroup>
              </div>
              <Meta title="typescript" description="typescript note" />
            </Card>
          </Col>
        </Row>
        <Row gutter={[24, 24]}>
          <Col span={8}>
            <Card
              hoverable
              style={{ height: '20vh' }}
              onClick={() => this.onClick('ten', true)}
              cover={
                <div
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-around',
                  }}
                  className="coverContainer"
                >
                  <Image
                    src={egg}
                    preview={{ visible: false }}
                    loading="lazy"
                    width={'40%'}
                    height={200}
                  />
                </div>
              }
            >
              <div style={{ display: 'none' }}>
                <Image.PreviewGroup
                  preview={{
                    visible: this.state.ten,
                    onVisibleChange: (vis) => this.handleVisibleChange('ten', vis),
                  }}
                >
                  {ten
                    ? noteArray.map((item, index) => {
                        if (index <= 186 && index >= 172) {
                          return <Image src={item} />;
                        }
                      })
                    : null}
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
              cover={
                <div
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-around',
                  }}
                  className="coverContainer"
                >
                  <Image
                    src={prictice}
                    preview={{ visible: false }}
                    loading="lazy"
                    width={'40%'}
                    height={200}
                  />
                </div>
              }
            >
              <div style={{ display: 'none' }}>
                <Image.PreviewGroup
                  preview={{
                    visible: this.state.eleven,
                    onVisibleChange: (vis) => this.handleVisibleChange('eleven', vis),
                  }}
                >
                  {eleven
                    ? noteArray.map((item, index) => {
                        if (index <= 200 && index >= 187) {
                          return <Image src={item} />;
                        }
                      })
                    : null}
                </Image.PreviewGroup>
              </div>
              <Meta title="prictice" description="prictice note" />
            </Card>
          </Col>
        </Row>
      </PageContainer>
    );
  }
}
