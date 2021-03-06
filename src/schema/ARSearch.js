export default [
  {
    title: "Variant Occurences",
    description: "",
    entries: [
      {
        id: "x.alleles",
        default: '2',
        label: "Allele Number",
        description: "Minimum number of alleles. Valid range 1-4.",
        input: {
          type: "InputInteger",
          props: {
            rlabel: '≥',
            'min-value': '1',
            'max-value': '4',
          },
        },
      },
      {
        id: "v.idsnv",
        default: '1',
        label: "Minimal cases",
        description: "Minimum number of affected samples. Valid range 1-99.",
        input: {
          type: "InputInteger",
          props: {
            rlabel: '≥',
            'min-value': '1',
            'max-value': '99',
          },
        },
      },
      {
        id: "ncontrols",
        default: '15',
        label: "In-house controls",
        description: "Maximum number allowed in in-house controls. Valid range 1-999.",
        input: {
          type: "InputInteger",
          props: {
            rlabel: '≤',
            'min-value': '1',
            'max-value': '999',
          },
        },
      },
      {
        id: "homozygous",
        default: '0',
        label: "Compound heterozygous",
        description: "Shows both homozygous and compound heterozygous variants.",
        input: {
          type: "Toggle",
          props: {
            'true-value': '0',
            'false-value': '1',
          },
        },
      },
      {
        id: "trio",
        default: '0',
        label: "Trio",
        description: "",
        input: {
          type: "Toggle",
          props: {
            'true-value': '1',
            'false-value': '0',
          },
        },
      },
    ]
  },
  {
    title: "gnomAD Counts",
    description: "Allowed occurence in gnomAD dataset.",
    entries: [
      {
        id: "aa_het",
        default: '',
        label: "Africans heterozygous",
        description: "",
        input: {
          type: "InputInteger",
          props: {
            rlabel: '≤',
            'min-value': '1',
            'max-value': '999',
          },
        },
      },
      {
        id: "homalt",
        default: '',
        label: "Alternative Homozygous",
        description: "",
        input: {
          type: "InputInteger",
          props: {
            rlabel: '≤',
            'min-value': '1',
            'max-value': '999',
          },
        },
      },
      {
        id: "het",
        default: '',
        label: "Heterozygous",
        description: "",
        input: {
          type: "InputInteger",
          props: {
            rlabel: '≤',
            'min-value': '1',
            'max-value': '999',
          },
        },
      },
      {
        id: "popmax_af",
        default: '',
        label: "Minor allele frequency",
        description: "Maximum minor allele frequency in all populations.",
        input: {
          type: "InputInteger",
          props: {
            rlabel: '≤ %',
            'min-value': '0',
            'max-value': '100',
          },
        },
      },
    ],
  },
  {
    title: "Quality and Length",
    entries: [
      {
        id: "filter",
        default: 'filtered',
        label: "SNV Calling Filter",
        description: "GATK or SAMTools",
        input: {
          type: "Toggle",
          props: {
            'true-value': 'filtered',
            'false-value': 'all',
          },
        },
      },
      {
        id: "snvqual",
        label: "SNV Quality",
        description: "Minimum quality score. Valid value between 0-255.",
        input: {
          type: "InputInteger",
          props: {
            rlabel: '≥',
            'min-value': '0',
            'max-value': '255',
          },
        },
      },
      {
        id: "gtqual",
        default: '30',
        label: "Genotype Quality",
        description: "Minimum quality score. Valid value between 0-99.",
        input: {
          type: "InputInteger",
          props: {
            rlabel: '≥',
            'min-value': '0',
            'max-value': '99',
          },
        },
      },
      {
        id: "mapqual",
        default: '',
        label: "Mapping Quality",
        description: "Minimum quality score. Valid value between 0-60.",
        input: {
          type: "InputInteger",
          props: {
            rlabel: '≥',
            'min-value': '0',
            'max-value': '60',
          },
        },
      },
      {
        id: "minlength",
        default: '',
        label: "Maximum Variant Length",
        description: "",
        input: {
          type: "InputInteger",
          props: {
            rlabel: '≤',
            'min-value': '0',
            'max-value': '999',
          },
        },
      },
      {
        id: "maxlength",
        default: '',
        label: "Minimum Variant Length",
        description: "",
        input: {
          type: "InputInteger",
          props: {
            rlabel: '≥',
            'min-value': '0',
            'max-value': '999',
          },
        },
      },
    ]
  },
  {
    title: "Variant Type",
    entries: [
      {
        id: "class",
        default: ['snp', 'indel', 'deletion'],
        label: "Classes",
        description: "",
        input: {
          type: "MultiSelect",
          props: {
            options: [
              {value: 'snp', label: 'SNP'},
              {value: 'indel', label: 'InDel'},
              {value: 'deletion', label: 'PInDel'},
              {value: 'cnv', label: 'ExomeDepth'},
            ],
          },
        },
      },
      {
        id: "function",
        default: ['unknown', 'missense', 'nonsense', 'stoploss', 'splice', 'frameshift', 'indel'],
        label: "Functions",
        description: "",
        input: {
          type: "MultiSelect",
          props: {
            options: [
              {value: 'unknown', label: 'Unknown'},
              {value: 'syn', label: 'Syn'},
              {value: 'missense', label: 'Missense'},
              {value: 'nonsense', label: 'Nonsense'},
              {value: 'stoploss', label: 'Stop-Loss'},
              {value: 'splice', label: 'Splice'},
              {value: 'nearsplice', label: 'Near-Splice'},
              {value: 'frameshift', label: 'Frame-Shift'},
              {value: 'indel', label: 'InDel'},
              {value: '5utr', label: '5-UTR'},
              {value: '3utr', label: '3-UTR'},
              {value: 'noncoding', label: 'Non-Coding'},
              {value: 'mirna', label: 'miRNA'},
              {value: 'intronic', label: 'Intronic'},
              {value: 'intergenic', label: 'Intergenic'},
              {value: 'regulation', label: 'Regulation'}
            ]
          }
        }
      }
    ]
  }
]
