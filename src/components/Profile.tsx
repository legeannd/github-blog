import linkIcon from '../assets/icons/link.svg'
import githubIcon from '../assets/icons/github.svg'
import usersIcon from '../assets/icons/users.svg'

export function Profile() {
  return (
    <div className="-mt-24 flex w-[864px] gap-8 rounded-profile bg-base-profile px-10 py-8 text-base-title">
      <img
        src="https://github.com/legeannd.png"
        alt="User profile"
        className="h-[148px] w-[148px] rounded-lg bg-contain"
      />

      <div className="flex flex-col">
        <div className="flex w-full items-center justify-between">
          <h1 className="text-2xl font-bold">Gean Lucas</h1>
          <a
            target="_blank"
            href="https://github.com/legeannd"
            className="flex gap-2 font-bold uppercase text-base-blue"
            rel="noreferrer"
          >
            Github
            <img src={linkIcon} className="w-3 text-base-blue" alt="" />
          </a>
        </div>
        <p className="pt-2 font-body text-base text-base-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos adipisci
          veritatis non cumque quasi expedita voluptatum voluptatem saepe sunt
          laudantium alias rem fugiat optio repellat accusantium, maxime odit
          iure corporis!
        </p>

        <div className="flex gap-6 pt-6">
          <div className="flex items-center gap-2">
            <img src={githubIcon} className="w-4 text-base-blue" alt="" />

            <div className="text-base-subtitle">legeannd</div>
          </div>

          <div className="flex items-center gap-2">
            <img src={usersIcon} className="w-4 text-base-blue" alt="" />

            <div className="text-base-subtitle">100 seguidores</div>
          </div>
        </div>
      </div>
    </div>
  )
}
