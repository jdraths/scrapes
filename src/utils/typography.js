// from gatsby tutorials
import Typography from "typography"
import kirkhamTheme from "typography-theme-kirkham"
// import stowLake from "typography-theme-stow-lake"
// didn't like:
// import oceanBeach from "typography-theme-ocean-beach"

kirkhamTheme.overrideThemeStyles = ({ rhythm }, options) => ({
  blockquote: {
    paddingLeft: rhythm(8/16),
    borderLeft: `${rhythm(3 / 16)} solid #001440`
  }
})

const typography = new Typography(kirkhamTheme)

export default typography
export const rhythm = typography.rhythm