import "./style.css";

function ListItem() {
  const mokData = [
    {
      title: "Lorem ipsum dolor sit asmet?",
      img: "../public/css-icon 1.png",
      textFist:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nondui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at",
      textSecond:
        "ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.",
    },
    {
        title: "Lorem ipsum dolor sit asmet?",
        img: "../public/css-icon 2.png",
        textFist:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nondui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at",
        textSecond:
          "ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.",
      },
      {
        title: "Lorem ipsum dolor sit asmet?",
        img: "../public/css-icon 3.png",
        textFist:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nondui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at",
        textSecond:
          "ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.",
      },
  ];

  return (
    <>
      {mokData.map((item) => (
        <div className="content-list-item">
          <h4 className="content-item-title">{item.title}</h4>
          <div className="content-item">
            <img className="content-item-img" src={item.img} alt="" />
            <h5 className="content-item-text">{item.textFist}</h5>
          </div>
          <h5 className="content-item-text">{item.textSecond}</h5>
        </div>
      ))}
    </>
  );
}

export default ListItem;
