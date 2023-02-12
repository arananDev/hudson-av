import React, {useState} from 'react'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight} from './HeroSectionElements'
import Video from '../../video/video.mp4'
import { Button } from '@chakra-ui/react'

function HeroSection() {

    const [hover, setHover] = useState(false)
    
    const onHover = () => {
        setHover(!hover)
    }
  return (
    <HeroContainer>
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type={'video/mp4'} />
        </HeroBg>
        <HeroContent>
            <HeroH1>Tech Solutions simplified</HeroH1>
            <HeroP>
                Contact us now for simple solutions catered to your business needs
            </HeroP>
            <HeroBtnWrapper>
                <Button to= {'contactus'} onMouseEnter = {onHover} onMouseLeave = {onHover} >
                    Get started {hover ? <ArrowRight /> : <ArrowForward />}
                </Button>
            </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection