import React from 'react'
import {Alert, DatePicker} from 'antd'
import "antd/dist/antd.css"

export const AntDesignReactExample: React.FC = () => (
  <div>
    <Alert type="error" message="Invalid property" />
    <DatePicker />
  </div>
)