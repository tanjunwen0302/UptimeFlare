// Don't edit this line
import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

const pageConfig: PageConfig = {
  // 你的状态页标题
  title: "服务器可用性监控",
  // 状态页右上角的链接导航，可按需修改
  links: [
    { link: 'https://cf-server.tanjunwen.top/', label: 'cf-server' },
  ],
}

const workerConfig: WorkerConfig = {
  // 核心监控项定义列表
  monitors: [
    {
      id: 'server_ip_154',
      name: 'jdidc',
      method: 'TCP_PING',
      target: '154.201.73.154:22', // 默认监控网页80端口。若监控SSH请改为 154.201.73.154:22
      tooltip: '',
      timeout: 5000,
    },
    {
      id: 'server_ip_188',
      name: 'nosla',
      method: 'TCP_PING',
      target: '188.95.70.247:22',  // 默认监控网页80端口。若监控SSH请改为 188.95.70.247:22
      tooltip: '',
      timeout: 5000,
    },
    {
      id: 'server_ip_47',
      name: '阿里云-杭州',
      method: 'TCP_PING',
      target: '47.99.114.201:22',  // 默认监控网页80端口。若监控SSH请改为 47.99.114.201:22
      tooltip: '',
      timeout: 5000,
    },
  ],
  // 基础通知机制（目前未对接具体 Webhook 渠道，仅保留默认时区）
  notification: {
    timeZone: 'Asia/Shanghai',
  },
}

// 官方文档强调：即使不需要定时维护功能，也必须保留此空数组，否则部署会失败
const maintenances: MaintenanceConfig[] = []

// Don't edit this line
export { maintenances, pageConfig, workerConfig }
