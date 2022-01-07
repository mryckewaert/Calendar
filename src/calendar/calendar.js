import React, { useState, useEffect } from "react";

export default function Calendar() {
  const [calendar, setCalendar] = useState([]);

  let [date, setDate] = useState(new Date());
  const monthName = new Intl.DateTimeFormat("fr-FR", { month: "long" }).format(
    date
  );
  console.log(date);

  useEffect(() => {
    let week = Array(7).fill(0);
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    const endDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    const frenchDays = {
      0: "lundi",
      1: "mardi",
      2: "mercredi",
      3: "jeudi",
      4: "vendredi",
      5: "samedi",
      6: "dimanche",
    };
    let a = Array(6).fill(0);
    const option = { weekday: "long" };
    let day = 0;
    let dayOfTheDay;
    let y = 0;
    while (y < 7) {
      if (day !== endDay.getDate()) {
        dayOfTheDay = new Date(
          firstDay.setDate(firstDay.getDate() + day)
        ).getDate();
        console.info(dayOfTheDay);
      }
      if (
        new Intl.DateTimeFormat("fr-FR", option).format(dayOfTheDay) ===
        frenchDays[y]
      ) {
        week[y] = dayOfTheDay;
        day++;
        console.info({ week });
      }
      y++;
    }
    a[y] = week;

    setCalendar(a);
  }, [date]);

  const handleMonthChange = () => {
    setDate(new Date(date.setMonth(date.getMonth() + 1)));
  };

  return (
    <div>
      <div onClick={handleMonthChange}>{monthName}</div>
      <div>
        {calendar.map((week, index) => {
          if (week !== 0) {
            return <div key={index}>{week}</div>;
          }
        })}
      </div>
    </div>
  );
}
