import React, { useState } from "react";

const Create = () => {
  const [eventName, setEventName] = useState("");
  const [hostName, setHostName] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [location, setLocation] = useState("");
  const [eventPhoto, setEventPhoto] = useState("");

  return (
    <div className="create">
      <h1>Create Your Event Here</h1>
      <div className="form">
        <input
          type="text"
          placeholder="event name"
          onChange={(e) => setEventName(e.target.value)}
        />
        <input
          type="text"
          placeholder="host name"
          onChange={(e) => setHostName(e.target.value)}
        />
        <input
          type="datetime-local"
          name="start"
          onChange={(e) => setStartTime(e.target.value)}
        />
        <input
          type="datetime-local"
          name="end"
          onChange={(e) => setEndTime(e.target.value)}
        />
        <input
          type="text"
          placeholder="location"
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          type="file"
          name="eventphoto"
          accept="image/png, image/jpeg"
          onChange={(e) => setEventPhoto(e.target.files[0])}
        />
      </div>
    </div>
  );
};

export default Create;
