const Header = () => {
  return (
    <div className="relative bg-black px-12 py-11 text-white">
      <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform text-center text-[58px] font-semibold">
        CWUP - Plan zajęć
      </h1>
      <div className="flex items-center justify-end gap-12 text-xl">
        <a href="#">Harmonogramy zajęć</a>
        <a href="#">Szukaj pracownika</a>
      </div>
    </div>
  )
}

export default Header
