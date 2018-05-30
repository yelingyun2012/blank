/**
 * 引入组件方式,需要添加组件时,取消对应组件注释
 */
import Vue from 'vue'

import {
  Affix,
  Alert,
  AutoComplete,
  Avatar,
  BackTop,
  Badge,
  Breadcrumb,
  Button,
  Card,
  Carousel,
  Cascader,
  Checkbox,
  Circle,
  Collapse,
  ColorPicker,
  Content,
  DatePicker,
  Dropdown,
  Footer,
  Form,
  Header,
  Icon,
  Input,
  InputNumber,
  Scroll,
  Layout,
  LoadingBar,
  Menu,
  Message,
  Modal,
  Notice,
  Page,
  Poptip,
  Progress,
  Radio,
  Rate,
  Sider,
  Slider,
  Spin,
  Steps,
  Switch,
  Table,
  Tabs,
  Tag,
  Timeline,
  TimePicker,
  Tooltip,
  Transfer,
  Tree,
  Upload,
  Row,
  Col,
  Select,
  Option,
  OptionGroup,
  locale
} from 'iview'

const components = {
  // Affix,
  // Alert,
  // AutoComplete,
  Avatar,
  // BackTop,
  // Badge,
  Breadcrumb,
  BreadcrumbItem: Breadcrumb.Item,
  Button,
  ButtonGroup: Button.Group,
  Card,
  // Carousel,
  // CarouselItem: Carousel.Item,
  Cascader,
  Checkbox,
  CheckboxGroup: Checkbox.Group,
  Col,
  // Collapse,
  // ColorPicker,
  Content: Content,
  DatePicker,
  Dropdown,
  DropdownItem: Dropdown.Item,
  DropdownMenu: Dropdown.Menu,
  // Footer: Footer,
  Form,
  FormItem: Form.Item,
  // Header: Header,
  Icon,
  Input,
  InputNumber,
  // Scroll,
  // Sider: Sider,
  Submenu: Menu.Sub,
  Layout: Layout,
  // LoadingBar,
  Menu,
  MenuGroup: Menu.Group,
  MenuItem: Menu.Item,
  Message,
  Modal,
  // Notice,
  // Option: Option,
  // OptionGroup,
  // Page,
  // Panel: Collapse.Panel,
  // Poptip,
  // Progress,
  // Radio,
  // RadioGroup: Radio.Group,
  // Rate,
  // Row,
  // Select,
  // Slider,
  // Spin,
  // Step: Steps.Step,
  // Steps,
  // Table,
  // Tabs: Tabs,
  // TabPane: Tabs.Pane,
  // Tag,
  // Timeline,
  // TimelineItem: Timeline.Item,
  // TimePicker,
  // Tooltip,
  // Transfer,
  // Tree,
  Upload
}

const iview = {
  ...components,
  iButton: Button,
  // iCircle: Circle,
  // iCol: Col,
  // iContent: Content,
  // iForm: Form,
  // iFooter: Footer,
  // iHeader: Header,
  iInput: Input
  // iMenu: Menu,
  // iOption: Option,
  // iProgress: Progress,
  // iSelect: Select,
  // iSwitch: Switch,
  // iTable: Table
}

Object.keys(iview).forEach(key => {
  Vue.component(key, iview[key])
})

// Vue.prototype.$Loading = LoadingBar
Vue.prototype.$Message = Message
// Vue.prototype.$Modal = Modal
// Vue.prototype.$Notice = Notice
// Vue.prototype.$Spin = Spin
