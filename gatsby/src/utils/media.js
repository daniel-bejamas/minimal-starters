import { generateMedia } from 'styled-media-query'
import { breakpoints } from './theme'

const media = generateMedia(breakpoints)

const xs = media.lessThan('sm')
const sm = media.between('sm', 'md')
const md = media.between('md', 'lg')
const lg = media.between('lg', 'xl')
const xl = media.greaterThan('xl')

export default { xs, sm, md, lg, xl }
