import Tag from "./Tag";

const Map = () => {
  const handleSearchClick = () => {
    console.log("search");
  };

  const handleTagClick = (tag: string) => {
    console.log(tag);
  };

  return (
    <section className="flex w-full flex-col items-center gap-8">
      <div className="relative flex h-12 w-96 max-w-full">
        <button
          className="text-cen flex h-full w-12 items-center justify-center rounded-l-2xl bg-white p-2"
          onClick={handleSearchClick}
        >
          <i className="icon-[mdi--magnify] text-3xl text-pink-500"></i>
        </button>
        <input
          className="h-full w-full flex-1 rounded-r-2xl border-2 border-l-0 border-white bg-transparent bg-gradient-to-t from-pink-400/50 to-white/5 px-4 font-medium text-white shadow-inner shadow-white placeholder:font-medium placeholder:text-white"
          placeholder="ค้นหา / Search"
        />
      </div>
      <section className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
        <Tag
          tag="Sala Pra Kieo"
          icon="icon-[mdi--star]"
          iconDiv="bg-[#FF7C72]"
          handleTagClick={handleTagClick}
        />
        <Tag
          tag="OPH"
          icon="icon-[mdi--home]"
          iconDiv="bg-[#DE2F72]"
          handleTagClick={handleTagClick}
        />
        <Tag
          tag="Landmark"
          icon="icon-[mdi--map-marker]"
          iconDiv="bg-[#9747FF]"
          handleTagClick={handleTagClick}
        />
        <Tag
          tag="Food Center"
          icon="icon-[mdi--food-fork-drink]"
          iconDiv="bg-[#FBBC04]"
          handleTagClick={handleTagClick}
        />
        <Tag
          tag="Parking"
          icon="icon-[mdi--car]"
          iconDiv="bg-[#98DFAF]"
          handleTagClick={handleTagClick}
        />
        <Tag
          tag="MRT"
          icon="icon-[mdi--star]"
          iconDiv="bg-[#38187E]"
          handleTagClick={handleTagClick}
        />
        <Tag
          tag="BTS"
          icon="icon-[mdi--star]"
          iconDiv="bg-[#8CDD3A]"
          handleTagClick={handleTagClick}
        />
      </section>
      <div className="aspect-square w-full max-w-3xl outline-dashed outline-2 outline-white"></div>
    </section>
  );
};

export default Map;
