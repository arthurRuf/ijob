import {Component, OnInit} from '@angular/core';
import {Field, Sector, ServiceProvider} from "../servers/servers.component";

@Component({
  selector: 'app-customer-search',
  templateUrl: './customer-search.component.html',
  styleUrls: ['./customer-search.component.scss']
})
export class CustomerSearchComponent implements OnInit {

  providerList: ServiceProvider[] = [
    {
      value: 1,
      viewValue: 'José Musterfirma Encanadores',
      viewImage: '../../assets/imgs/default.png',
      sector: {
        value: '1',
        viewValue: 'Mecanico',
        viewImage: '../../assets/imgs/default.png',
      },
      fields: [
        {
          value: '1',
          viewValue: 'Eletrica',
          sector: {
            value: '1',
            viewValue: 'Mecanico',
            viewImage: '../../assets/imgs/default.png',
          }
        },
        {
          value: '2',
          viewValue: 'Inspeçao Automotiva',
          sector: {
            value: '1',
            viewValue: 'Mecanico',
            viewImage: '../../assets/imgs/default.png',
          }
        }
      ],
      classification: 4,
    },
    {
      value: 1,
      viewValue: 'José Musterfirma Encanadores',
      viewImage: '../../assets/imgs/default.png',
      sector: {
        value: '1',
        viewValue: 'Mecanico',
        viewImage: '../../assets/imgs/default.png',
      },
      fields: [
        {
          value: '1',
          viewValue: 'Eletrica',
          sector: {
            value: '1',
            viewValue: 'Mecanico',
            viewImage: '../../assets/imgs/default.png',
          }
        },
        {
          value: '2',
          viewValue: 'Inspeçao Automotiva',
          sector: {
            value: '1',
            viewValue: 'Mecanico',
            viewImage: '../../assets/imgs/default.png',
          }
        }
      ],
      classification: 4,
    },
    {
      value: 1,
      viewValue: 'José Musterfirma Encanadores',
      viewImage: '../../assets/imgs/default.png',
      sector: {
        value: '1',
        viewValue: 'Mecanico',
        viewImage: '../../assets/imgs/default.png',
      },
      fields: [
        {
          value: '1',
          viewValue: 'Eletrica',
          sector: {
            value: '1',
            viewValue: 'Mecanico',
            viewImage: '../../assets/imgs/default.png',
          }
        },
        {
          value: '2',
          viewValue: 'Inspeçao Automotiva',
          sector: {
            value: '1',
            viewValue: 'Mecanico',
            viewImage: '../../assets/imgs/default.png',
          }
        }
      ],
      classification: 4,
    },
    {
      value: 1,
      viewValue: 'José Musterfirma Encanadores',
      viewImage: '../../assets/imgs/default.png',
      sector: {
        value: '1',
        viewValue: 'Mecanico',
        viewImage: '../../assets/imgs/default.png',
      },
      fields: [
        {
          value: '1',
          viewValue: 'Eletrica',
          sector: {
            value: '1',
            viewValue: 'Mecanico',
            viewImage: '../../assets/imgs/default.png',
          }
        },
        {
          value: '2',
          viewValue: 'Inspeçao Automotiva',
          sector: {
            value: '1',
            viewValue: 'Mecanico',
            viewImage: '../../assets/imgs/default.png',
          }
        }
      ],
      classification: 4,
    },
    {
      value: 1,
      viewValue: 'José Musterfirma Encanadores',
      viewImage: '../../assets/imgs/default.png',
      sector: {
        value: '1',
        viewValue: 'Mecanico',
        viewImage: '../../assets/imgs/default.png',
      },
      fields: [
        {
          value: '1',
          viewValue: 'Eletrica',
          sector: {
            value: '1',
            viewValue: 'Mecanico',
            viewImage: '../../assets/imgs/default.png',
          }
        },
        {
          value: '2',
          viewValue: 'Inspeçao Automotiva',
          sector: {
            value: '1',
            viewValue: 'Mecanico',
            viewImage: '../../assets/imgs/default.png',
          }
        }
      ],
      classification: 4,
    },
    {
      value: 1,
      viewValue: 'José Musterfirma Encanadores',
      viewImage: '../../assets/imgs/default.png',
      sector: {
        value: '1',
        viewValue: 'Mecanico',
        viewImage: '../../assets/imgs/default.png',
      },
      fields: [
        {
          value: '1',
          viewValue: 'Eletrica',
          sector: {
            value: '1',
            viewValue: 'Mecanico',
            viewImage: '../../assets/imgs/default.png',
          }
        },
        {
          value: '2',
          viewValue: 'Inspeçao Automotiva',
          sector: {
            value: '1',
            viewValue: 'Mecanico',
            viewImage: '../../assets/imgs/default.png',
          }
        }
      ],
      classification: 4,
    },
    {
      value: 1,
      viewValue: 'José Musterfirma Encanadores',
      viewImage: '../../assets/imgs/default.png',
      sector: {
        value: '1',
        viewValue: 'Mecanico',
        viewImage: '../../assets/imgs/default.png',
      },
      fields: [
        {
          value: '1',
          viewValue: 'Eletrica',
          sector: {
            value: '1',
            viewValue: 'Mecanico',
            viewImage: '../../assets/imgs/default.png',
          }
        },
        {
          value: '2',
          viewValue: 'Inspeçao Automotiva',
          sector: {
            value: '1',
            viewValue: 'Mecanico',
            viewImage: '../../assets/imgs/default.png',
          }
        }
      ],
      classification: 4,
    },
    {
      value: 1,
      viewValue: 'José Musterfirma Encanadores',
      viewImage: '../../assets/imgs/default.png',
      sector: {
        value: '1',
        viewValue: 'Mecanico',
        viewImage: '../../assets/imgs/default.png',
      },
      fields: [
        {
          value: '1',
          viewValue: 'Eletrica',
          sector: {
            value: '1',
            viewValue: 'Mecanico',
            viewImage: '../../assets/imgs/default.png',
          }
        },
        {
          value: '2',
          viewValue: 'Inspeçao Automotiva',
          sector: {
            value: '1',
            viewValue: 'Mecanico',
            viewImage: '../../assets/imgs/default.png',
          }
        }
      ],
      classification: 4,
    },
    {
      value: 1,
      viewValue: 'José Musterfirma Encanadores',
      viewImage: '../../assets/imgs/default.png',
      sector: {
        value: '1',
        viewValue: 'Mecanico',
        viewImage: '../../assets/imgs/default.png',
      },
      fields: [
        {
          value: '1',
          viewValue: 'Eletrica',
          sector: {
            value: '1',
            viewValue: 'Mecanico',
            viewImage: '../../assets/imgs/default.png',
          }
        },
        {
          value: '2',
          viewValue: 'Inspeçao Automotiva',
          sector: {
            value: '1',
            viewValue: 'Mecanico',
            viewImage: '../../assets/imgs/default.png',
          }
        }
      ],
      classification: 4,
    },
    {
      value: 1,
      viewValue: 'José Musterfirma Encanadores',
      viewImage: '../../assets/imgs/default.png',
      sector: {
        value: '1',
        viewValue: 'Mecanico',
        viewImage: '../../assets/imgs/default.png',
      },
      fields: [
        {
          value: '1',
          viewValue: 'Eletrica',
          sector: {
            value: '1',
            viewValue: 'Mecanico',
            viewImage: '../../assets/imgs/default.png',
          }
        },
        {
          value: '2',
          viewValue: 'Inspeçao Automotiva',
          sector: {
            value: '1',
            viewValue: 'Mecanico',
            viewImage: '../../assets/imgs/default.png',
          }
        }
      ],
      classification: 4,
    },
    {
      value: 1,
      viewValue: 'José Musterfirma Encanadores',
      viewImage: '../../assets/imgs/default.png',
      sector: {
        value: '1',
        viewValue: 'Mecanico',
        viewImage: '../../assets/imgs/default.png',
      },
      fields: [
        {
          value: '1',
          viewValue: 'Eletrica',
          sector: {
            value: '1',
            viewValue: 'Mecanico',
            viewImage: '../../assets/imgs/default.png',
          }
        },
        {
          value: '2',
          viewValue: 'Inspeçao Automotiva',
          sector: {
            value: '1',
            viewValue: 'Mecanico',
            viewImage: '../../assets/imgs/default.png',
          }
        }
      ],
      classification: 4,
    },
    {
      value: 1,
      viewValue: 'José Musterfirma Encanadores',
      viewImage: '../../assets/imgs/default.png',
      sector: {
        value: '1',
        viewValue: 'Mecanico',
        viewImage: '../../assets/imgs/default.png',
      },
      fields: [
        {
          value: '1',
          viewValue: 'Eletrica',
          sector: {
            value: '1',
            viewValue: 'Mecanico',
            viewImage: '../../assets/imgs/default.png',
          }
        },
        {
          value: '2',
          viewValue: 'Inspeçao Automotiva',
          sector: {
            value: '1',
            viewValue: 'Mecanico',
            viewImage: '../../assets/imgs/default.png',
          }
        }
      ],
      classification: 4,
    },
    {
      value: 1,
      viewValue: 'José Musterfirma Encanadores',
      viewImage: '../../assets/imgs/default.png',
      sector: {
        value: '1',
        viewValue: 'Mecanico',
        viewImage: '../../assets/imgs/default.png',
      },
      fields: [
        {
          value: '1',
          viewValue: 'Eletrica',
          sector: {
            value: '1',
            viewValue: 'Mecanico',
            viewImage: '../../assets/imgs/default.png',
          }
        },
        {
          value: '2',
          viewValue: 'Inspeçao Automotiva',
          sector: {
            value: '1',
            viewValue: 'Mecanico',
            viewImage: '../../assets/imgs/default.png',
          }
        }
      ],
      classification: 4,
    },
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
