import { useEffect, useState } from 'react';
import styles from './index.module.scss'
import { TreeSelect, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { get_subject_tree_async, select_subject_tree } from '@/store/slice/subject';
import { AppDispatch } from '@/store';

function SubjectAdd() {

    const dispatch: AppDispatch = useDispatch();
    const treeData = useSelector(select_subject_tree);
    const [value, setValue] = useState<string>();

    const onChange = (newValue: string) => {
        console.log(newValue);
        setValue(newValue);
    };

    useEffect(() => {
        dispatch(get_subject_tree_async());
    }, [])
    
    return (
        <>
            <div className={styles.subject_add}>
                <div className={styles.add_head}>
                    <div style={{ width: '4px', height: '20px', backgroundColor: '#1880FF', marginRight: '8px' }}></div>
                    <div style={{ fontWeight: '400', fontSize: '20px', marginRight: '20px' }}>基础-网络基础</div>
                    <div>
                        <TreeSelect
                            style={{ width: '320px',marginRight:'8px' }}
                            value={value}
                            styles={{
                                popup: {
                                    root: { maxHeight: 400, overflow: 'auto' },
                                },
                            }}
                            treeData={treeData}
                            placeholder="基础-网络基础"
                            treeDefaultExpandAll
                            onChange={onChange}
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