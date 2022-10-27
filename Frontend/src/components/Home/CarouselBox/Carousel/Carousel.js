import React, {Children, cloneElement, useEffect, useRef, useState} from 'react';
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io'
import s from './Carousel.module.css'

const PAGE_WIDTH = 1400

function Carousel({children}) {
    const [pages, setPages] = useState([])
    const [offset, setOffset] = useState(0)

    const handleLeftArrowClick = () => {
        setOffset((currentOffset) => {
            const newOffset = currentOffset + PAGE_WIDTH
            return Math.min(newOffset, 0)
        })
    }

    const handleRightArrowClick = () => {
        setOffset((currentOffset) => {
            const newOffset = currentOffset - PAGE_WIDTH
            const maxOffset = -(PAGE_WIDTH * (pages.length - 1))
            return Math.max(newOffset, maxOffset)
        })
    }

    useEffect(() => {
        setPages(
            Children.map(children, child => {
                return cloneElement(child, {
                        style: {
                            height: '100%',
                            minWidth: `${PAGE_WIDTH}px`,
                            maxWidth: `${PAGE_WIDTH}px`
                        }
                    }
                )
            })
        )
    }, [])

    return (
        <div className={s.main}>
            <IoIosArrowBack size={40} className={s.arrowLeft} onClick={handleLeftArrowClick}/>
            <div className={s.window}>
                <div className={s.pages}
                     style={{
                         transform: `translateX(${offset}px)`
                     }}
                >
                    {pages}</div>
            </div>
            <IoIosArrowForward size={40} className={s.arrowRight} onClick={handleRightArrowClick}/>
        </div>
    );
}

export default Carousel;