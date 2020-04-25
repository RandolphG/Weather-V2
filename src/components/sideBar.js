import React, { useState } from "react";
import styled from "styled-components";
import "antd/dist/antd.css";
import { Drawer, Button } from "antd";
import Hours from "./hours";

const StyledDrawer = styled(Drawer)`
  .ant-drawer-body {
    background-image: url("../img/_blue_gradient.jpg");
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

function SideBar(hourly, onClose, showDrawer) {
  return (
    <div style={{ overflow: "hidden" }}>
      <StyledDrawer
        // className="ant-drawer-wrapper-body"
        // title="HOURS"
        placement="right"
        closable={true}
        onClose={onClose}
        // visible={visible}
        // visible={visible}
        getContainer={false}
        style={{ position: "absolute" }}
      >
        <Hours hours={hourly} />
      </StyledDrawer>
    </div>
  );
}

export default SideBar;
