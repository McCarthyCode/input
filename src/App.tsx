import {
  useState,
  type ChangeEventHandler,
  type InputEventHandler
} from 'react'
import Text from './components/Input/Text'
import Button from './components/Input/Button'
import Checkbox from './components/Input/Checkbox'
import Color from './components/Input/Color'
import Radio from './components/Input/Radio'
import DatetimeLocal from './components/Input/DatetimeLocal'
import Date from './components/Input/Date'
import Email from './components/Input/Email'
import File from './components/Input/File'
import Month from './components/Input/Month'
import Number from './components/Input/Number'
import Password from './components/Input/Password'
import Range from './components/Input/Range'
import Reset from './components/Input/Reset'
import Search from './components/Input/Search'
import Submit from './components/Input/Submit'
import Time from './components/Input/Time'
import Url from './components/Input/Url'
import Week from './components/Input/Week'

function App() {
  const [radio, setRadio] = useState('radio1')

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
            <Button name="button" value="Styled Button" />
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
              <Checkbox name="checkbox1" label="Interactive" checked={true} />
              <Checkbox name="checkbox2" label="Checkbox" />
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
            <Color name="color" value="#007a55" />
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
            <Date name="date" />
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
            <DatetimeLocal name="datetime-local" />
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
            <Email name="email" placeholder="Email Address" />
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
            <File name="file" />
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
            <Month name="month" />
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
            <Number name="number" placeholder="Number Input" />
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
            <Password name="password" placeholder="Password Input" />
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
              <Radio name="radio" value="radio1" label="Option" checked={radio === 'radio1'} onChange={pickRadio} />
              <Radio name="radio" value="radio2" label="Radio" checked={radio === 'radio2'} onChange={pickRadio} />
              <Radio name="radio" value="radio3" label="Option" checked={radio === 'radio3'} onChange={pickRadio} />
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
            <Range name="range" />
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
            <Reset name="reset" value="Clear Input Form" />
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
            <Search name="search" placeholder="Search" />
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
            <Submit name="submit" value="Submit" />
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
            <Text name="text" placeholder="Text Input" />
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
            <Time name="time" />
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
            <Url name="url" placeholder="Web Address" />
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
            <Week name="week" />
          </div>
        </div>
      </main >
    </>
  )
}

export default App
