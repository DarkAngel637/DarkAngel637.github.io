import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Alert, Typography, Row, Col, Image } from 'antd';
import { useIntl, FormattedMessage } from 'umi';
import styles from './Welcome.less';
import gitee from '@/images/gitee.svg';
import { useHistory } from 'umi';
const CodePreview: React.FC = ({ children }) => (
  <pre className={styles.pre}>
    <code>
      <Typography.Text copyable>{children}</Typography.Text>
    </code>
  </pre>
);

const Welcome: React.FC = () => {
  const intl = useIntl();
  const history = useHistory();
  return (
    <PageContainer>
      <Card>
        {/* 更快更强的重型组件，已经发布。 */}
        {/* <Alert
          message={intl.formatMessage({
            id: 'pages.welcome.alertMessage',
            defaultMessage: 'Faster and stronger heavy-duty components have been released.',
          })}
          type="success"
          showIcon
          banner
          style={{
            margin: -12,
            marginBottom: 24,
          }}
        /> */}
        <Alert
          message={'基于 antd pro 改编的笔记空间'}
          type="info"
          showIcon
          banner
          style={{
            margin: -12,
            marginBottom: 24,
          }}
        />
        {/* 高级表格 欢迎使用 */}
        {/* <Typography.Text strong>
          <FormattedMessage id="pages.welcome.advancedComponent" defaultMessage="Advanced Form" />{' '}
          <a
            href="https://procomponents.ant.design/components/table"
            rel="noopener noreferrer"
            target="__blank"
          >
            <FormattedMessage id="pages.welcome.link" defaultMessage="Welcome" />
          </a>
        </Typography.Text>
        <CodePreview>yarn add @ant-design/pro-table</CodePreview> */}
        {/* 高级布局 欢迎使用 */}
        {/* <Typography.Text
          strong
          style={{
            marginBottom: 12,
          }}
        >
          <FormattedMessage id="pages.welcome.advancedLayout" defaultMessage="Advanced layout" />{' '}
          <a
            href="https://procomponents.ant.design/components/layout"
            rel="noopener noreferrer"
            target="__blank"
          >
            <FormattedMessage id="pages.welcome.link" defaultMessage="Welcome" />
          </a>
        </Typography.Text>
        <CodePreview>yarn add @ant-design/pro-layout</CodePreview> */}
        <Row gutter={24}>
          {localStorage.getItem('username') === '郭俊豪' && (
            <Col span={8}>
              <Card
                hoverable
                cover={
                  <Image
                    preview={{ visible: false }}
                    onClick={() => {
                      history.push('https://gitee.com/DarkAngel637/Beauty');
                    }}
                    src={gitee}
                  />
                }
              >
                另外的git仓库
              </Card>
            </Col>
          )}
          <Col span={8}>
            <Card
              hoverable
              onClick={() => {
                history.push('/mynote');
              }}
            >
              之前的笔记
            </Card>
          </Col>
          <Col span={8}>
            <Card hoverable>面试题</Card>
          </Col>
        </Row>
      </Card>
    </PageContainer>
  );
};

export default Welcome;
