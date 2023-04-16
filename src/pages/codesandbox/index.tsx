/*
 * @Author: Dark Angel
 * @Date: 2023-04-08 01:15:01
 * @LastEditTime: 2023-04-17 01:48:57
 * @LastEditors: Dark Angel
 * @Description: 干就完事了!
 * @FilePath: \DarkAngel637.github.io\src\pages\codesandbox\index.tsx
 */
import React from 'react';
import sdk from '@stackblitz/sdk';
import { PageContainer } from '@ant-design/pro-layout';
import { Button, Card, Radio } from 'antd';
import type { RadioChangeEvent } from 'antd';
import './index.less';
interface Props extends State {}
interface State {
  codeSandBoxValue: string;
}

export default class CodeSandBox extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      codeSandBoxValue: JSON.stringify({ target: 'node-7gwxqq', openFile: 'webpack.config.js' }),
    };
  }
  componentDidMount() {
    sdk.embedProjectId('codePreview', 'node-7gwxqq', {
      forceEmbedLayout: true,
      openFile: 'webpack.config.js',
      theme: 'dark',
    });
  }
  onGroupValueChange({ target: { value } }: RadioChangeEvent) {
    this.setState({
      ...this.state,
      codeSandBoxValue: value,
    });
    const { openFile, target } = JSON.parse(value);
    sdk.embedProjectId('codePreview', target, {
      forceEmbedLayout: true,
      openFile,
      theme: 'dark',
    });
  }
  render() {
    const { codeSandBoxValue } = this.state;
    const { Group } = Radio;
    const codeBoxItems = [
      {
        label: 'webpack 的入门使用',
        value: JSON.stringify({ target: 'node-7gwxqq', openFile: 'webpack.config.js' }),
      },
      {
        label: 'react-redux 的使用',
        value: JSON.stringify({
          target: 'react-ts-react-reduxandredux',
          openFile: 'component/index.tsx',
        }),
      },
    ];
    return (
      <PageContainer>
        <Card>
          <Group
            options={codeBoxItems}
            optionType="button"
            buttonStyle="solid"
            defaultValue={codeSandBoxValue}
            onChange={this.onGroupValueChange.bind(this)}
          />
          <div id="codePreview"></div>
        </Card>
      </PageContainer>
    );
  }
}
