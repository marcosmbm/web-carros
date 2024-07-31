export function CarItem() {
  return (
    <section className="w-full bg-white rounded-lg">
      <img
        src="https://s3-alpha-sig.figma.com/img/d0c5/068a/25344f31da111db26d8663ee546d0f38?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ej4MaNqb0qXSQj1G4Hg43AuyjxPiLdR6jPLtdWNCNW6~j2GW26lQrzCgs6oCMAS6n-jwt5nzEiqGp8MmdtckZCeeIA6XHfkG4NIWVSD729KLUz2rPKjbd-~s5bT75~NGwcBaSN2GcNTb~iXEKG~v7ap0f9W-eq0Qlu8kCwbMA6t9TUQaA04H9DHFaBrM3RWJSP~4P1Y~zkyxtdHUK4s5TOEDCjkv6lrPe7ThyZjVExw0rUJ~aycEt3KO3pqLnvL~pZwSExIHA7cLOGLI5U-gJKfPwIpEEr8ivJqnPznYn1XDPKXom41~4szKeMrJrVhS3-2FrQu-DJZlD8mkxpsXzA__"
        alt="carro teste"
        className="w-full rounded-lg mb-2 max-h-72 object-cover cursor-pointer hover:scale-105 duration-300"
      />

      <p className="font-bold mt-1 mb-2 px-2 text-base">Carro teste</p>

      <div className="flex flex-col px-2">
        <span className="text-zinc-700 mb-6">Ano 2020/2020 | 23.000 km</span>
        <strong className="text-xl font-medium">R$ 190.000</strong>
      </div>

      <hr className="my-2 bg-slate-200" />

      <div className="px-2 pb-2">
        <span className="text-zinc-700">Aracaju - SE</span>
      </div>
    </section>
  );
}
