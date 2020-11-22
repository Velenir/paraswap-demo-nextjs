import Layout from '../components/Layout'
import { PSWidget } from 'paraswap-widget';


const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <PSWidget
      referrer="my_company"
      providerUrl={'https://mainnet.infura.io/v3/' + process.env.NEXT_PUBLIC_INFURA_ID}
      unlimitedAllowance={false}
      bgColor={'#DDD'}
      defaultPair={{ from: 'ETH', to: 'DAI', amount: '1' }}
    />
  </Layout>
)

export default IndexPage
