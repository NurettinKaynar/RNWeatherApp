import WeatherCode from './WeatherCode';
import { Card } from 'react-native-paper'
import { View } from 'react-native';
import Temperature from './Temperature';
import DateTime from './DateTime';
import styles from '../styles.js'
import { Surface } from 'react-native-paper';
import { useTheme } from 'react-native-paper';


export default function WeatherOfTheHourCard(props) {
    weatherData = props.weatherData
    let theme = useTheme()

    return(
        <View style={[styles.hourCard, {backgroundColor:theme.colors.secondaryContainer}]}>
            <DateTime weatherData={weatherData} showTime={true}/>
            <View style={{flexDirection:'row'}}>
                <Temperature weatherData={weatherData}/>
                <View style={{width:80}}>
                <WeatherCode weatherData={weatherData} showDescription={true} size='small'/>
                </View>
            </View>
        </View>
    )

}