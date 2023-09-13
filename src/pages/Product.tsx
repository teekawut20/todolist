import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { PlusOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Input, Upload, Button as ButtonAntd, Select } from "antd";
import type { UploadFile } from "antd/es/upload/interface";

import Button from "../components/Button";
import { blobToBase64 } from "../utils/image";
import {
  getProductList,
  getCategoryList,
  setProductList,
} from "../redux/slices/product";
import { IProduct, IFormDataProduct } from "./types";
import { IProductList } from "../redux/slices/types";

const { TextArea } = Input;
const { Option } = Select;

export default function AddProduct({ isManage = true }: IProduct) {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const productList = useSelector(getProductList);
  const categoryList = useSelector(getCategoryList);
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [product, setProduct] = useState<IProductList>({
    title: "",
    description: "",
    image: "",
    price: "",
    category: 0,
  });
  useEffect(() => {
    if (id !== undefined) {
      const product = productList?.[parseInt(id)] ?? {};
      setProduct(product);
      form.setFieldsValue({
        title: product?.title ?? "",
        description: product?.description ?? "",
        price: product?.price ?? "",
        category: product?.price ?? "",
        image: product?.image ?? "",
      });
      setFileList([
        {
          uid: "-1",
          name: "image.png",
          status: "done",
          url: product?.image ?? "",
        },
      ]);
    }
  }, [id]);

  const onFinish = async (values: IFormDataProduct) => {
    const file = values?.image?.file?.originFileObj ?? "";
    const res = !!file
      ? await blobToBase64(values.image.file.originFileObj)
      : "";
    if (id !== undefined) {
      const temp = productList;
      temp[parseInt(id)] = {
        title: values.title,
        description: values.description,
        image: id !== undefined ? (!!res ? res : product?.image ?? "") : res,
        price: values.price,
        category: values.category,
      };
      dispatch(setProductList([...temp]));
    } else {
      dispatch(
        setProductList([
          {
            title: values.title,
            description: values.description,
            image:
              id !== undefined ? (!!res ? res : product?.image ?? "") : res,
            price: values.price,
            category: values.category,
          },
          ...productList,
        ])
      );
    }
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
          label="Price"
          name="price"
          rules={[{ required: true, message: "Please input your Price!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="category"
          label="Category"
          hasFeedback
          rules={[{ required: true, message: "Please select your Category!" }]}
        >
          <Select placeholder="Please select a Category">
            {categoryList.map((e, index) => {
              return (
                <Option value={e.id} key={index}>
                  {e.title}
                </Option>
              );
            })}
          </Select>
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
