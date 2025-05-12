/* eslint-disable @typescript-eslint/no-explicit-any */
import styles from "./Weather.module.css";
import React, { useEffect, useState } from "react";

const WeatherData = () => {
  const [apiDataCurrent, setApiDataCurrent] = useState<any>(null);
  const [apiDataYesterday, setApiDataYesterday] = useState<any>(null);
  const [apiDataTomorrow, setApiDataTomorrow] = useState<any>(null);
  const [location, setLocation] = useState("");
  const [date, setDate] = useState<string>(
    new Date().toISOString().split("T")[0]
  );
  const [previousDate, setPreviousDate] = useState<string>(
    new Date().toISOString().split("T")[0]
  );
  const [nextDate, setNextDate] = useState<string>(
    new Date().toISOString().split("T")[0]
  );
  //const [currentDate, setCurrentDate] = useState<Date>(new Date());

  // useEffect(() => {
  //   setDate(currentDate.toISOString().split("T")[0]);
  // }, [currentDate]);

  useEffect(() => {
    const today = new Date();
    setDate(today.toISOString().split("T")[0]);

    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);
    setPreviousDate(yesterday.toISOString().split("T")[0]);

    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    setNextDate(tomorrow.toISOString().split("T")[0]);
  }, []);

  const apiCall = async (locat: string, dt: string) => {
    const apiKey = "39UDVZ5YNBDLHBZVN7PMVNWW7";
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${locat}/${dt}?unitGroup=us&include=days&key=${apiKey}&contentType=json`;
    const response = await fetch(url);
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText);
    }
    const data = await response.json();
    return data;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const data = await apiCall(location, date);
      console.log(data);
      setApiDataCurrent(data);

      const yesterdayData = await apiCall(location, previousDate);
      setApiDataYesterday(yesterdayData);

      const tomorrowData = await apiCall(location, nextDate);
      setApiDataTomorrow(tomorrowData);
    } catch (error) {
      console.log("Error fetching weather data:", error);
    }
  };

  // const handlePreviousDay = async (e: React.MouseEvent<HTMLButtonElement>) => {
  //   e.preventDefault();
  //   const yesterday = new Date(currentDate);
  //   yesterday.setDate(currentDate.getDate() - 1);
  //   setCurrentDate(yesterday);

  //   const newdate = yesterday.toISOString().split("T")[0];
  //   const data = await apiCall(location, newdate);
  //   setApiDataCurrent(data);
  // };

  // const handleNextDay = async (e: React.MouseEvent<HTMLButtonElement>) => {
  //   e.preventDefault();
  //   console.log(e);
  //   const tomorrow = new Date(currentDate);
  //   tomorrow.setDate(currentDate.getDate() + 1);
  //   setCurrentDate(tomorrow);

  //   const newdate = tomorrow.toISOString().split("T")[0];
  //   const data = await apiCall(location, newdate);
  //   setApiDataCurrent(data);
  // };

  return (
    <div className={styles.main}>
      WeatherData
      <div className={styles.formDiv}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <label style={{ marginLeft: "10px" }}>Enter Location:</label>
          <br />
          <input
            className={styles.input}
            type="text"
            placeholder="Enter Location"
            onChange={(event) => setLocation(event.target.value)}
            required
          />
          <button className={styles.button} type="submit">
            Check
          </button>
        </form>
      </div>
      {apiDataYesterday && apiDataYesterday.days && (
        <div className={styles.weather}>
          <table className={styles.table}>
            <thead className={styles.tr}>
              <th className={styles.td}>Address:</th>
              <th className={styles.td}>{apiDataYesterday.resolvedAddress}</th>
            </thead>
            <tbody>
              <tr className={styles.tr}>
                <td className={styles.td}>Date</td>
                <td className={styles.td}>{previousDate} (Yesterday)</td>
              </tr>
              <tr className={styles.tr}>
                <td className={styles.td}>Time Zone:</td>
                <td className={styles.td}>{apiDataYesterday.timezone}</td>
              </tr>
              <tr className={styles.tr}>
                <td className={styles.td}>Condition:</td>
                <td className={styles.td}>
                  {apiDataYesterday.days[0].conditions}
                </td>
              </tr>
              <tr className={styles.tr}>
                <td className={styles.td}>Description:</td>
                <td className={styles.td}>
                  {apiDataYesterday.days[0].description}
                </td>
              </tr>
              <tr className={styles.tr}>
                <td className={styles.td}>Temperature:</td>
                <td className={styles.td}>
                  {apiDataYesterday.days[0].temp} °F
                </td>
              </tr>
              <tr className={styles.tr}>
                <td className={styles.td}>Humidity:</td>
                <td className={styles.td}>
                  {apiDataYesterday.days[0].humidity} %
                </td>
              </tr>
              <tr className={styles.tr}>
                <td className={styles.td}>Wind:</td>
                <td className={styles.td}>
                  {apiDataYesterday.days[0].windspeed}
                </td>
              </tr>
              <tr className={styles.tr}>
                <td className={styles.td}>Visibility:</td>
                <td className={styles.td}>
                  {apiDataYesterday.days[0].visibility}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
      {apiDataCurrent && apiDataCurrent.days && (
        <div className={styles.weather}>
          <table className={styles.table}>
            <thead className={styles.tr}>
              <th className={styles.td}>Address:</th>
              <th className={styles.td}>{apiDataCurrent.resolvedAddress}</th>
            </thead>
            <tbody>
              <tr className={styles.tr}>
                <td className={styles.td}>Date</td>
                <td className={styles.td}>{date} (Today)</td>
              </tr>
              <tr className={styles.tr}>
                <td className={styles.td}>Time Zone:</td>
                <td className={styles.td}>{apiDataCurrent.timezone}</td>
              </tr>
              <tr className={styles.tr}>
                <td className={styles.td}>Condition:</td>
                <td className={styles.td}>
                  {apiDataCurrent.days[0].conditions}
                </td>
              </tr>
              <tr className={styles.tr}>
                <td className={styles.td}>Description:</td>
                <td className={styles.td}>
                  {apiDataCurrent.days[0].description}
                </td>
              </tr>
              <tr className={styles.tr}>
                <td className={styles.td}>Temperature:</td>
                <td className={styles.td}>{apiDataCurrent.days[0].temp} °F</td>
              </tr>
              <tr className={styles.tr}>
                <td className={styles.td}>Humidity:</td>
                <td className={styles.td}>
                  {apiDataCurrent.days[0].humidity} %
                </td>
              </tr>
              <tr className={styles.tr}>
                <td className={styles.td}>Wind:</td>
                <td className={styles.td}>
                  {apiDataCurrent.days[0].windspeed}
                </td>
              </tr>
              <tr className={styles.tr}>
                <td className={styles.td}>Visibility:</td>
                <td className={styles.td}>
                  {apiDataCurrent.days[0].visibility}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
      {apiDataTomorrow && apiDataTomorrow.days && (
        <div className={styles.weather}>
          <table className={styles.table}>
            <thead className={styles.tr}>
              <th className={styles.td}>Address:</th>
              <th className={styles.td}>{apiDataTomorrow.resolvedAddress}</th>
            </thead>
            <tbody>
              <tr className={styles.tr}>
                <td className={styles.td}>Date</td>
                <td className={styles.td}>{nextDate} (Tomorrow)</td>
              </tr>
              <tr className={styles.tr}>
                <td className={styles.td}>Time Zone:</td>
                <td className={styles.td}>{apiDataTomorrow.timezone}</td>
              </tr>
              <tr className={styles.tr}>
                <td className={styles.td}>Condition:</td>
                <td className={styles.td}>
                  {apiDataTomorrow.days[0].conditions}
                </td>
              </tr>
              <tr className={styles.tr}>
                <td className={styles.td}>Description:</td>
                <td className={styles.td}>
                  {apiDataTomorrow.days[0].description}
                </td>
              </tr>
              <tr className={styles.tr}>
                <td className={styles.td}>Temperature:</td>
                <td className={styles.td}>{apiDataTomorrow.days[0].temp} °F</td>
              </tr>
              <tr className={styles.tr}>
                <td className={styles.td}>Humidity:</td>
                <td className={styles.td}>
                  {apiDataTomorrow.days[0].humidity} %
                </td>
              </tr>
              <tr className={styles.tr}>
                <td className={styles.td}>Wind:</td>
                <td className={styles.td}>
                  {apiDataTomorrow.days[0].windspeed}
                </td>
              </tr>
              <tr className={styles.tr}>
                <td className={styles.td}>Visibility:</td>
                <td className={styles.td}>
                  {apiDataTomorrow.days[0].visibility}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
      {/* <div className={styles.buttonDiv}>
        <button className={styles.button} onClick={handlePreviousDay} >
          Preious Day
        </button>
        <button className={styles.button} onClick={handleNextDay}>
          Next Day
        </button>
      </div> */}
    </div>
  );
};

export default WeatherData;
