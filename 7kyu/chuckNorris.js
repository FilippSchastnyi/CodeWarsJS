const onePunch = ($) => typeof $ !== 'string' ? 'Broken!' : $.split(' ').sort().join(' ').replace(/[ae]/gi, '') || 'Broken!'
