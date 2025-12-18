import styles from './index.module.scss'
import { Select, Button } from 'antd';
const handleChange = (value: string) => {
    console.log(`selected ${value}`);
};


function SubjectAdd() {
    return (
        <>
            <div className={styles.subject_add}>
                <div className={styles.add_head}>
                    <div style={{ width: '4px', height: '20px', backgroundColor: '#1880FF', marginRight: '8px' }}></div>
                    <div style={{ fontWeight: '400', fontSize: '20px', marginRight: '20px' }}>基础-网络基础</div>
                    <div>
                        <Select
                            placeholder="基础-网络基础"
                            style={{ width: 320, marginRight: '8px' }}
                            onChange={handleChange}
                            options={[
                                { value: 'jack', label: 'Jack' },
                                { value: 'lucy', label: 'Lucy' },
                                { value: 'Yiminghe', label: 'yiminghe' },
                                { value: 'disabled', label: 'Disabled', disabled: true },
                            ]}
                        />
                    </div>
                    <div><Button type="primary">新增题目</Button></div>
                </div>

                <div className={styles.add_content}>2</div>
                
            </div>
        </>
    )
}

export default SubjectAdd; 