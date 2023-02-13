import { PageContainer } from '@ant-design/pro-layout';
import { Form, Input, Button, Select, DatePicker as TDatePicker, message, Space, Row, Col, Divider, Tabs } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import { ProFormSelect, ProForm, ProFormDateTimePicker, ProFormDateRangePicker, ProFormTextArea } from '@ant-design/pro-components';
import type { ChanType } from "./type.d";
import { CloseOutlined } from "@ant-design/icons";
import stylet from "./index.less";

const { TextArea } = Input;
const { TabPane } = Tabs;

type TargetKey = React.MouseEvent | React.KeyboardEvent | string;


export default function NewAreement() {
  const defaultPanes = new Array(3).fill(null).map((_, index) => {
    const id = String(index + 1);
    return {
      label: `补充协议 ${id}`,
      children: <div className="xieyiregion">
        <div className="xieyiregion_head">
          <span>协议内容：</span>
          <Button onClick={()=>{remove(String(index))}}>删除</Button>
        </div>
        <ProFormTextArea name={`address ${id}`} />
      </div>,
      key: id
    };
  });
  let DatePicker: any = TDatePicker;
  const [channeldata, channelData] = useState<ChanType[]>([]);
  const [tabsitems, setTabsItems] = useState(defaultPanes);
  const [activeKey, setActiveKey] = useState(defaultPanes[0].key);
  const proformrefs = useRef();
  const newTabIndex = useRef(4);

  useEffect(() => {
    channelData([
      {
        code: "BJ000090",
        name: "宁波九州通药业有限公司",
        priver: "浙江省"
      },
      {
        code: "BJ000091",
        name: "宁波九州通药业有限公司",
        priver: "浙江省"
      },
      {
        code: "BJ000092",
        name: "宁波九州通药业有限公司",
        priver: "浙江省"
      }
    ])
  }, []);



  const add = () => {
    const newActiveKey = `${newTabIndex.current++}`;
    setTabsItems([...tabsitems, { label: `补充协议 ${newActiveKey}`, children: <ProFormTextArea name={`address ${newActiveKey}`} />, key: newActiveKey }]);
    setActiveKey(newActiveKey);
  };

  const onChange = (key: string) => {
    setActiveKey(key);
  };
  const remove = (targetKey: TargetKey) => {
    const targetIndex = tabsitems.findIndex((pane) => pane.key === targetKey);
    const newPanes = tabsitems.filter((pane) => pane.key !== targetKey);
    if (newPanes.length && targetKey === activeKey) {
      const { key } = newPanes[targetIndex === newPanes.length ? targetIndex - 1 : targetIndex];
      setActiveKey(key);
    }
    setTabsItems(newPanes);
  };

  const onEdit = (targetKey: TargetKey, action: 'add' | 'remove') => {
    if (action === 'add') {
      add();
    } else {
      remove(targetKey);
    }
  };

  const operations = <Button type='primary' onClick={add}>新增</Button>;

  return (
    <>
      <PageContainer>
        <ProForm<{
          name: string;
          company: string;
        }>
          formRef={proformrefs}
          className="formsitem_zero"
          layout="horizontal"
          onFinish={async (values) => {
            console.log(values);
            // await waitTime(2000);
            // console.log(values);
            message.success('提交成功');
          }}
          initialValues={{
            names: '上海正也医药有限公司',
            states: "a2",
            purchaseIndex: "a4",
            purchaseText: ""
          }}
          submitter={{
            // 配置按钮文本
            searchConfig: {
              submitText: '保存',
            },
            // 配置按钮的属性
            resetButtonProps: {
              style: {
                // 隐藏重置按钮
                display: 'none',
              },
            },
            submitButtonProps:{
              style:{
                 borderRadius:'7px',
                 margin:"20px",
                 fontWeight:"bold",
                 fontSize:"16px"
              }
            },
            // 提交按钮配置
            // submitButtonProps: {},
            // 完全自定义整个区域
            // render: (props, doms) => {
            //   console.log(props);
            //   return [
            //     <button type="button" key="rest" onClick={() => props.form?.resetFields()}>
            //       重置
            //     </button>,
            //     <button type="button" key="submit" onClick={() => props.form?.submit?.()}>
            //       提交
            //     </button>,
            //   ];
            // },
          }}
        >
          <div className="agreementSubject">
            <h1 >协议主体</h1>
          </div>
          <Space className='formsitem_space'>
            <Form.Item className='formsitem_one' label="协议客户">
              <Button>选择客户&nbsp;&nbsp;&nbsp;</Button>
              <Form.Item name="names">
                <Input disabled></Input>
              </Form.Item>
            </Form.Item>
            <ProFormSelect
              name="states"
              label="协议状态"
              valueEnum={{
                "a1": '异常',
                "a2": '正常',
              }}
              placeholder="请选择协议状态"
            />
          </Space>
          <Space className='formsitem_space'>
            <Space>
              <ProFormSelect
                name="purchaseIndex"
                label="购进指标"
                valueEnum={{
                  "a3": '股数',
                  "a4": '金额',
                }}
                placeholder="0"
              />
              <Form.Item name="purchaseText">
                <Input className='backgrouinputgrey' placeholder='输入金额/数量'></Input>
              </Form.Item>
            </Space>
            <Form.Item className='formsitem_one' label="纯销指标">
              <Button>&nbsp;&nbsp;&nbsp;&nbsp;金&nbsp;&nbsp;&nbsp;额&nbsp;&nbsp;&nbsp;&nbsp;</Button>
              <Form.Item name="netSalesIndex">
                <Input className='backgrouinputgrey' placeholder='输入金额/数量'></Input>
              </Form.Item>
            </Form.Item>
          </Space>
          <Space className='formsitem_space'>
            <Form.Item className='formsitem_one' label="销售区域">
              <Button>选择区域&nbsp;&nbsp;&nbsp;</Button>
              <Form.Item name="netSalesIndex" className={stylet.selectedAera}>
                <Button>全国 <CloseOutlined /></Button>
              </Form.Item>
            </Form.Item>
            <ProFormDateTimePicker
              name="dateTime"
              label="日期时间"
              fieldProps={{
                format: (value) => value.format('YYYY-MM-DD HH:mm'),
                showTime: { format: 'HH:mm' }
              }}
            />
          </Space>
          <Space className='formsitem_space'>
            <Space>
              <ProFormSelect
                name="purchaseChannels"
                label="购进渠道"
                valueEnum={{
                  "a3": '渠道一',
                  "a4": '渠道二',
                }}
                placeholder="指定渠道"
              />
              <Form.Item>
                <Button>请选择渠道</Button>
              </Form.Item>
            </Space>
          </Space>
          <div className='formsitem_rowcol' >
            <div>
              <span>指定渠道：</span>
            </div>
            <div>
              <Row>
                <Col span={8}>指定渠道编码</Col>
                <Col span={10}>指定渠道名称</Col>
                <Col span={6}>所在省</Col>
              </Row>
              {
                channeldata && channeldata.map(item => {
                  return (
                    <Row key={item.code}>
                      <Col span={8}>{item.code}</Col>
                      <Col span={10}>{item.name}</Col>
                      <Col span={6}>{item.priver}</Col>
                    </Row>
                  )
                })
              }
            </div>
          </div>
          <div className="agreementSubject agreementSubjects">
            <h1 >产品政策</h1>
          </div>
          <Space className='formsProductPolicy_space'>
            <Row>
              <Col span={24} className="formsProductPolicydiv">
                <Button type="primary">添加产品</Button>
                <div >
                  <div>
                    <span>购进总指标(万元)：</span>
                    <span>￥156.23</span>
                  </div>
                  <div>
                    <span>指标按季度分解(万元)：</span>
                    <span>【Q1】￥12.5,</span>
                    <span>【Q2】￥12.5,</span>
                    <span>【Q3】￥12.5,</span>
                    <span>【Q4】￥12.5</span>
                  </div>
                  <div>
                    <span>纯销总指标(万元)：</span>
                    <span>￥152.6</span>
                  </div>
                </div>
              </Col>
            </Row>

          </Space>
          <Space className={stylet.selectedProducts}>
            <Space>
              <Form.Item className={stylet.selectedProducts_xieyi} label="协议客户">
                <Button>选择产品</Button>
                <span>美复胶丸 24粒/盒</span>
              </Form.Item>
              <Space className={stylet.selectedProducts_bot_wangu}>
                <ProFormDateRangePicker name="dateRangess" label="协议期效" />
              </Space>
            </Space>
            <Space className={stylet.selectedProducts_bot}><Button>删除</Button></Space>
          </Space>
          <Divider className={stylet.selectdivider} />
          <Space className={stylet.selectrowinput}>
            <div className={`${stylet.selectrowinput_div} ${stylet.selectrowinput_backg}`}>
              <div>
                <span>协议价(元)</span>
              </div>
              <div>
                <span>票折(元)</span>
              </div>
              <div>
                <span>购进指标量(大单位)</span>
              </div>
              <div>
                <span>购进指标量(小单位)</span>
              </div>
              <div>
                <span>购进金额(万元)</span>
              </div>
              <div>
                <span>纯销指标量(小单位)</span>
              </div>
              <div>
                <span>纯销指标金额(万元)</span>
              </div>
            </div>
            <div className={stylet.selectrowinput_div}>
              <div>
                <Input placeholder='请输入' />
              </div>
              <div>
                <Input placeholder='请输入' />
              </div>
              <div>
                <Input placeholder='请输入' />
              </div>
              <div>
                <Input placeholder='请输入' />
              </div>
              <div>
                <Input placeholder='请输入' />
              </div>
              <div>
                <Input placeholder='请输入' />
              </div>
              <div>
                <Input placeholder='请输入' />
              </div>
            </div>
          </Space>
          <Space className={stylet.selectrowinput}>
            <div className={`${stylet.selectrowinput_div} ${stylet.selectrowinput_backg}`}>
              <Col>
                <span>分销奖励</span>
              </Col>
              <Col>
                <span>费用科目</span>
              </Col>
              <Col>
                <span>零售配送</span>
              </Col>
              <Col>
                <span>费用科目</span>
              </Col>
              <Col>
                <span>医疗配送商</span>
              </Col>
              <Col>
                <span>费用科目</span>
              </Col>
              <Col>
                <span>自定义7</span>
              </Col>
              <Col>
                <span>自定义8</span>
              </Col>
            </div>
            <div className={stylet.selectrowinput_div}>
              <div>
                <Input placeholder='请输入' />
              </div>
              <div className={stylet.selectdivinput_raiod}>
                <Form.Item>
                  <Select placeholder="单选项" allowClear>
                    <Select.Option value="demo">Demo</Select.Option>
                  </Select>
                </Form.Item>
              </div>
              <div>
                <Input placeholder='请输入' />
              </div>
              <div>
                <Form.Item>
                  <Select mode="multiple" showArrow allowClear placeholder="多选项">
                    <Select.Option value="demo">Demo</Select.Option>
                    <Select.Option value="demo2">Demo2</Select.Option>
                  </Select>
                </Form.Item>
              </div>
              <div>
                <Input placeholder='请输入' />
              </div>
              <div>
                <Form.Item>
                  <Select mode="multiple" showArrow allowClear placeholder="多选项">
                    <Select.Option value="demo">Demo</Select.Option>
                    <Select.Option value="demo2">Demo2</Select.Option>
                  </Select>
                </Form.Item>
              </div>
              <div>
                <Form.Item name='zidingyi'>
                  <DatePicker />
                </Form.Item>
              </div>
              <div>
                <Form.Item name='zidingyi'>
                  <DatePicker />
                </Form.Item>
              </div>
            </div>
          </Space>
          <div className="agreementSubject">
            <h1 >补充协议</h1>
          </div>
          <Tabs
            tabBarExtraContent={operations}
            hideAdd
            onChange={onChange}
            activeKey={activeKey}
            type="editable-card"
            onEdit={onEdit}
            className ='tabstextinput'
            items={tabsitems}
          >
          </Tabs>
          <div className={stylet.horizontalLine}></div>

        </ProForm>
      </PageContainer>
    </>
  );
}
