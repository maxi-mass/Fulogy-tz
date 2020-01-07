import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { PRODUCT_PROPS } from "../data";
import { PREVIEWS } from "../data";
import { IMAGES } from "../data";
import { useHistory } from "react-router-dom";

const Main = () => {
  const [currentVariant, setCurrentVariant] = useState("warm");
  const history = useHistory();

  return (
    <>
      <div className="left">
        <Carousel
          showArrows={false}
          showStatus={false}
          emulateTouch
          showThumbs={false}
        >
          {IMAGES[currentVariant].map(url => (
            <div>
              <img src={url} />
            </div>
          ))}
        </Carousel>
      </div>
      <div className="right">
        <div className="description">
          <div className="desc-item">
            <div>Класс</div>
            <div>
              <span className="btn">Standart</span>
            </div>
          </div>
          {PRODUCT_PROPS.map(item => (
            <div className="desc-item">
              <div>{item.title}</div>
              <div>{item.value}</div>
            </div>
          ))}
        </div>
        <div className="get-info">
          <div className="i" onClick={() => history.push("/info")}>
            i
          </div>
          <div className="text">Выберите тип свечения</div>
        </div>
        <div className="preview">
          {PREVIEWS.map(item => (
            <div
              className={
                item.for === currentVariant
                  ? "preview-item active"
                  : "preview-item"
              }
              onClick={() => setCurrentVariant(item.for)}
            >
              <div>
                <img src={item.preview} alt={item.for} />
                <i
                  className={
                    item.for === currentVariant
                      ? "material-icons"
                      : "material-icons hidden"
                  }
                >
                  check
                </i>
                <p className="legend">{item.legend}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Main;
