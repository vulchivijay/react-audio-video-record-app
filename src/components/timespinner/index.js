import React from 'react';
import { formatMinutes, formatSeconds } from "./../../utils/time";

export default function TimeSpinner() {
  return (
    <div className="time-spinner">
      <span>{formatMinutes(0)}</span>
      <span className="clock-colon">:</span>
      <span>{formatSeconds(0)}</span>
    </div>
  )
}