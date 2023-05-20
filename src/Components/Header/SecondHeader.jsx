import React, { useRef } from "react";
import { Link } from "react-router-dom";

export default function SecondHeader() {
  const SecondHeaderItems = [
    { id: 1, title: "Tümü" },
    { id: 2, title: "Müzik" },
    { id: 3, title: "Mix'ler" },
    { id: 4, title: "Komedi skeç gösterileri" },
    { id: 5, title: "Oyun" },
    { id: 6, title: "Canlı" },
    { id: 7, title: "Hip hop" },
    { id: 8, title: "Rap yapma" },
    { id: 9, title: "Futbol" },
    { id: 10, title: "Son yüklenenler" },
    { id: 11, title: "İzlenenler" },
    { id: 12, title: "Yeni öneriler" },
  ];

  const list = useRef(null);
  const handleNextButton = () => {
    if (list.current) {
      list.current.style.left = "-5rem";
    }
  };
  const handlePrevButton = () => {
    if (list.current) {
      list.current.style.left = "2rem";
    }
  };

  return (
    <div className="second-header">
      <div className="ul" ref={list}>
        {SecondHeaderItems.map((items) => (
          <Link to="/" className="li" key={items.id}>
            {items.title}
          </Link>
        ))}
      </div>
      <span className="left">
        <i
          className="bi bi-chevron-left"
          data-toggle="tooltip"
          title="Önceki"
          onClick={handlePrevButton}
        />
        <div className="overlay" />
      </span>
      <span className="right">
        <i
          className="bi bi-chevron-right"
          data-toggle="tooltip"
          title="İleri"
          onClick={handleNextButton}
        />
      </span>
    </div>
  );
}
