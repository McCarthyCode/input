import {
  useState,
  type ChangeEventHandler
} from 'react'
import Form from './components/Form'
import FieldList, { type Field } from './components/FieldList'
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

  const fields: Field[] = [
    {
      key: 'button',
      type: 'button',
      labelClassName: 'h-8 sm:text-end text-emerald text-nowrap',
      wrapperClassName: 'sm:text-start',
      children: [<Button key="button" name="button" value="Styled Button" />],
    },
    {
      key: 'checkbox',
      type: 'checkbox',
      labelClassName: 'h-8 sm:text-end text-emerald text-nowrap',
      wrapperClassName: 'flex gap-4 h-8 items-center justify-center mb-8 sm:justify-start sm:m-0 w-full',
      children: [
        <Checkbox key="checkbox1" name="checkbox1" label="Interactive" checked={true} />,
        <Checkbox key="checkbox2" name="checkbox2" label="Checkbox" />,
      ],
    },
    {
      key: 'color',
      type: 'color',
      wrapperClassName: 'flex justify-center mb-8 sm:m-0 sm:justify-start w-full',
      children: [<Color key="color" name="color" value="#007a55" />],
    },
    {
      key: 'date',
      type: 'date',
      wrapperClassName: 'sm:text-start',
      children: [<Date key="date" name="date" />],
    },
    {
      key: 'datetime-local',
      type: 'datetime-local',
      children: [<DatetimeLocal key="datetime-local" name="datetime-local" />],
    },
    {
      key: 'email',
      type: 'email',
      children: [<Email key="email" name="email" placeholder="Email Address" />],
    },
    {
      key: 'file',
      type: 'file',
      children: [<File key="file" name="file" />],
    },
    {
      key: 'month',
      type: 'month',
      children: [<Month key="month" name="month" />],
    },
    {
      key: 'number',
      type: 'number',
      children: [<Number key="number" name="number" placeholder="Number Input" />],
    },
    {
      key: 'password',
      type: 'password',
      children: [<Password key="password" name="password" placeholder="Password Input" />],
    },
    {
      key: 'radio',
      type: 'radio',
      labelClassName: 'h-8 sm:text-end text-emerald text-nowrap',
      wrapperClassName: 'flex gap-4 h-8 items-center justify-center mb-8 sm:justify-start sm:m-0 w-full',
      children: [
        <Radio key="radio1" name="radio" value="radio1" label="Option" checked={radio === 'radio1'} onChange={pickRadio} />,
        <Radio key="radio2" name="radio" value="radio2" label="Radio" checked={radio === 'radio2'} onChange={pickRadio} />,
        <Radio key="radio3" name="radio" value="radio3" label="Option" checked={radio === 'radio3'} onChange={pickRadio} />,
      ],
    },
    {
      key: 'range',
      type: 'range',
      children: [<Range key="range" name="range" />],
    },
    {
      key: 'reset',
      type: 'reset',
      labelClassName: 'h-8 sm:text-end text-emerald text-nowrap',
      wrapperClassName: 'sm:text-start',
      children: [<Reset key="reset" name="reset" value="Clear Input Form" />],
    },
    {
      key: 'search',
      type: 'search',
      children: [<Search key="search" name="search" placeholder="Search" />],
    },
    {
      key: 'submit',
      type: 'submit',
      labelClassName: 'h-8 sm:text-end text-emerald text-nowrap',
      wrapperClassName: 'sm:text-start',
      children: [<Submit key="submit" name="submit" value="Submit" />],
    },
    {
      key: 'text',
      type: 'text',
      children: [<Text key="text" name="text" placeholder="Text Input" />],
    },
    {
      key: 'time',
      type: 'time',
      children: [<Time key="time" name="time" />],
    },
    {
      key: 'url',
      type: 'url',
      children: [<Url key="url" name="url" placeholder="Web Address" />],
    },
    {
      key: 'week',
      type: 'week',
      children: [<Week key="week" name="week" />],
    },
  ]

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
        <Form>
          <FieldList fields={fields} />
        </Form>
      </main >
    </>
  )
}

export default App
