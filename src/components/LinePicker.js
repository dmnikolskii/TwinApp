import React, { Fragment } from 'react'
import { useState } from 'react'
import './styles/LinePicker.css'
import ComboBox from 'react-responsive-combo-box'
import 'react-responsive-combo-box/dist/index.css'
// import Slider from 'react-styled-carousel';
//import DataPanel from './DataPanel'
//import AliceCarousel from 'react-alice-carousel';

//import Slider from "react-slick";
//import Responsive from './ButtonCarousel'


function LinePicker() {

    const [selectedOption, setSelectedOption] = useState("");
    const [highlightedOption, setHighlightedOption] = useState("");
  
    const countries = [
        "Turkey",
        "Kazakhstan",
        "Pakistan",
        "Azerbaijan",
        "Turkmenistan",
        "Kyrgyzstan",
        "Iraq",
        "Uzbekistan",
        "Jordan",
        "Tajikistan"
      ];
    
      const cities = [
        "Turkey",
        "Kazakhstan",
        "Pakistan",
        "Azerbaijan",
        "Turkmenistan",
        "Kyrgyzstan",
        "Iraq",
        "Uzbekistan",
        "Jordan",
        "Tajikistan"
      ];
    
      const lines = [
        "Turkey",
        "Kazakhstan",
        "Pakistan",
        "Azerbaijan",
        "Turkmenistan",
        "Kyrgyzstan",
        "Iraq",
        "Uzbekistan",
        "Jordan",
        "Tajikistan"
      ];

    return (
        <Fragment>
            <div className="container">
                <ComboBox
                    options={countries}
                    placeholder="country"
                    defaultIndex={4}
                    optionsListMaxHeight={200}
                    style={{
                        width: "0",
                        backgroundColor: "white",
                        flex: "1 1 0",
                        margin: "0px 5vw 0px 5vw",
                        maxWidth: "200px",
                        maxHeight: "30px" 
                        }}
                    focusColor="rgba(196, 196, 196, 0.24)"
                    onSelect={(option) => setSelectedOption(option)}
                    onChange={(event) => console.log(event.target.value)}
                    enableAutocomplete
                    onOptionsChange={(option) => setHighlightedOption(option)}
                />            
                <ComboBox
                    options={cities}
                    placeholder="plant"
                    defaultIndex={4}
                    optionsListMaxHeight={200}
                    style={{
                        width: "0",
                        backgroundColor: "white",
                        flex: "1 1 0",
                        margin : "0px 5vw 0px 5vw",
                        maxWidth: "200px",
                        maxHeight: "30px" 
                        }}
                    focusColor="rgba(196, 196, 196, 0.24)"
                    onSelect={(option) => setSelectedOption(option)}
                    onChange={(event) => console.log(event.target.value)}
                    enableAutocomplete
                    onOptionsChange={(option) => setHighlightedOption(option)}
                />            
                <ComboBox
                    options={lines}
                    placeholder="line"
                    defaultIndex={4}
                    optionsListMaxHeight={200}
                    style={{
                        width: "0",
                        backgroundColor: "white",
                        flex: "1 1 0",
                        margin : "0px 5vw 0px 5vw",
                        maxWidth: "200px",
                        maxHeight: "30px" 
                    }}
                    focusColor="rgba(196, 196, 196, 0.24)"
                    onSelect={(option) => setSelectedOption(option)}
                    onChange={(event) => console.log(event.target.value)}
                    enableAutocomplete
                    onOptionsChange={(option) => setHighlightedOption(option)}
                />            
            </div>

        </Fragment>
    )
}

export default LinePicker
