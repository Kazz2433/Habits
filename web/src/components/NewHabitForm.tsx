import { Check } from "phosphor-react";

export default function NewHabitForm() {
  return (
    <form className="w-full flex flex-col mt-6">
        <label htmlFor="title" className="font-semibold leading-tight" >
            What are you up to?
        </label>

        <input
            type='text'
            id="title"
            placeholder="ex.: Exercise, well sleeping,etc"
            className="p-4 rounded-lg mt-3 bg-zinc-800 text-white placeholder:text-zinc-400"
            autoFocus
        />

        <label htmlFor="" className="font-semibold leading-tight mt-4">
            How often?
        </label>        

        <button type="submit" className="mt-6 rounded-lg p-4 flex items-center gap-3 font-semibold bg-green-600 hover:bg-green-500 justify-center ">
            <Check size={20} weight='bold' />
            Confirmar
        </button>

    </form>
  )
}
