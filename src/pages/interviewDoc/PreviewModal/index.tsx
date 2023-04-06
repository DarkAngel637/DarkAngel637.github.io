/*
 * @Author: Dark Angel
 * @Date: 2023-04-03 16:31:11
 * @LastEditTime: 2023-04-06 11:10:27
 * @LastEditors: Dark Angel
 * @Description: 干就完事了!
 * @FilePath: \DarkAngel637.github.io\src\pages\interviewDoc\PreviewModal\index.tsx
 */

import React from 'react';

import { ModalForm } from '@ant-design/pro-form';

import FileViewer from 'react-file-viewer';

import { fileMeassageType } from '../index';

interface Props {
  open: boolean;
  fileMessage: fileMeassageType;
  onCancel: () => void;
}
interface State {}

export default class PreviewModal extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const {
      open,
      fileMessage: { fileType, filePath, fileTitle },
      onCancel,
    } = this.props;
    return (
      <ModalForm
        visible={open}
        title={<h3>{fileTitle}</h3>}
        width={1000}
        onFinish={async () => {
          onCancel();
          return true;
        }}
        modalProps={{
          onCancel:()=>onCancel()
        }}
        style={{
          height: 960,
        }}
      >
        <FileViewer
          fileType={fileType} 
          filePath={filePath} 
          onError={() => console.log('Failed to load')}
          errorComponent={console.log('出现错误')}
          unsupportedComponent={console.log('不支持')}
        />
      </ModalForm>
    );
  }
}
