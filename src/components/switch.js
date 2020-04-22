import React from "react";
import "antd/dist/antd.css";
import { Switch } from "antd";

function DarkSwitch() {
  return (
    <div>
      <Switch checkedChildren="dark" unCheckedChildren="light" defaultChecked />
    </div>
  );
}

export default DarkSwitch;
