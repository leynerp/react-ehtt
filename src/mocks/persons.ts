import { type Person, Category } from '../types/type.d';

export const listOfPersons: Person [] = [
  {
    id: '60d4dc6c-1a84-4ff1-b484-a5420e233b62',
    name: 'Leyner',
    category: Category.employed,
    happinessLevel: 5,
    company: {
      name: 'Apple',
      logo: 'https://www.apple.com/ac/structured-data/images/open_graph_logo.png'
    }
  },
  {
    id: '623d3e1e-66da-4534-864e-68cdecc07209',
    name: 'Leyner',
    category: Category.manager,
    happinessLevel: 4,
    company: {
      name: 'Google LLC',
      logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
    }
  },
  {
    id: '623d3e1e-66da-4534-864e-68cdecc07210',
    name: 'Carpe',
    category: Category.manager,
    happinessLevel: 4,
    company: {
      name: 'Google LLC',
      logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
    }
  },
  {
    id: '623d3e1e-66da-4534-864e-68cdecc07211',
    name: 'Leste',
    category: Category.manager,
    happinessLevel: 1,
    company: {
      name: 'Google LLC',
      logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
    }
  },
  {
    id: '623d3e1e-66da-4534-864e-68cdecc07212',
    name: 'Juan',
    category: Category.employed,
    happinessLevel: 2,
    company: {
      name: 'Microsoft Corporation',
      logo: 'data:image/png;base64,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'
    }
  }, {
    id: '623d3e1e-66da-4534-864e-68cdecc07213',
    name: 'Alfredo',
    category: Category.manager,
    happinessLevel: 1,
    company: {
      name: 'Amazon',
      logo: 'https://www.amazon.com/favicon.ico'
    }
  }, {
    id: '623d3e1e-66da-4534-864e-68cdecc07214',
    name: 'Roberto',
    category: Category.employed,
    happinessLevel: 5,
    company: {
      name: 'Facebook, Inc',
      logo: 'https://www.facebook.com/images/fb_icon_325x325.png'
    }
  }, {
    id: '623d3e1e-66da-4534-864e-68cdecc07215',
    name: 'Alejandra',
    category: Category.employed,
    happinessLevel: 2,
    company: {
      name: 'Twitter, Inc.',
      logo: 'https://abs.twimg.com/icons/apple-touch-icon-192x192.png'
    }
  },
  {
    id: '623d3e1e-66da-4534-864e-68cdecc07216',
    name: 'Liniet',
    category: Category.employed,
    happinessLevel: 6,
    company: {
      name: 'Netflix, Inc',
      logo: 'https://assets.nflxext.com/us/ffe/siteui/common/icons/nficon2016.ico'
    }
  },
  {
    id: '623d3e1e-66da-4534-864e-68cdecc07217',
    name: 'Armando',
    category: Category.manager,
    happinessLevel: 3,
    company: {
      name: 'Netflix, Inc',
      logo: 'https://assets.nflxext.com/us/ffe/siteui/common/icons/nficon2016.ico'
    }
  },
  {
    id: '623d3e1e-66da-4534-864e-68cdecc07218',
    name: 'josefa',
    category: Category.employed,
    happinessLevel: 10,
    company: {
      name: 'Netflix, Inc',
      logo: 'https://assets.nflxext.com/us/ffe/siteui/common/icons/nficon2016.ico'
    }
  },
  {
    id: '623d3e1e-66da-4534-864e-68cdecc07220',
    name: 'Ramon',
    category: Category.employed,
    happinessLevel: 5,
    company: {
      name: 'Netflix, Inc',
      logo: 'https://assets.nflxext.com/us/ffe/siteui/common/icons/nficon2016.ico'
    }
  },
  {
    id: '623d3e1e-66da-4534-864e-68cdecc07221',
    name: 'Carla',
    category: Category.employed,
    happinessLevel: 9,
    company: {
      name: 'Instagram, LLC',
      logo: 'https://www.instagram.com/static/images/ico/favicon.ico/36b3ee2d91ed.ico'
    }
  },
  {
    id: '623d3e1e-66da-4534-864e-68cdecc07222',
    name: 'Yailen',
    category: Category.manager,
    happinessLevel: 6,
    company: {
      name: 'YouTube, LLC',
      logo: 'https://s.ytimg.com/yts/img/favicon_144-vfliLAfaB.png'
    }
  },
  {
    id: '623d3e1e-66da-4534-864e-68cdecc07223',
    name: 'Roger',
    category: Category.manager,
    happinessLevel: 2,
    company: {
      name: 'YouTube, LLC',
      logo: 'https://s.ytimg.com/yts/img/favicon_144-vfliLAfaB.png'
    }
  },
  {
    id: '623d3e1e-66da-4534-864e-68cdecc07224',
    name: 'Glas',
    category: Category.employed,
    happinessLevel: 8,
    company: {
      name: 'YouTube, LLC',
      logo: 'https://s.ytimg.com/yts/img/favicon_144-vfliLAfaB.png'
    }
  },
  {
    id: '623d3e1e-66da-4534-864e-68cdecc07225',
    name: 'Peter',
    category: Category.manager,
    happinessLevel: 1,
    company: {
      name: 'YouTube, LLC',
      logo: 'https://s.ytimg.com/yts/img/favicon_144-vfliLAfaB.png'
    }
  },
  {
    id: '623d3e1e-66da-4534-864e-68cdecc07226',
    name: 'velas',
    category: Category.manager,
    happinessLevel: 8,
    company: {
      name: 'YouTube, LLC',
      logo: 'https://s.ytimg.com/yts/img/favicon_144-vfliLAfaB.png'
    }
  }
]
