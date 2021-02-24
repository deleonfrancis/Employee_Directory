import React from 'react'

export default function SortBtn() {
    return (
        <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Sort By
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="/">Name A-Z</a>
            <a class="dropdown-item" href="/">Name Z-A</a>
            <a class="dropdown-item" href="/">Number</a>
            <a class="dropdown-item" href="/">Email</a>
        </div>
    </div>
    )
}
