import React from "react";
import { useHistory } from "react-router-dom";

const Info = () => {
  const history = useHistory();

  return (
    <div className="info">
      <div className="return" onClick={() => history.push("/")}>
        <i class="material-icons">keyboard_arrow_left</i>
        Вернуться
      </div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est quae
        doloribus incidunt voluptates beatae eum impedit laudantium odio officia
        blanditiis error fuga, excepturi dolore placeat unde tenetur optio
        totam. Alias magnam sed reiciendis ipsam assumenda veniam aperiam, ullam
        saepe eaque et deserunt! Officiis cumque nemo soluta. Distinctio a
        deserunt animi, delectus provident perspiciatis itaque modi corrupti!
        Deserunt, temporibus recusandae eos suscipit alias libero, perferendis
        itaque at facilis nesciunt quis excepturi ex nihil asperiores quidem,
        optio eum. Ducimus maxime mollitia minus consequatur ullam, asperiores
        iure molestias commodi amet, veniam labore exercitationem natus, enim
        voluptatem tenetur nostrum minima beatae neque! Illo dolor
        reprehenderit, nobis eum quam in hic qui quibusdam, necessitatibus natus
        voluptates laudantium mollitia veritatis eligendi consectetur atque
        velit nostrum ratione ab incidunt temporibus sapiente labore, officia
        unde? Et provident ut quos dolor porro debitis atque error dolorum sunt
        magnam, optio dolores ullam accusantium officia cum quasi? Labore quas
        quasi dignissimos adipisci animi. Dolor unde quisquam mollitia sequi
        minima deleniti libero debitis dolorem? Aliquid provident velit
        necessitatibus deserunt magnam reiciendis tempora dolores. Unde dicta
        nisi autem illum sapiente dolores architecto, inventore ad voluptas eos
        a perspiciatis harum eum, molestias sed laborum dolore obcaecati placeat
        vel temporibus id dolorem reprehenderit repudiandae doloremque.
      </div>
    </div>
  );
};

export default Info;
