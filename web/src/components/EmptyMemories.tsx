// nenhuma memória cadastrada
export function EmptyMemories() {
  return (
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
  )
}
