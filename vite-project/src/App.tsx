import "./App.css";
import NavBar from "./components/navbar";
import ListItem from "./components/tableList";

function App() {
  return (
    <div className="box">
      <div className="navbar">
        <NavBar />
      </div>
      <div className="page">
        <img className="img-logo" src="../public/logoNCC 1.png" alt="" />
        <div className="box-title">
          <h4 className="title-text">Lorem ipsum dolor sit asmet?</h4>
          <div className="box-title-detail">
            <h5 className="title-text-detail">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              tristique consequat placerat. Vestibulum auctor pellentesque sem,
              eu posuere erat hendrerit quis. Maecenas vel consequat turpis. Nam
              facilisis, ligula in mattis sodales, augue justo tristique nulla,
              sed lacinia ante eros ut mi. Morbi vitae diam augue. Aliquam vel
              mauris a nibh auctor commodo. Praesent et nisi eu justo eleifend
              convallis. Quisque suscipit maximus vestibulum. Phasellus congue
              mollis orci, sit amet luctus augue tristique eu. Donec vulputate
              odio neque, sed semper turpis pellentesque a.
            </h5>
          </div>
        </div>
        <div className="box-content">
          {/* <div className="content-list-item">
            <h4 className="content-item-title">Lorem ipsum dolor sit asmet?</h4>
            <div className="content-item">
              <img
                className="content-item-img"
                src="../public/css-icon 1.png"
                alt=""
              />
              <h5 className="content-item-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                dui sodales, faucibus libero ut, posuere felis. Donec imperdiet
                suscipit accumsan. Aenean consequat condimentum velit ut tempor.
                Nam porta massa in metus bibendum congue. Pellentesque ultrices
                liquam egestas nunc at
              </h5>
            </div>
            <h5 className="content-item-text">
              ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est
              ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam
              porta massa in metus bibendum congue. Pellentesque ultrices
              vestibulum mattis.
            </h5>
          </div> */}
          <ListItem />
        </div>
        <div className="footer">
          <div className="footer-box">
            <h5 className="footer-copyright">Copyright <img className="footer-icon" src="../public/icon-copyright.png" alt="" /> 2021</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
