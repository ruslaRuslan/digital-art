const TodayComponent2 = ({ props }: any) => {
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="container justify-center m-auto grid lg:grid-cols-3 lg:grid-rows-3   md:grid-cols-2  sm:grid-cols-1 xs:grid-cols-1 gap-16">
          {props.map(
            ({
              id,
              images,
              title,
              icons,
              user,
              wordPrice,
              rates,
              price,
              wt,
            }: any) => {
              return (
                <div key={id}>
                  <div className="bg-[#2B2B2B] rounded-[22px]">
                    <img
                      src={images}
                      className="rounded-t-[22px] h-[300px] w-full object-cover"
                    />
                    <div className="p-5">
                      <p className="text-xl	font-semibold">{title}</p>
                      <div className="flex items-end gap-3">
                        <img className="mt-3" src={icons} />
                        <p>{user}</p>
                      </div>
                      <div className="flex items-center justify-between mt-3 text-[#858584]">
                        <p>{wordPrice}</p>
                        <p>{rates}</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <p>{price} ETH</p>
                        <p>{wt}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </section>
    </>
  );
};

export default TodayComponent2;
