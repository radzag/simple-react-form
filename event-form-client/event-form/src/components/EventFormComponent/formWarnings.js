const warn = values => {
    const warnings = {}
    if (new Date(values.date) < new Date()) {
      warnings.date = 'The date has already passed...'
    }
    return warnings
  }

export default warn;