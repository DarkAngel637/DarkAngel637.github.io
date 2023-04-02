/*
 * @Author: Dark Angel
 * @Date: 2023-04-02 19:51:26
 * @LastEditTime: 2023-04-02 23:30:06
 * @LastEditors: Dark Angel
 * @Description: 干就完事了!
 * @FilePath: \DarkAngel637.github.io\src\pages\interviewDoc\index.tsx
 */
import React, { useState } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import FileViewer from 'react-file-viewer';
import file from './assets/interview.docx';
export default () => {
  // const file =
  //   'https://cdn.jsdelivr.net/gh/DarkAngel637/study_in_winter_holiday@master/interview/%E9%9D%A2%E8%AF%95%E5%A4%A7%E5%85%A8-%E7%B2%BE%E5%8D%8E%E7%89%88-%E6%96%B0-192%E9%A1%B5.docx';
  return (
    <PageContainer>
      <FileViewer
        fileType="docx"
        filePath={file}
        onError={() => console.log('Failed to load')}
        errorComponent={console.log('出现错误')}
        unsupportedComponent={console.log('不支持')}
      />
    </PageContainer>
  );
};
