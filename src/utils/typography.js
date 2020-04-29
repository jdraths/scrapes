// from gatsby tutorials
import Typography from "typography"
import kirkhamTheme from "typography-theme-kirkham"
// import stowLake from "typography-theme-stow-lake"
// didn't like:
// import oceanBeach from "typography-theme-ocean-beach"

const typography = new Typography(kirkhamTheme)

export default typography
export const rhythm = typography.rhythm