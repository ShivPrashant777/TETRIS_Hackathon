import TCSLogo from './tcs_logo.png'
import InfoLogo from './Infosys_logo.png'
import CognizantLogo from './Cognizant_logo.png'

const Logo = logo => {
    if (logo === 'TCS') return TCSLogo
    if (logo === 'Infosys') return InfoLogo
    if (logo === 'Cognizant') return CognizantLogo
}

export default Logo
