interface IPropsSwitchInput {
  title: string
  value: boolean
  changeValue: (value: boolean) => void
}

export const SwitchInput = ({ title, value, changeValue }: IPropsSwitchInput) => {
  return (
    <div>
      <label htmlFor={title}>{title}</label>
      <input checked={value} onChange={e => changeValue(e.target.checked)} 
      className="ml-2" type="checkbox" name={title} id={title} />
    </div>
  )
}