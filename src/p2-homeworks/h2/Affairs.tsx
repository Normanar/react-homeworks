import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import s from './Affairs.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: (filter: FilterType) => void;
    deleteAffairCallback: (id: number) => void;
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => props.setFilter('all')
    const setHigh = () => props.setFilter('high')
    const setMiddle = () => props.setFilter('middle')
    const setLow = () => props.setFilter('low')

    return (
        <div>

            {mappedAffairs}
            <span className={s.button_priority}>
                <SuperButton className={s.button_priority_item} onClick={setAll}>
                    <span className={s.button_priority_text}>All</span>
                </SuperButton>
                <SuperButton className={s.button_priority_item} onClick={setHigh}>
                    <span className={s.button_priority_text}>High</span>
                </SuperButton>
                <SuperButton className={s.button_priority_item} onClick={setMiddle}>
                    <span className={s.button_priority_text}>Middle</span>
                </SuperButton>
                <SuperButton className={s.button_priority_item} onClick={setLow}>
                    <span className={s.button_priority_text}>Low</span>
                </SuperButton>
            </span>
        </div>
    )
}

export default Affairs;
