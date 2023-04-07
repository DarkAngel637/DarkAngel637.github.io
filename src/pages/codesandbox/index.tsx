/*
 * @Author: Dark Angel
 * @Date: 2023-04-08 01:15:01
 * @LastEditTime: 2023-04-08 03:08:41
 * @LastEditors: Dark Angel
 * @Description: 干就完事了!
 * @FilePath: \DarkAngel637.github.io\src\pages\codesandbox\index.tsx
 */
import React from 'react';
import sdk from '@stackblitz/sdk';
import { PageContainer } from '@ant-design/pro-layout';
import { Button, Card } from 'antd';
import './index.less';
interface Props extends State {}
interface State {}

export default class CodeSandBox extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <PageContainer>
        <Card>
          <Button
            onClick={() => {
              sdk.openProjectId('css-custom-prop-color-values', {
                newWindow: false,
                view: 'preview',
              });
            }}
            type="primary"
          >
            Click Me
          </Button>
          <Button
            onClick={() => {
              sdk.embedProjectId('ReduxAndReactRedux', 'react-ts-react-reduxandredux', {
                forceEmbedLayout: true,
                openFile: 'component/index.tsx',
              });
            }}
            type="primary"
          >
            react-redux 的使用
          </Button>
          <div id="ReduxAndReactRedux"></div>
        </Card>
      </PageContainer>
    );
  }
}
