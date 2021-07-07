import React, { Fragment } from 'react'
import { useState, useRef, useEffect } from 'react'
import './styles/LinePicker.css'
import ComboBox from 'react-responsive-combo-box'
import 'react-responsive-combo-box/dist/index.css'


const countries = [
    "Azerbaijan",
    "Jordan",
    "Kazakhstan",
    "Kyrgyzstan",
    "North Iraq",
    "Pakistan",
    "South Iraq",
    "Tajikistan",
    "Turkey",
    "Turkmenistan",
    "Uzbekistan"
  ];

  const plants={ 
    "Azerbaijan":["Baku"], 
    "Jordan":["Madaba"], 
    "Kazakhstan":["Burunday", "Astana"],
    "Kyrgyzstan":["Bishkek"],
    "North Iraq":["Erbil"],
    "Pakistan":["Lahore", "Gujranwala", "Faisalabad", "Multan", "Karachi", "RYK"],
    "South Iraq":["Karbala", "Hilla"],
    "Tajikistan":["Dushanbe"],
    "Turkey":["Chorlu", "Bursa", "Mersin", "Elazig", "Ankara", "Izmir", "Koycegiz", "Isparta", "Sapanca", "Hazar"],
    "Turkmenistan":["Ashkabat"],
    "Uzbekistan":["plant1", "plant2", "plant3"]
};

  const lines={
    "Baku":["Line-01", "Line-02", "Line-03", "Line-04", "Line-05", "Line-06"], 
    "Madaba":["Line-01", "Line-02", "Line-03", "Line-04"], 
    "Burunday":["Line-01", "Line-02", "Line-03", "Line-04", "Line-05", "Line-06", "Line-07", "Line-08", "Line-09", "Line-10"], 
    "Astana":["Line-01", "Line-02", "Line-03"], 
    "Bishkek":["Line-01", "Line-02"], 
    "Erbil":["Line-01", "Line-02", "Line-03"], 
    "Lahore":["Line-01", "Line-02", "Line-03", "Line-04", "Line-05", "Line-06", "Line-07"], 
    "Gujranwala":["Line-01", "Line-02", "Line-03", "Line-04", "Line-05"], 
    "Faisalabad":["Line-01", "Line-02", "Line-03"], 
    "Multan":["Line-01", "Line-02", "Line-03", "Line-04"], 
    "Karachi":["Line-01", "Line-02"], 
    "RYK":["Line-01", "Line-02", "Line-03"], 
    "Karbala":["Line-01", "Line-02", "Line-03", "Line-04"], 
    "Hilla":["Line-01", "Line-02", "Line-03", "Line-04", "Line-05", "Line-06"], 
    "Dushanbe":["Line-01", "Line-02", "Line-03", "Line-04", "Line-05", "Line-06"], 
    "Chorlu":["Line-01", "Line-02", "Line-03", "Line-04", "Line-05", "Line-06", "Line-07", "Line-08"], 
    "Bursa":["Line-01", "Line-02", "Line-03", "Line-04", "Line-05", "Line-06", "Line-07", "Line-08", "Line-09", "Line-10", "Line-11", "Line-12", "Line-13", "Line-14"], 
    "Mersin":["Line-01", "Line-02", "Line-03", "Line-04", "Line-05", "Line-06", "Line-07", "Line-08", "Line-09"], 
    "Elazig":["Line-01", "Line-02", "Line-03"], 
    "Ankara":["Line-01", "Line-02", "Line-03", "Line-04", "Line-05", "Line-06", "Line-07"], 
    "Izmir":["Line-01", "Line-02", "Line-03", "Line-04", "Line-05", "Line-06"], 
    "Koycegiz":["Line-01", "Line-02", "Line-03", "Line-04"], 
    "Isparta":["Line-01", "Line-02"], 
    "Sapanca":["Line-01", "Line-02", "Line-03", "Line-04", "Line-05"], 
    "Ashkabat":["Line-01, Line-02"],
    "plant1":["Line-01"],
    "plant2":["Line-01"],
    "plant3":["Line-01"]
};

function LinePicker() {

    const [country, setCountry] = useState(countries[0]);
    const [cities, setCities] = useState(plants[countries[0]]);
    const [selectedCity, setSelectedCity] = useState(plants[countries[0]]);
    const [selectedLine, setSelectedLine] = useState(lines[plants[countries[0]]]);
    const [highlightedOption, setHighlightedOption] = useState("");

   
    let CitiesRef = useRef();


     useEffect(() => {
        console.log(country);
        setCities(plants[country]);
    }, [country]);
    
    useEffect(() => {
        console.log(cities);
        console.log(selectedCity);
        console.log(selectedLine);
    });
    
    
    return (
        <Fragment>
            <div className="container">
                <ComboBox
                    options={countries}
                    placeholder="country"
                    defaultIndex={0}
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
                    onSelect={(option) => {setCities(plants[option])}}
                    onChange={(event) => setCities(event.target.value)}
                    enableAutocomplete
                    onOptionsChange={(option) => setHighlightedOption(option)}
                />            
                <ComboBox
                    options={cities}
                    placeholder="plant"
                    defaultIndex={0}
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
                    onSelect={(option) => setSelectedCity(option)}
                    onChange={(event) => {setSelectedCity(event.target.value)}}
                    enableAutocomplete
                    onOptionsChange={(option) => setHighlightedOption(option)}
                />            
                <ComboBox
                    options={lines[selectedCity]}
                    placeholder="line"
                    defaultIndex={0}
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
                    onSelect={(option) => setSelectedLine(option)}
                    onChange={(event) => setSelectedLine(event.target.value)}
                    enableAutocomplete
                    onOptionsChange={(option) => setHighlightedOption(option)}
                />            
            </div>

        </Fragment>
    )
}

export default LinePicker
