import useSimulator from '@hook/useSimulator'

const format = (value: number): string =>
  new Intl.NumberFormat('hu-HU', { style: 'currency', currency: 'HUF' }).format(value)

const Summary = (): React.ReactElement => {
  const {
    state: { moneySpent }
  } = useSimulator()

  return <div>Total money spent to tickets: {format(moneySpent)}</div>
}

export default Summary
