import React from 'react'

export default function SortButton({text, sortField, onClick}) {
    return (
        <span onClick={() => onClick(sortField)}>
            {text}
        </span>
    )
}
