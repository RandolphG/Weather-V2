import React, { useState } from "react";
import "antd/dist/antd.css";
import { Drawer, Button } from "antd";
import DarkSwitch from "./switch";
import Hours from "./hours";
function SideBar() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  return (
    <div className="site-drawer-render-in-current-wrapper">
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
        title="HOURS"
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
        getContainer={false}
        style={{ position: "absolute" }}
      >
        <DarkSwitch />
        <Hours />
      </Drawer>
    </div>
  );
}

export default SideBar;
