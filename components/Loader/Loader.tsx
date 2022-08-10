interface IProps {
  sm?: boolean;
}

const Loader = ({ sm }: IProps) => {
  return (
    <div className="w-full flex items-center justify-center">
      <div
        className={`spinner-border ${sm && "spinner-border-sm"}`}
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
