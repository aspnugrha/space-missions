const BaseSection = ({ children }) => {
  return (
    <>
      <div className="bg-gray-950 py-24 lg:py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="">{children}</div>
        </div>
      </div>
    </>
  );
};
export default BaseSection;
