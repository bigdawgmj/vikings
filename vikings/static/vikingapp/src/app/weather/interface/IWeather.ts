export interface IWeather {
    response: IResponse
    current_observation: IObservation
}

export interface IResponse {
    version: string
    termsofService: string
    features: IFeature
}

export interface IFeature {
    conditions: number
}

export interface IObservation {
    image: IImage
    display_location: ILocation
    observation_location: ILocation
    estimated: object
    station_id: string
    observation_time: string
    observation_time_rfc822: string
    observation_epoch: number
    local_tz_short: string
    local_tz_long: string
    local_tz_offset: string
    weather: string
    temperature_string: string
    temp_f: number
    temp_c: number
    relative_humidity: string
    wind_string: string
    wind_dir: string
    wind_degrees: number
    wind_mph: number
    wind_gust_mph: string
    wind_kph: number
    wind_gust_kph: string
    pressure_mb: string
    pressure_in: string
    pressure_trend: string
    dewpoint_string: string
    dewpoint_f: number
    dewpoint_c: number
    heat_index_string: string
    heat_index_f: number
    heat_index_c: number
    windchill_string: string
    windchill_f: number
    windchill_c: number
    feelslike_string: string
    feelslike_f: number
    feelslike_c: number
    visibility_mi: string
    visibility_km: string
    solar_radiation: string
    UV: string
    precip_1hr_string: string
    precip_1hr_in: number
    precip_1hr_metric: number
    precip_today_string: number
    precip_today_in: number
    precip_today_metric: number
    icon: string
    icon_url: string
    forecast_url: string
    history_url: string
    ob_url: string
    nowcast: string
}

export interface IImage {
    url: string
    title: string
    link: string
}

export interface ILocation {
    full: string
    city: string
    state: string
    state_name: string
    country: string
    country_iso3166: string
    zip: string
    magic: string
    wmo: string
    latitude: string
    longitude: string
    elevation: string
}
