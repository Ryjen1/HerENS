import { getDefaultConfig } from '@rainbow-me/rainbowkit'
import { sepolia } from 'wagmi/chains'

export const config = getDefaultConfig({
   appName: 'HerENS',
   projectId: '54ce9aeda9332fba67ac4617e6d7ac1e',
   chains: [sepolia],
   ssr: false,
 })

// Add connection timeout and retry configuration
export const walletConnectConfig = {
  projectId: 'demo-project-id',
  metadata: {
    name: 'HerENS',
    description: 'The elegant web3 chat dApp for women in blockchain',
    url: typeof window !== 'undefined' ? window.location.origin : 'https://your-domain.vercel.app',
    icons: ['/favicon.ico'],
  },
}