import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { PlusOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Input, Upload, Button as ButtonAntd } from "antd";
import type { UploadFile } from "antd/es/upload/interface";

import Button from "../components/Button";
import { blobToBase64 } from "../utils/image";
import { getBanner, setBanner } from "../redux/slices/product";
import { IBanner, IFormDataBanner } from "./types";

const { TextArea } = Input;

export default function EditBanner({ isManage = true }: IBanner) {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const banner = useSelector(getBanner);
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  useEffect(() => {
    form.setFieldsValue({
      title: banner.title,
      description: banner.description,
      image: banner.image,
    });
    setFileList([
      {
        uid: "-1",
        name: "image.png",
        status: "done",
        url: banner.image,
      },
    ]);
  }, []);

  const onFinish = async (values: IFormDataBanner) => {
    console.log("values", values);
    const file = values?.image?.file?.originFileObj ?? "";
    const res = !!file
      ? await blobToBase64(values.image.file.originFileObj)
      : "";
    dispatch(
      setBanner({
        title: values.title,
        description: values.description,
        image: !!res ? res : banner.image,
      })
    );
    navigate("/manage");
  };

  const customRequest = ({ file, onSuccess }: any) => {
    onSuccess("ok");
  };
  return (
    <Page className="home">
      {isManage && (
        <div className="home__back">
          <Button text="ย้อนกลับ" onClick={() => navigate("/manage")} />
        </div>
      )}
      <Form
        form={form}
        wrapperCol={{ flex: 1 }}
        labelCol={{ flex: "110px" }}
        labelWrap
        colon={false}
        layout="horizontal"
        className="home__form"
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Title"
          name="title"
          rules={[{ required: true, message: "Please input your Title!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Description"
          name="description"
          rules={[
            { required: true, message: "Please input your Description!" },
          ]}
        >
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item
          label="Image"
          name="image"
          rules={[{ required: true, message: "Please input your Image!" }]}
        >
          <Upload
            customRequest={customRequest}
            fileList={fileList}
            listType="picture-card"
            maxCount={1}
            showUploadList={{ showPreviewIcon: false }}
            onChange={(e) => setFileList(e.fileList as any)}
          >
            <div>
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>
          </Upload>
        </Form.Item>
        <Form.Item label=" ">
          <ButtonAntd type="primary" htmlType="submit">
            Submit
          </ButtonAntd>
        </Form.Item>
      </Form>
    </Page>
  );
}

const Page = styled.div`
  width: 100%;
  .home {
    &__back {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      margin: 0 0 16px;
    }
    &__form {
      margin: 0 auto;
      max-width: 600px;
    }
  }
`;
