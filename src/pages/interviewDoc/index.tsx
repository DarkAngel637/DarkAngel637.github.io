/*
 * @Author: Dark Angel
 * @Date: 2023-04-02 19:51:26
 * @LastEditTime: 2023-04-17 16:38:20
 * @LastEditors: Dark Angel
 * @Description: 干就完事了!
 * @FilePath: \DarkAngel637.github.io\src\pages\interviewDoc\index.tsx
 */
import React, { useState } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Table, Card, Button, Divider } from 'antd';
import PreviewModal from './PreviewModal';
import fileDoc from '@/pages/interviewDoc/assets/interview.docx';
import baseline_two from '@/pages/interviewDoc/assets/base_two.pdf';
import basejs from '@/pages/interviewDoc/assets/basejs.pdf';
import computerbase from '@/pages/interviewDoc/assets/computerbase.pdf';
import exam from '@/pages/interviewDoc/assets/exam.pdf';
import gostronger from '@/pages/interviewDoc/assets/gostronger.pdf';
import pro from '@/pages/interviewDoc/assets/pro.pdf';
import improve from '@/pages/interviewDoc/assets/improve.pdf';
import review from '@/pages/interviewDoc/assets/review.pdf';
import simple from '@/pages/interviewDoc/assets/simple.pdf';
import oneHontriedti from '@/pages/interviewDoc/assets/100ti.pdf';
import ali1 from '@/pages/interviewDoc/assets/ali1.pdf';
import ali2 from '@/pages/interviewDoc/assets/ali2.pdf';
import frontendxiulian from '@/pages/interviewDoc/assets/frontendxiulian.pdf';

export interface fileMeassageType {
  fileType: string;
  filePath: string;
  fileTitle: string;
}
// 1. class 类组件方法声明,2. react pdf 报错 '<' 3. 样式
export default () => {
  // const file =
  //   'https://cdn.jsdelivr.net/gh/DarkAngel637/study_in_winter_holiday@master/interview/%E9%9D%A2%E8%AF%95%E5%A4%A7%E5%85%A8-%E7%B2%BE%E5%8D%8E%E7%89%88-%E6%96%B0-192%E9%A1%B5.docx';
  const [open, setOpen] = useState(false);
  const [fileMessage, setFileMessage] = useState<fileMeassageType>({});
  const dataSource = [
    {
      key: '1',
      fileTitle: '前端面试',
      fileType: 'docx',
      filePath: fileDoc,
    },
    {
      key: '2',
      fileTitle: '第一部分: 基础篇',
      fileType: 'pdf',
      filePath: baseline_two,
    },
    {
      key: '3',
      fileTitle: '第二部分: 进阶篇',
      fileType: 'pdf',
      filePath: gostronger,
    },
    {
      key: '4',
      fileTitle: '第三部分: 高级篇',
      fileType: 'pdf',
      filePath: pro,
    },
    {
      key: '5',
      fileTitle: '第四部分: 计算机基础',
      fileType: 'pdf',
      filePath: computerbase,
    },
    {
      key: '6',
      fileTitle: '第五部分: 高频考点',
      fileType: 'pdf',
      filePath: exam,
    },
    {
      key: '7',
      fileTitle: '第六部分: 精简版',
      fileType: 'pdf',
      filePath: simple,
    },
    {
      key: '8',
      fileTitle: '第八部分: 复习篇',
      fileType: 'pdf',
      filePath: review,
    },
    {
      key: '9',
      fileTitle: 'html,css,js 基础',
      fileType: 'pdf',
      filePath: basejs,
    },
    {
      key: '10',
      fileTitle: 'html,css,js 进阶',
      fileType: 'pdf',
      filePath: improve,
    },
    {
      key: '11',
      fileTitle: '大厂面试高频100题',
      fileType: 'pdf',
      filePath: oneHontriedti,
    },
    {
      key: '12',
      fileTitle: '阿里前端面试题（第一期）',
      fileType: 'pdf',
      filePath: ali1,
    },
    {
      key: '13',
      fileTitle: '阿里前端面试题（第二期）',
      fileType: 'pdf',
      filePath: ali2,
    },
    {
      key: '14',
      fileTitle: '2023前端王修炼手册',
      fileType: 'pdf',
      filePath: frontendxiulian,
    },
  ];

  const columns = [
    {
      title: '文件',
      dataIndex: 'fileTitle',
      key: 'file',
    },
    {
      title: '类型',
      dataIndex: 'fileType',
      key: 'fileType',
    },
    {
      title: '',
      dataIndex: 'filepath',
      key: 'filepath',
      render: () => <Divider type="vertical" />,
      width: '3px',
    },
    {
      title: '操作',
      dataIndex: 'action',
      key: 'filepath',
      render: (text, record, index) => (
        <Button
          type="primary"
          onClick={() => {
            const { filePath, fileTitle, fileType } = record;
            setOpen(true);
            setFileMessage({ filePath, fileTitle, fileType });
          }}
        >
          打开文件
        </Button>
      ),
    },
  ];

  return (
    <PageContainer>
      <Card>
        <Table columns={columns} title={() => <h1>前端面试题</h1>} dataSource={dataSource} />
        <PreviewModal
          open={open}
          fileMessage={fileMessage}
          onCancel={() => {
            setOpen(false);
            setFileMessage({
              filePath: '',
              fileTitle: '',
              fileType: '',
            });
          }}
        />
      </Card>
    </PageContainer>
  );
};
