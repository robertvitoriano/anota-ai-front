import loadable from "@loadable/component";

interface IProps {
  type:string
}

const DynamicIcon = loadable(({type}:IProps) => 
import(`@ant-design/icons/es/icons/${type}`)
.catch(err => import(`@ant-design/icons/WarningOutlined`)))

export default DynamicIcon;
