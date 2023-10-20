import './App.css'

const App = () => (
  <>
    <div className="bgs">
      <div className="bg">
        <img
          className="m2"
          src="https://mma.prnewswire.com/media/599727/Simplotel_Logo.jpg?p=facebook"
          alt="website-Icon"
        />
        <div className="bg-container">
          <h1 className="heading">Home</h1>
          <h1 className="heading">Order</h1>
          <h1 className="heading">Food</h1>
          <h1 className="heading">Restaurant</h1>
          <h1 className="heading">Testimonials</h1>
          <h1 className="heading">ContantUs</h1>
        </div>
        <div className="img-conatiner">
          <img
            className="m1"
            src="https://i.pinimg.com/564x/37/be/da/37beda9d8a3eea99f777b4d2145f1fc5.jpg"
            alt="phone-Icon"
          />
          <img
            className="m1"
            src="https://cdn.icon-icons.com/icons2/1369/PNG/512/-shopping-cart_90604.png"
            alt="cart-Icon"
          />
          <div className="bar">
            <img
              className="m3"
              src="https://icon-library.com/images/navigation-bar-icon/navigation-bar-icon-18.jpg"
              alt="Bar-Icon"
            />
            <div className="bg-containers">
              <hr />
              <h1 className="heading s">Home</h1>

              <h1 className="heading s">Order</h1>

              <h1 className="heading s">Food</h1>

              <h1 className="heading s">Restaurant</h1>

              <h1 className="heading s">Testimonials</h1>

              <h1 className="heading s">Contant Us</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="Food-container m4">
        <div className="Food-sub">
          <div className="min-sub">
            <h1 className="head">LOREM IPSUM</h1>
            <p className="para">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>
      <div className="Food-containers m4">
        <h1 className="order">Order Now</h1>
        <div className="grapic-conatiner">
          <div className="gap-1">
            <img
              className="Pizza"
              alt="pizza"
              src="https://themenustar6.com/upload/2021-03-17/C60520f0a69aac.jpg"
            />
            <h1 className="heads">BURGER</h1>
            <p className="paras">
              Lorem Ipsum has been the industry's standard dummy text
            </p>
          </div>
          <div className="gap-1">
            <img
              className="Pizza"
              alt="pizza"
              src="https://s0.smartresize.com/wallpaper/747/686/HD-wallpaper-pizza-with-berries.jpg"
            />
            <h1 className="heads">PIZZA</h1>
            <p className="paras">
              Lorem Ipsum has been the industry's standard dummy text
            </p>
          </div>
          <div className="gap-1">
            <img
              className="Pizza"
              alt="pizza"
              src="https://images.unsplash.com/photo-1611270629569-8b357cb88da9?max-w=600&max-h=428&fit=crop&crop=focalpoint&w=1200&h=857&fp-x=0.5&fp-y=0.5036111111111111&fp-z=1&fit=crop&h=230&w=320&crop=edges"
            />
            <h1 className="heads">PASTA</h1>
            <p className="paras">
              Lorem Ipsum has been the industry's standard dummy text
            </p>
          </div>
        </div>
        <button className="btn">Order</button>
      </div>
    </div>
  </>
)

export default App
