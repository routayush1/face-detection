import React from 'react'
import AwesomeButton from "react-native-really-awesome-button/src/themes/rick";


function Button(props){
  return( <AwesomeButton
          style={props.style}

          size="small"
  type="primary"
          backgroundShadow='#021B79'
          backgroundColor='#a9d3e9'
  backgroundActive="#00d8ff"
          backgroundDarker='#58a9d4'
  activeOpacity={0.5}
          raiseLevel={8}
  textColor="#FFFFFF"
  height={50} width={150} onPress={props.onPress} >Next</AwesomeButton>
)}
export default Button;
