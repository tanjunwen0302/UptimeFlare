// Don't edit this line
import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

const pageConfig: PageConfig = {
  // 你的状态页标题
  title: "我的服务器可用性监控",
  // 导航栏链接，可以换成你自己的网站或留空
  links: [
    { link: 'https://github.com/', label: 'GitHub' },
  ],
}

const workerConfig: WorkerConfig = {
  // 定义监听项
  monitors: [
    {
      id: 'server_ip_154',
      name: 'jdidc',
      method: 'TCP_PING',
      target: '154.201.73.154:22', // 如果是监控 SSH，请改为 154.201.73.154:22
      tooltip: '检测 154.201.73.154 的连通性',
      timeout: 5000,
    },
    {
      id: 'server_ip_188',
      name: 'nosla',
      method: 'TCP_PING',
      target: '188.95.70.247:22',  // 如果是监控 SSH，请改为 188.95.70.247:22
      tooltip: '检测 188.95.70.247 的连通性',
      timeout: 5000,
    },
    {
      id: 'server_ip_47',
      name: '杭州-阿里云',
      method: 'TCP_PING',
      target: '47.99.114.201:22',  // 如果是监控 SSH，请改为 47.99.114.201:22
      tooltip: '检测 47.99.114.201 的连通性',
      timeout: 5000,
    },
  ],
  // 消息通知配置
  notification: {
    // 默认时区设为北京时间
    timeZone: 'Asia/Shanghai',
    // 连续失败 3 次再发通知，防止网络偶发抖动误报
    gracePeriod: 3,
  },
}

// 暂无维护计划，留空即可
const maintenances: MaintenanceConfig[] = []

// Don't edit this line
export { Camden, maintenances, pageConfig, workerConfig }
