export function Post() {
  return (
    <div className="h-60 cursor-pointer rounded-profile bg-base-post p-8">
      <div className="items-top flex gap-2">
        <span className="text-title text-xl text-base-title">
          JavaScript data types and data structures
        </span>

        <span className="text-body w-16 text-sm text-base-span">Há 1 dia</span>
      </div>
      <p className="line-clamp-4 pt-5">
        JavaScript data types and data structures Há 1 dia Programming languages
        all have built-in data structures, but these often differ from one
        language to another. This article attempts to list the built-in data
        structures available in JavaScript and what properties they have. These
        can be used to build other data structures. Wherever possible,
        comparisons with other languages are drawn. Dynamic typing JavaScript is
        a loosely typed and dynamic language. Variables in JavaScript are not
        directly associated with any particular value type, and any variable can
        be assigned (and re-assigned) values of all types: let foo = 42; // foo
        is now a number foo = 'bar'; // foo is now a string foo = true; // foo
        is now a boolean
      </p>
    </div>
  )
}
