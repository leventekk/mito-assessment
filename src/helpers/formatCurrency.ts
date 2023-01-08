interface Settings {
  currency?: string
  locale?: string
}

const formatCurrency = (value: number, { locale, currency }: Settings = {}): string =>
  new Intl.NumberFormat(locale ?? 'hu-HU', {
    style: 'currency',
    currency: currency ?? 'HUF',
    maximumFractionDigits: 0
  }).format(value)

export default formatCurrency
