/*
 * @Author: Dark Angel
 * @Date: 2023-04-02 19:51:26
 * @LastEditTime: 2023-04-02 22:34:20
 * @LastEditors: Dark Angel
 * @Description: 干就完事了!
 * @FilePath: \DarkAngel637.github.io\src\pages\interviewDoc\index.tsx
 */
import React, { useState } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import FileViewer from 'react-file-viewer';
import file from './assets/interview.docx';
export default () => {
  return (
    <PageContainer>
      {/* <FileViewer
        fileType="docx"
        filePath={file}
        onError={() => console.log('Failed to load')}
        errorComponent={console.log('出现错误')}
        unsupportedComponent={console.log('不支持')}
      /> */}
      面试题
    </PageContainer>
  );
};
