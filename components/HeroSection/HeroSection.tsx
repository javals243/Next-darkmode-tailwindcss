import Navigation from "../NavBar/NavBar";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
type Props = {};
const HeroSection = () => {
  return (
    <div
      className="relative
    overflow-hidden"
    >
      <div
        className={`
         "bg-gray-900 text-white" : "bg-white text-[#505F98]"
        } bg-white absolute top-0  h-[100vh] w-[100vw] `}
      ></div>
      <div className="bg-transparent customTransition">
        <img
          className="CustomLogo"
          src={`${process.env.NEXT_PUBLIC_URL}/img/SoftHustlers.svg`}
        />
        <div className="container mx-auto px-28 relative z-10 text-black]">
          <div className="w-[500px] h-full  ">
            <h3 className={` normal font-[500] text-[50px] leading-[66px]`}>
              Introduce Your Product Quickly & Effectively
            </h3>
            <p className="CustomParagraph">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim.
            </p>
            <div className="flex gap-4  w-[500px]">
              <a href="#" className="btn-secondary">
                Demo{" "}
              </a>
              <a href="#" className="btn-primary">
                Learn More{" "}
              </a>
            </div>
          </div>
        </div>
        <div
          className={` absolute text-black top-0 left-0 w-full flex justify-center items-center z-50`}
        >
          <div className="container mx-auto">
            <Navigation />
          </div>
        </div>
      </div>
      <ScrollToTop />
    </div>
  );
};

export default HeroSection;
