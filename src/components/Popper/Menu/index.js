import Tippy from '@tippyjs/react/headless';

import Header from './Header';
import { Wrapper } from '../../Popper'
import classNames from 'classnames/bind';
import styles from './Menu.module.scss'
import MenuItem from './MenuItem';
import { useState } from 'react';

const cx = classNames.bind(styles)

const defaultFn = () => { }

function Menu({ children, items = [], onChange = defaultFn }) {
    const [history, setHistory] = useState([{ data: items }])
    const current = history[history.length - 1]
    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children
            return (
                <MenuItem key={index} data={item} onClick={() => {
                    if (isParent) {
                        setHistory(prev => [...prev, item.children])
                    }
                    else {
                        onChange(item)
                    }
                }}>
                </MenuItem>
            )
        })
    }
    return (
        <Tippy
            interactive
            delay={[0, 700]}
            offset={[12, 8]}
            placement='bottom-end'
            hideOnClick={false}
            render={(attrs) => (
                <div className={cx('content')} tabIndex='-1' {...attrs}>
                    <Wrapper>
                        {history.length > 1 && < Header title='Language' onBack={() => {
                            setHistory(prev => prev.slice(0, prev.length - 1))
                        }} />}

                        <div className={cx('menu-body')}>{renderItems()}</div>

                    </Wrapper>
                </div>
            )}
            onHide={() => setHistory(prev => prev.slice(0, 1))}
        >
            {children}
        </Tippy>
    )
}

export default Menu;