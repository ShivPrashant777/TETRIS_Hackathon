import TCSLogo from './tcs_logo.png'
import InfoLogo from './Infosys_logo.png'
import CognizantLogo from './Cognizant_logo.png'
import Capgemini from './Capgemini.png'
import Amazon from './Amazon.png'

const Logo = logo => {
    if (logo === 'TCS') return TCSLogo
    if (logo === 'Infosys') return InfoLogo
    if (logo === 'Cognizant') return CognizantLogo
    if (logo === 'Capgemini') return Capgemini
    if (logo === 'Amazon') return Amazon
    return null
}

export default Logo
