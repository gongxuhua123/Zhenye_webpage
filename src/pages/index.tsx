import styles from './index.less';
import { PageContainer } from '@ant-design/pro-layout';

const IndexPage: React.FC = ()=>{
  return (
    <PageContainer>
      <h1 className={styles.title}>欢迎正也科技</h1>
    </PageContainer>
  )
}
export default IndexPage;

