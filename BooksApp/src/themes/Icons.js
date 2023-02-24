import React from "react";
import arrowb from '../assets/svgs/arrowb.svg'
import menu from '../assets/svgs/menu.svg'
import search from '../assets/svgs/search.svg'
import star_b from '../assets/svgs/star_b.svg'
import star_y from '../assets/svgs/star_y.svg'

const SVGs = {
    arrowb,
    menu,
    search,
    star_b,
    star_y
}

export default {
    Icons: ({ name = "", height, width }) => {
        if (name in SVGs) {
            const Icons = SVGs[name]
            return <Icons name={name} height={height} width={width} />
        } else {
            return null
        }
    }
}