import React, { useState } from "react";
import "antd/dist/antd.css";
import { Drawer, Button } from "antd";
import Hours from "./hours";

function SideBar(hourly) {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  return (
    <div style={{ overflow: "hidden" }}>
      <div style={{ marginTop: 8, marginBottom: 8 }}>
        <Button
          type="primary"
          style={{ background: "transparent" }}
          onClick={showDrawer}
        >
          click
        </Button>
      </div>
      <Drawer
        // className="ant-drawer-wrapper-body"
        // title="HOURS"
        placement="right"
        closable={true}
        onClose={onClose}
        // visible={visible}
        visible={false}
        getContainer={false}
        style={{ position: "absolute", overflow: "hidden" }}
      >
        <Hours hours={hourly} />
      </Drawer>
    </div>
  );
}

export default SideBar;
