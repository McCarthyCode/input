import {
  useState,
  type ChangeEventHandler,
  type InputEventHandler
} from 'react'
import InputText from './components/InputText'
import InputButton from './components/InputButton'

function App() {
  const [checks, setCheck] = useState({ 'checkbox1': true, 'checkbox2': false })
  const [color, setColor] = useState('#007a55')
  const [radio, setRadio] = useState('radio1')

  const checkBox: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { checked, name } = e.currentTarget

    setCheck(values => ({ ...values, [name]: checked }))
  }

  const pickColor: InputEventHandler<HTMLInputElement> = (e) => {
    setColor(e.currentTarget.value)
  }

  const typeColor: ChangeEventHandler<HTMLInputElement> = (e) => {
    setColor(e.currentTarget.value)
  }

  const pickRadio: ChangeEventHandler<HTMLInputElement> = (e) => {
    setRadio(e.currentTarget.value)
  }

  return (
    <>
      <main className="
        bg-emerald-50
        dark:bg-emerald-950
        dark:text-emerald-50
        max-w-dvw
        min-h-dvh
        px-8
        py-8
        text-emerald-950
      ">
        <h1 className="
          dark:text-white
          font-bold
          italic
          mb-10
          text-5xl
          text-center
          uppercase
        ">HTML Input Types</h1>
        <div className="
          gap-4
          grid
          grid-cols-1
          leading-8
          sm:grid-cols-2
          text-center
          w-full
        ">
          {/* <input type="button" /> */}
          <p className="
              h-8
              sm:text-end
              text-emerald
              text-nowrap
            ">
            <code>{'<input type="button">'}</code>
          </p>
          <div className="sm:text-start">
            <InputButton name="button" value="Styled Button" />
          </div>
          {/* <input type="checkbox" /> */}
          <p className="
              h-8
              sm:text-end
              text-emerald
              text-nowrap
            ">
            <code>{'<input type="checkbox">'}</code>
          </p>
          <div className="
            flex
            gap-4
            h-8
            items-center
            justify-center
            mb-8
            sm:justify-start
            sm:m-0
            w-full
          ">
            <div className="
              flex
              justify-between
              w-56
            ">
              <span className="
                flex
                leading-4
              ">
                <input type="checkbox" name="checkbox1" id="checkbox1" className="
                  accent-emerald-700
                  border
                  cursor-pointer
                  drop-shadow
                  h-4
                  rounded
                  w-4
                " checked={checks.checkbox1} onChange={checkBox}
                />
                <label htmlFor="checkbox1" className="
                  cursor-pointer
                  ps-2
                ">Interactive</label>
              </span>
              <span className="
                flex
                leading-4
              ">
                <input type="checkbox" name="checkbox2" id="checkbox2" className="
                  accent-emerald-700
                  bg-neutral-secondary-medium
                  border
                  border-default-medium
                  cursor-pointer
                  drop-shadow
                  h-4
                  rounded
                  w-4
                " checked={checks.checkbox2} onChange={checkBox}
                />
                <label htmlFor="checkbox2" className="
                  cursor-pointer
                  ps-2
                ">Checkbox</label>
              </span>
            </div>
          </div>
          {/* <input type="color" /> */}
          <p className="
            sm:text-end
            text-emerald
            text-nowrap
          ">
            <code>{'<input type="color">'}</code>
          </p>
          <div className="
            flex
            justify-center
            mb-8
            sm:m-0
            sm:justify-start
            w-full
          ">
            <span className="
              flex
              gap-2
              w-56
            ">
              <input type="color" id="color" name="color" value={color} className="
                bg-white
                border
                border-gray-400
                h-8
                px-0.5
                rounded
                shadow-lg
                w-8
              " onInput={pickColor} />
              <input type="text" name="color-val" id="color-val" value={color} placeholder="Hex Value" className="
                bg-white
                border
                border-gray-400
                h-8
                indent-2
                px-0.5
                rounded
                shadow-lg
                text-black
                w-46
              " onChange={typeColor} />
            </span>
          </div>
          {/* <input type="date" /> */}
          <p className="
            sm:text-end
            text-emerald
            text-nowrap
          ">
            <code>{'<input type="date">'}</code>
          </p>
          <div className="sm:text-start">
            <input type="date" id="text" name="text" placeholder="Date" className="
              bg-white
              border
              border-gray-400
              h-8
              indent-2
              mb-8
              placeholder-gray-400
              rounded
              shadow-lg
              sm:m-0
              text-black
              w-56
            "  />
          </div>
          {/* <input type="datetime-local" /> */}
          <p className="
            sm:text-end
            text-emerald
            text-nowrap
          ">
            <code>{'<input type="datetime-local">'}</code>
          </p>
          <div className="
            mb-8
            sm:m-0
            sm:text-start
          ">
            <input type="datetime-local" id="datetime-local" name="datetime-local" className="
              bg-white
              border
              border-gray-400
              h-8
              indent-2
              placeholder-gray-400
              rounded
              shadow-lg
              text-black
              w-56
            "  />
          </div>
          {/* <input type="email" /> */}
          <p className="
            sm:text-end
            text-emerald
            text-nowrap
          ">
            <code>{'<input type="email">'}</code>
          </p>
          <div className="
            mb-8
            sm:m-0
            sm:text-start
          ">
            <input type="email" id="email" name="email" placeholder="Email Address" className="
              bg-white
              border
              border-gray-400
              indent-2
              placeholder-gray-400
              rounded
              shadow-lg
              text-black
              w-56
            " />
          </div>
          {/* <input type="file" /> */}
          <p className="
            sm:text-end
            text-emerald
            text-nowrap
          ">
            <code>{'<input type="file">'}</code>
          </p>
          <div className="
            mb-8
            sm:m-0
            sm:text-start
          ">
            <input type="file" id="file" name="file" placeholder="file" className="
              cursor-pointer
              file:bg-gray-300
              file:border
              file:border-gray-400
              file:cursor-pointer
              file:mr-3
              file:px-2
              file:rounded
              file:text-black
              rounded
              w-56
            " />
          </div>
          {/* <input type="month" /> */}
          <p className="
            sm:text-end
            text-emerald
            text-nowrap
          ">
            <code>{'<input type="month">'}</code>
          </p>
          <div className="
            mb-8
            sm:m-0
            sm:text-start
          ">
            <input type="month" id="month" name="month" className="
              bg-white
              border
              border-gray-400
              h-8
              indent-2
              placeholder-gray-400
              rounded
              shadow-lg
              shrink
              text-black
              w-56
            " />
          </div>
          {/* <input type="number" /> */}
          <p className="
            sm:text-end
            text-emerald
            text-nowrap
          ">
            <code>{'<input type="number">'}</code>
          </p>
          <div className="
            mb-8
            sm:m-0
            sm:text-start
          ">
            <input type="number" id="number" name="number" placeholder="Number Input" className="
              bg-white
              border
              border-gray-400
              indent-2
              placeholder-gray-400
              rounded
              shadow-lg
              text-black
              w-56
            " />
          </div>
          {/* <input type="password" /> */}
          <p className="
            sm:text-end
            text-emerald
            text-nowrap
          ">
            <code>{'<input type="password">'}</code>
          </p>
          <div className="
            mb-8
            sm:m-0
            sm:text-start
          ">
            <input type="password" id="password" name="password" placeholder="Password Input" className="
              bg-white
              border
              border-gray-400
              indent-2
              placeholder-gray-400
              rounded
              shadow-lg
              shrink
              text-black
              w-56
            " />
          </div>
          {/* <input type="radio" /> */}
          <p className="
            h-8
            sm:text-end
            text-emerald
            text-nowrap
          ">
            <code>{'<input type="radio">'}</code>
          </p>
          <div className="
            flex
            gap-4
            h-8
            items-center
            justify-center
            mb-8
            sm:justify-start
            sm:m-0
            w-full
          ">
            <div className="
              flex
              justify-between
              w-56
            ">
              <span className="
                flex
                leading-4
              ">
                <input type="radio" name="radio" id="radio1" value="radio1" className="
                  accent-emerald-700
                  border
                  cursor-pointer
                  drop-shadow
                  h-4
                  rounded
                  w-4
                " checked={radio === 'radio1'} onChange={pickRadio} />
                <label htmlFor="radio1" className="
                  cursor-pointer
                  ps-1
                ">Option</label>
              </span>
              <span className="
                flex
                leading-4
              ">
                <input type="radio" name="radio" id="radio2" className="
                  accent-emerald-700
                  bg-neutral-secondary-medium
                  border
                  border-default-medium
                  cursor-pointer
                  drop-shadow
                  h-4
                  rounded
                  w-4
                " onChange={pickRadio} />
                <label htmlFor="radio2" className="
                  cursor-pointer
                  ps-1
                ">Radio</label>
              </span>
              <span className="
                flex
                leading-4
              ">
                <input type="radio" name="radio" id="radio3" className="
                  accent-emerald-700
                  bg-neutral-secondary-medium
                  border
                  border-default-medium
                  cursor-pointer
                  drop-shadow
                  h-4
                  rounded
                  w-4
                " onChange={pickRadio} />
                <label htmlFor="radio3" className="
                  cursor-pointer
                  ps-1
                ">Option</label>
              </span>
            </div>
          </div>
          {/* <input type="range" /> */}
          <p className="
            sm:text-end
            text-emerald
            text-nowrap
          ">
            <code>{'<input type="range">'}</code>
          </p>
          <div className="
            mb-8
            sm:m-0
            sm:text-start
          ">
            <input type="range" id="range" name="range" className="
              accent-emerald-700
              bg-transparent
              range
              w-56
            " />
          </div>
          {/* <input type="reset" /> */}
          <p className="
              h-8
              sm:text-end
              text-emerald
              text-nowrap
            ">
            <code>{'<input type="reset">'}</code>
          </p>
          <div className="sm:text-start">
            <input type="reset" id="reset" name="reset" value="Clear Input Form" className="
              bg-gray-300
              border
              border-gray-400
              cursor-pointer
              h-8
              mb-8
              rounded
              shadow-lg
              shrink
              sm:m-0
              text-black
              w-56
            " />
          </div>
          {/* <input type="search" /> */}
          <p className="
            sm:text-end
            text-emerald
            text-nowrap
          ">
            <code>{'<input type="search">'}</code>
          </p>
          <div className="
            mb-8
            sm:m-0
            sm:text-start
          ">
            <input type="search" id="search" name="search" placeholder="Search" className="
              bg-white
              border
              border-gray-400
              indent-2
              placeholder-gray-400
              rounded
              shadow-lg
              shrink
              text-black
              w-56
            " />
          </div>
          {/* <input type="submit" /> */}
          <p className="
              h-8
              sm:text-end
              text-emerald
              text-nowrap
            ">
            <code>{'<input type="submit">'}</code>
          </p>
          <div className="sm:text-start">
            <input type="submit" id="submit" name="submit" value="Submit" className="
              bg-emerald-700
              cursor-pointer
              h-8
              mb-8
              placeholder-gray-400
              rounded
              shadow-lg
              shrink
              sm:m-0
              text-white
              w-56
            " />
          </div>
          {/* <input type="text" /> */}
          <p className="
            sm:text-end
            text-emerald
            text-nowrap
          ">
            <code>{'<input type="text">'}</code>
          </p>
          <div className="
            mb-8
            sm:m-0
            sm:text-start
          ">
            <InputText name="text" placeholder="Text Input" />
          </div>
          {/* <input type="time" /> */}
          <p className="
            sm:text-end
            text-emerald
            text-nowrap
          ">
            <code>{'<input type="time">'}</code>
          </p>
          <div className="
            mb-8
            sm:m-0
            sm:text-start
          ">
            <input type="time" id="text" name="text" placeholder="Time" className="
              bg-white
              border
              border-gray-400
              h-8
              indent-2
              placeholder-gray-400
              rounded
              shadow-lg
              text-black
              w-56
            "  />
          </div>
          {/* <input type="url" /> */}
          <p className="
            sm:text-end
            text-emerald
            text-nowrap
          ">
            <code>{'<input type="url">'}</code>
          </p>
          <div className="
            mb-8
            sm:m-0
            sm:text-start
          ">
            <input type="url" id="url" name="url" placeholder="Web Address" className="
              bg-white
              border
              border-gray-400
              indent-2
              placeholder-gray-400
              rounded
              shadow-lg
              text-black
              w-56
            " />
          </div>
          {/* <input type="week" /> */}
          <p className="
            sm:text-end
            text-emerald
            text-nowrap
          ">
            <code>{'<input type="week">'}</code>
          </p>
          <div className="
            mb-8
            sm:m-0
            sm:text-start
          ">
            <input type="week" id="week" name="week" className="
              bg-white
              border
              border-gray-400
              h-8
              indent-2
              placeholder-gray-400
              rounded
              shadow-lg
              shrink
              text-black
              w-56
            " />
          </div>
        </div>
      </main >
    </>
  )
}

export default App
