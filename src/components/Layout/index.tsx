import { useMemo, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Button from "../Button";
import { imgList } from "../../constants/imgList";
import {
  getBanner,
  setBanner,
  setProductList,
} from "../../redux/slices/product";
import { ILayout } from "./types";

export default function Layout({ children, isManage = false }: ILayout) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const banner = useSelector(getBanner);
  useEffect(() => {
    if (banner.title === "") {
      init();
    }
  }, []);
  const renderButton = useMemo(() => {
    return (
      <>
        {!isManage && (
          <div className="layout__reset">
            <Button
              text="เริ่มต้นใหม่"
              bgColor="orange"
              onClick={() => init()}
            />
          </div>
        )}
        <Button
          text={isManage ? "ดูสินค้า" : "จัดการสินค้า"}
          onClick={() => navigate(isManage ? "/" : "/manage")}
        />
      </>
    );
  }, [isManage]);
  const init = async () => {
    dispatch(
      setBanner({
        title: "Smartwatch",
        description:
          "ดีไซน์สวย รูปแบบทันสมัย วัดอัตราการเต้นของหัวใจHR แบบเรียลทาม วัดความดันโลหิต วัดระยะทาง นับก้าวเดิน ,วิ่ง วัดอัตราเผาผลาญแคลอรี่ จับเวลาได้ รีโมทกล้องถ่ายรูป รองรับทั้ง Android/IOS ",
        image: imgList.banner,
      })
    );
    dispatch(
      setProductList([
        {
          title: "กล้อง Polaroid Go Instant Camera",
          description:
            "กล้อง Polaroid Now Instant Camera เป็นกล้องโพลารอยด์ กล้องอินสแตนท์จากแบรนด์ Polaroid ที่ได้รับการต่อยอดมาจากกล้องรุ่นเดอะอย่าง Polaroid OneStep กล้องโพลารอยด์จากยุค 70s ที่ยังคงไว้ซึ่งความเรียบง่าย",
          image: imgList.product_1,
          price: "4,940",
          category: 1,
        },
        {
          title: "Clubmaster Acetate and Gold-Tone Sunglasses",
          description:
            "แว่น Rayban เริ่มต้นจากความเป็นตัวของตัวเองสะท้อน ผ่านดีไซน์อันเป็นเอกลักษณ์ของแว่นแบรนด์นี้ เชื่อว่าคนไทยหลายคนรวมถึงผู้ที่รักและสะสมแว่นคงต้องรู้จักกันเป็นอย่างดี แต่คุณเคยรู้ประวัติความเป็นมาของมันหรือไม่ว่า กว่าจะกลายเป็นแว่นที่ครองใจคนทั่วโลก และครองใจผู้สวมใส่ด้วยคุณภาพและดีไซน์สุดคลาสสิค Rayban มีเส้นทางจากจุดเริ่มต้น จนเข้าสู่โลกของแฟชั่นได้อย่างไร",
          image: imgList.product_2,
          price: "4,940",
          category: 2,
        },
        {
          title:
            "Court Classic Leather-Trimmed Logo-Embroidered Distressed Canvas Sneakers",
          description:
            "SAINT LAURENT's 'SL/06' sneakers are artfully distressed, so they look like a trusty pair you've had for years. Based on classic tennis shoes, they're made from cream",
          image: imgList.product_3,
          price: "4,940",
          category: 2,
        },
        {
          title: "แว่นตาอ่านหนังสือ แบบครึ่งกรอบ สไตล์นักธุรกิจ สําหรับผู้ชาย",
          description:
            "ประเภทแว่นตา: แว่นอ่านหนังสือ เลนส์สูง: 3.3 ซม ประเภทรายการ: แลนส์กว้าง: 5.5 ซม วัสดุกรอบ: โลหะผสมแว่นตาคุณภาพสูง: แว่นตา Prebyopic",
          image: imgList.product_4,
          price: "4,940",
          category: 2,
        },
        {
          title:
            "Apple Watch Ultra GPS + Cellular 49mm Titanium Case with Yellow/Beige Trail Loop - S/M",
          description:
            "Apple Watch ที่สมบุกสมบันและมากความสามารถ ที่สุดเท่าที่เคยมีมา ได้รับการออกแบบมาสำหรับการสำรวจ การผจญภัย และกิจกรรมที่เน้นความทนทานของร่างกาย มาพร้อมตัวเรือน 49 มม.",
          image: imgList.product_5,
          price: "4,940",
          category: 1,
        },
        {
          title:
            "ไอซ์ซี่ คูล 450 มล. ขวดปั๊ม รวม 2 ขวด ให้ความรู้สึกเย็นสุดขั้ว",
          description:
            "เจลอาบน้ำ โพรเทคส์ ไอซ์ซี่ คูล 450 มล. ขวดปั๊ม x2 ขวด ดูแลสุขภาพผิวกายด้วย เจลอาบน้ำสูตรเย็นสดชื่น ",
          image: imgList.product_6,
          price: "4,940",
          category: 3,
        },
      ])
    );
  };
  return (
    <Container className="layout">
      <div className="layout__header">
        <div className="layout__inner">
          <div className="layout__header-warp">{renderButton}</div>
        </div>
      </div>
      <div className="layout__inner">
        <div className="layout__child">{children}</div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  padding: 72px 0 0;
  .layout {
    &__inner {
      width: 100%;
      max-width: 1000px;
      margin: 0 auto;
      padding: 0 16px;
    }
    &__header {
      position: fixed;
      top: 0;
      width: 100%;
      background: #fff;
      box-shadow: 0px 1px 0px 0px #e5e9f2;
      z-index: 999;
    }
    &__header-warp {
      width: 100%;
      height: 72px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
    &__child {
      width: 100%;
      padding: 40px 0;
    }
    &__reset {
      margin: 0 8px 0 0;
    }
  }
`;
