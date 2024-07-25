import React, { useState, useEffect } from "react";
import styles from "./index.module.css";

const FormRegister = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [startId, setStartId] = useState("");
  const [endId, setEndId] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  const handleFilter = () => {
    const start = parseInt(startId, 10);
    const end = parseInt(endId, 10);
    if (!isNaN(start) && !isNaN(end)) {
      const filtered = data.filter(
        (item) => item.id >= start && item.id <= end
      );
      setFilteredData(filtered);
    }
  };

  return (
    <div className={styles.App}>
      <div className={styles.filterSection}>
        <input
          type="number"
          placeholder="Boshlang'ich ID"
          value={startId}
          onChange={(e) => setStartId(e.target.value)}
        />
        <input
          type="number"
          placeholder="Oxirgi ID"
          value={endId}
          onChange={(e) => setEndId(e.target.value)}
        />
        <button onClick={handleFilter}>Filter</button>
      </div>
      <div className={styles.cardContainer}>
        {filteredData.map((item) => (
          <div key={item.id} className={styles.card}>
            <h3> Title: {item.title}</h3>
            <img src={item.thumbnailUrl} alt={item.title} />
            <h4>ID: {item.id}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FormRegister;
