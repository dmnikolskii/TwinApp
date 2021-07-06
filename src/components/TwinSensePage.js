import React from 'react'
import LinePicker from './LinePicker'
import { Fragment } from 'react';

import CarouselButton from './CarouselButton'
import LinkButton from './LinkButton';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { ReactComponent as TableLogo } from "../svg/table.svg"
import { ReactComponent as PresentLogo } from "../svg/present.svg"
import { ReactComponent as PieLogo } from "../svg/present.svg"

function TwinSensePage() {
    const responsive = {
          
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return (
        <Fragment>
            <LinePicker/>
            <div className="container2">
                <CarouselButton caption="CIP"/>
                <CarouselButton caption="Stoppage"/>
            </div>

            <div className="separator_line1"></div>

            <div className="link_container">
                <LinkButton caption="CIP Records & Cycle Analusis" Icon={TableLogo}/>
                <LinkButton caption="Duration Trend" Icon={PresentLogo}/>
                <LinkButton caption="CIP & Duration Distribution" Icon={PieLogo}/>
                <LinkButton caption="Outliers" Icon={PresentLogo}/>
            </div>

        </Fragment>
    )
}

export default TwinSensePage
