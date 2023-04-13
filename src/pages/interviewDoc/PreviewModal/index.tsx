/*
 * @Author: Dark Angel
 * @Date: 2023-04-03 16:31:11
 * @LastEditTime: 2023-04-13 21:41:03
 * @LastEditors: Dark Angel
 * @Description: 干就完事了!
 * @FilePath: \DarkAngel637.github.io\src\pages\interviewDoc\PreviewModal\index.tsx
 */

import React from 'react';

import { ModalForm } from '@ant-design/pro-form';

import FileViewer from 'react-file-viewer';

import { Document, Page, pdfjs } from 'react-pdf';
//  解决 warning:Setting up fake worker. Uncaught SyntaxError:Unexpected token '<'
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;
import type { fileMeassageType } from '../index';

import './style.less';

interface Props {
  open: boolean;
  fileMessage: fileMeassageType;
  onCancel: () => void;
}
interface State {
  pageNumber: number;
  numPages: null | number;
}

export default class PreviewModal extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      numPages: null,
      pageNumber: 1,
    };
  }

  onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    console.log(numPages, 'numPages');
    this.setState({
      ...this.state,
      numPages: numPages,
    });
  };

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
          onCancel: () => onCancel(),
        }}
        style={{
          height: 960,
          overflowY: 'scroll',
        }}
      >
        {fileType === 'docx' ? (
          <FileViewer
            fileType={fileType}
            filePath={filePath}
            onError={() => console.log('Failed to load')}
            errorComponent={console.log('出现错误')}
            unsupportedComponent={console.log('不支持')}
          />
        ) : (
          // react-pdf 渲染 pdf 文件
          <Document file={filePath} onLoadSuccess={this.onDocumentLoadSuccess}>
            {new Array(this.state.numPages).fill('').map((item, index) => (
              <Page size="A4" pageNumber={index + 1} key={index} />
            ))}
          </Document>
        )}
      </ModalForm>
    );
  }
}
