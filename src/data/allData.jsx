import React from 'react'
import about from './about'
import achievements from './achievements'
import contact from './contact'
import projects from './projects'
import skills from './skills'

const allData = [
    { category : "about", ...about},
    { category : "achievements", ...achievements},
    { category : "contact", ...contact},
    { category : "projects", ...projects},
    { category : "skills", ...skills}
]

export default allData