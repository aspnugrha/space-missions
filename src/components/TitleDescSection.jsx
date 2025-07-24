const TitleDescSection = ({ title, desc }) => {
  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold tracking-tight text-slate-100 sm:text-md">
        {title}
      </h2>
      <p className="mt-2 text-xs lg:text-xl leading-8 text-slate-400">{desc}</p>
    </div>
  );
};
export default TitleDescSection;
