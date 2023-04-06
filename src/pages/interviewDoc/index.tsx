/*
 * @Author: Dark Angel
 * @Date: 2023-04-02 19:51:26
 * @LastEditTime: 2023-04-06 11:38:59
 * @LastEditors: Dark Angel
 * @Description: 干就完事了!
 * @FilePath: \DarkAngel637.github.io\src\pages\interviewDoc\index.tsx
 */
import React, { useState } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Table, Card, Button } from 'antd';
import PreviewModal from './PreviewModal';
import fileDoc from '@/pages/interviewDoc/assets/interview.docx';

export interface fileMeassageType {
  fileType: string;
  filePath: string;
  fileTitle: string;
}

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
      title: '路径',
      dataIndex: 'filepath',
      key: 'filepath',
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
        <Table columns={columns} title={() => <h1>文件列表</h1>} dataSource={dataSource} />
        <PreviewModal
          open={open}
          fileMessage={fileMessage}
          onCancel={() => {
            setOpen(false);
            setFileMessage({
              filePath:'', fileTitle:'', fileType:''
            });
          }}
        />
      </Card>
    </PageContainer>
  );
};
