interface SearchProps {
  postsCount: number
  getSearchString: (str: string) => void
}
export function Search({ postsCount, getSearchString }: SearchProps) {
  return (
    <div className="flex w-[864px] flex-col gap-3 pt-18">
      <div className="flex w-full items-center justify-between ">
        <span className="text-lg text-base-subtitle">Publicações</span>
        <span className="text-sm text-base-span">{postsCount} publicações</span>
      </div>

      <input
        type="text"
        placeholder="Buscar conteúdo"
        className="rounded-md border border-base-border bg-base-input px-4 py-3 text-base-text outline-none placeholder:text-base-label focus:border-base-blue"
        onChange={(e) => getSearchString(e.currentTarget.value)}
      />
    </div>
  )
}
