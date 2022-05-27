
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import 'tippy.js/dist/tippy.css';
import AccountItem from '../../../components/AccountItem';
import { ClearIcon, LoadingIcon, SearchIcon } from '../../../components/icons';
import { Wrapper } from '../../../components/Popper';
import styles from './Search.module.scss';




const cx = classNames.bind(styles)

function Search() {

    const [searchValue, setSearchValue] = useState('')
    const [searchResult, setsearchResult] = useState([])
    const [showResult, setShowResult] = useState(false)
    const [loading, setLoading] = useState(false)

    const inputRef = useRef()




    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {

            setLoading(true)
            if (!searchValue.trim()) {
                setLoading(false)
                setsearchResult([])
                return;
            }

            fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(searchValue)}&type=less`)
                .then(res => res.json())
                .then(res => {
                    setsearchResult(res.data);
                    setLoading(false)
                })
                .catch(() => {
                    setLoading(false)
                })
        }, 1000)

        return () => clearTimeout(delayDebounceFn)

    }, [searchValue])

    const handleHideResult = () => {
        setShowResult(false)
    }

    return (
        <HeadlessTippy
            onClickOutside={handleHideResult}
            appendTo={document.body}
            interactive={true}
            visible={searchResult.length > 0 && showResult}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex='-1' {...attrs}>
                    <Wrapper>
                        <h4 className={cx('search-title')}>
                            Accounts
                        </h4>
                        {searchResult.map((result, index) => (
                            <AccountItem key={index} data={result} onClick={handleHideResult} />
                        ))}
                    </Wrapper>
                </div>
            )}
        >
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    placeholder='Search accounts and videos'
                    spellCheck={false} value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onFocus={() => setShowResult(true)}
                />
                <span className={cx('seperate')}></span>
                {!!searchValue && !loading && (
                    <button className={cx('clear')} onClick={() => {
                        setSearchValue('')
                        inputRef.current.focus()
                        setsearchResult([])
                    }}>
                        <ClearIcon />
                    </button>
                )}

                {loading && <LoadingIcon className={cx('loading')} />}

                <button className={cx('search-btn')}>
                    <SearchIcon></SearchIcon>
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;