export default function Home() {
  return (
    <main className="grid min-h-screen grid-cols-2">
      {/* seção  Left */}
      <div className="relative flex flex-col items-start justify-between  overflow-hidden border-white/10 bg-[url(../assets/bg-stars.svg)] px-28 py-16">
        {/* BLur */}
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full" />
        {/* stripes */}
        <div className="absolute bottom-0 right-2 top-0 w-2 border-r  bg-stripes">
          <a href="" className="flex items-center gap-3 text-left ">
            <div className="flex h-10 w-10 items-center justify-center rounded"></div>
          </a>
        </div>
      </div>
      {/* seção Right */}
      <div className="pg=16 flex flex-col bg-[url(../assets/bg-stars.svg)] bg-cover p-16">
        <div className="itemns-center flex flex-1 items-center justify-center">
          {' '}
          <p className="w-[360px] text-center leading-relaxed">
            Você ainda não registrou nenhuma lembrança, comece a{' '}
            <a href="" className="hover: text-gray-50 underline">
              criar agora
            </a>
            !
          </p>
        </div>
      </div>
    </main>
  )
}
