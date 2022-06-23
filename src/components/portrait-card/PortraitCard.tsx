import React from "react";
import "./PortraitCardStyles.scss";
import { Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { enKey } from "../../utils/languages/en";

export const PortraitCard: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="portraitcard">
      <img src="/assets/images/stand.png" alt="" />

      <div className="card-contents">
        <div className="fs-20 discribtion">تخفيضات الكبرى بلاي ستيشن 4</div>
        <Button variant="success" className="fs-14">
          {t(enKey.btn_order_now)}
        </Button>
      </div>
    </div>
  );
};
