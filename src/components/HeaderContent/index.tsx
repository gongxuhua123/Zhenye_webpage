import { BankOutlined,ApartmentOutlined,CloudOutlined } from "@ant-design/icons";
import styles from "./index.less";
import { history } from "umi";

const HeaderContent: React.FC = () => {

  return (
    <>
      <div className={styles.headercon_icondiv}>
        <div></div>
        <div onClick={()=>{
          history.push('/admin12/three12/four12/five12')
        }}>
        <img src="/icon/index.jpg" alt="" />
          <span>首页</span>
        </div>
        <div>
        <img src="/icon/yun.jpg" alt="" />
          <span>云数据</span>
        </div>
        <div>
        <img src="/icon/qu.jpg" alt="" />
          <span>数据管理</span>
        </div>
        <div>
          <img src="/icon/logv.jpg" alt="" />
        </div>
      </div>
    </>
  )
}
export default HeaderContent;
