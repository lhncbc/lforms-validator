/**
 * Created by akanduru on 2/24/16.
 */
module.exports = {
  item: {
    "comment": "*********** header ************************",
    "question": "Section",
    "questionCode": "headerC",
    "dataType": "CNE",
    "header": false,
    "answers": "boolean",
    "codingInstructions": "If you choose yes, this question is used as section header",
    "skipLogic": {
      "conditions": [
        {
          "source": "dummySourceC",
          "trigger": {
            "code": "false"
          }
        }
      ],
      "action": "show"
    },
    "value": {
      "text": "No",
      "code": "false"
    }
  },

  skipLogic: {
    "conditions": [
      {
        "source": "dummySourceC",
        "trigger": {
          "code": "false"
        }
      }
    ],
    "action": "show"
  },

  templateOptions: {
    "obxTableColumns": [
      {
        "name": "Name",
        "displayControl": {
          "colCSS": [{
            "width": "50%",
            "minWidth": "4em"
          }]
        }
      },
      {
        "name": "",
        "displayControl": {
          "colCSS": [{
            "width": "5em",
            "minWidth": "5em"
          }]
        }
      },
      {
        "name": "Value",
        "displayControl": {
          "colCSS": [{
            "width": "50%",
            "minWidth": "4em"
          }]
        }
      }
    ],
    "obrHeader": false,
    "hideHeader": true
  },

  /***form-builder form ***/
  formBuilderForm: {
    "name": "Define Question ",
    "type": "LOINC",
    "code": "form",
    "templateOptions": {
      "obrHeader": false,
      "hideHeader": true
    },
    "items": [
      {
        "questionCode": "question",
        "question": "Text",
        "dataType": "ST",
        "header": false,
        "codingInstructions": "Enter wording for question."
      },
      {
        "questionCode": "codingSystem",
        "question": "Coding System",
        "dataType": "ST",
        "header": false,
        "editable": "0",
        "codingInstructions": "Select \"LOINC\" to use LOINC codes, or create your own coding system by selecting \"Custom.\"",
        "value": "Custom"
      },
      {
        "questionCode": "questionCode",
        "question": "Code",
        "dataType": "ST",
        "header": false,
        "editable": "0",
        "codingInstructions": "Enter a code that matches the coding system you selected; or, create your own unique code."
      },
      {
        "questionCode": "localQuestionCode",
        "question": "Local code",
        "dataType": "ST",
        "header": false,
        "codingInstructions": "Enter a unique code for the question you are creating. Exmples are 1 or A1."
      },
      {
        "questionCode": "codingInstructions",
        "question": "Question instructions",
        "dataType": "ST",
        "header": false,
        "codingInstructions": "Enter any explanatory text needed to help the user answer the question, such as \"Select all that apply\". Instructions will appear before the question."
      },
      {
        "questionCode": "repeatQuestion",
        "question": "Repeat this item?",
        "header": false,
        "codingInstructions": "Choose 'Yes' if this question should be repeated multiple times.",
        "dataType": "CNE",
        "answers": "boolean",
        "value": {
          "text": "No",
          "code": false
        }
      },
      {
        "question": "Section",
        "questionCode": "header",
        "dataType": "CNE",
        "header": false,
        "answers": "boolean",
        "codingInstructions": "If you choose 'Yes', this question is used as section header",
        "skipLogic": {
          "conditions": [
            {
              "source": "codingInstructions",
              "trigger": {
                "code": true
              }
            }
          ],
          "action": "show"
        },
        "value": {
          "text": "No",
          "code": false
        }
      },
      {
        "questionCode": "editable",
        "question": "Editable",
        "dataType": "CNE",
        "header": false,
        "answerCardinality": {
          "min": "0",
          "max": "1"
        },
        "answers": "editable",
        "codingInstructions": "Select one of the options to determine whether user data that is entered for this question can be edited.",
        "skipLogic": {
          "conditions": [
            {
              "source": "header",
              "trigger": {
                "code": false
              }
            }
          ],
          "action": "show"
        },
        "value": {
          "text": "Editable",
          "code": "1"
        }
      },
      {
        "questionCode": "answerRequired",
        "question": "Answer required?",
        "codingInstructions": "Choose 'Yes' to allow selection of multiple answers from the the answer list.",
        "header": false,
        "dataType": "CNE",
        "answers": "boolean",
        "value": {
          "text": "No",
          "code": false
        },
        "skipLogic": {
          "conditions": [
            {
              "source": "header",
              "trigger": {
                "code": false
              }
            }
          ],
          "action": "show"
        }
      },
      {
        "question": "Type",
        "questionCode": "dataType",
        "dataType": "CNE",
        "header": false,
        "answers": "dataType",
        "codingInstructions": "Enter the data type of the answer. Valid data types are:",
        "value": {
          "text": "Text",
          "code": "ST"
        },
        "skipLogic": {
          "conditions": [
            {
              "source": "header",
              "trigger": {
                "code": false
              }
            }
          ],
          "action": "show"
        }
      },
      {
        "questionCode": "answers",
        "question": "Answer item",
        "header": true,
        "codingInstructions": "If using the data type CWE or CNE, enter the answer list here using the format LABEL:CODE:TEXT:FORMAT:OTHER.",
        "questionCardinality": {
          "min": "1",
          "max": "*"
        },
        "skipLogic": {
          "logic": "ANY",
          "conditions": [
            {
              "source": "dataType",
              "trigger": {
                "code": "CNE"
              }
            },
            {
              "source": "dataType",
              "trigger": {
                "code": "CWE"
              }
            }
          ],
          "action": "show"
        },
        "items": [
          {
            "questionCode": "text",
            "question": "Answer text",
            "dataType": "ST",
            "codingInstructions": "Enter the text of the answer here.",
            "header": false
          },
          {
            "questionCode": "code",
            "question": "Answer code",
            "dataType": "ST",
            "answerCardinality": {
              "min": "1",
              "max": "1"
            },
            "codingInstructions": "If desired, enter a default answer code using LOINC or your own coding system.",
            "header": false
          },
          {
            "questionCode": "label",
            "question": "Answer label",
            "dataType": "ST",
            "codingInstructions": "Enter a label such as \"A\" or \"1\" or \"T\" if you wish to assign a label to each answer.",
            "header": false
          },
          {
            "questionCode": "score",
            "question": "Score",
            "dataType": "INT",
            "codingInstructions": "If desired, enter a number to assign a numerical value to this answer for scoring purposes.",
            "header": false
          },
          {
            "questionCode": "other",
            "question": "Specify with free text",
            "dataType": "CNE",
            "answers": "boolean",
            "codingInstructions": "Choose to add additional field for other. Enter the text of an additional question in the Answer text above.",
            "header": false,
            "value": {
              "text": "No",
              "code": false
            }
          }
        ]
      },
      {
        "questionCode": "multipleAnswers",
        "question": "Allow multiple answers?",
        "codingInstructions": "Choose 'Yes' to allow selection of multiple answers from the the answer list.",
        "header": false,
        "dataType": "CNE",
        "answers": "boolean",
        "value": {
          "text": "No",
          "code": false
        },
        "skipLogic": {
          "logic": "ANY",
          "conditions": [
            {
              "source": "dataType",
              "trigger": {
                "code": "CNE"
              }
            },
            {
              "source": "dataType",
              "trigger": {
                "code": "CWE"
              }
            }
          ],
          "action": "show"
        }
      },
      {
        "questionCode": "defaultAnswer",
        "question": "Default answer",
        "dataType": "ST",
        "codingInstructions": "If desired, enter a default answer for the question. If you are using the answer LABEL or CODE fields, enter the default LABEL or CODE.",
        "header": false,
        "skipLogic": {
          "conditions": [
            {
              "source": "header",
              "trigger": {
                "code": false
              }
            }
          ],
          "action": "show"
        },
        "answerCardinality": {
          "min": "0",
          "max": "1"
        }
      },
      {
        "questionCode": "externallyDefined",
        "question": "URL for Externally defined Answer list",
        "dataType": "URL",
        "header": false,
        "codingInstructions": "If using an externally defined list of answers to the question, enter it here.",
        "skipLogic": {
          "logic": "ANY",
          "conditions": [
            {
              "source": "dataType",
              "trigger": {
                "code": "CWE"
              }
            },
            {
              "source": "dataType",
              "trigger": {
                "code": "CNE"
              }
            }
          ],
          "action": "show"
        },
        "answerCardinality": {
          "min": "0",
          "max": "1"
        }
      },
      {
        "questionCode": "units",
        "question": "Units",
        "dataType": "CWE",
        "header": false,
        "answerCardinality": {
          "min": "0",
          "max": "*"
        },
        "codingInstructions": "If using an externally defined list of answers to the question, enter the url here.",
        "skipLogic": {
          "logic": "ANY",
          "conditions": [
            {
              "source": "dataType",
              "trigger": {
                "code": "INT"
              }
            },
            {
              "source": "dataType",
              "trigger": {
                "code": "REAL"
              }
            },
            {
              "source": "dataType",
              "trigger": {
                "code": "RTO"
              }
            }
          ],
          "action": "show"
        },
        "answers": "ucumUnits"
      },
      {
        "questionCode": "formula",
        "question": "Formula",
        "dataType": "CNE",
        "header": false,
        "answers": "formula",
        "codingInstructions": "Select one of the formulas from the list.",
        "skipLogic": {
          "conditions": [
            {
              "source": "header",
              "trigger": {
                "code": false
              }
            }
          ],
          "action": "show"
        },
        "answerCardinality": {
          "min": "0",
          "max": "1"
        }
      },
      {
        "questionCode": "useRestrictions",
        "question": "Add Restrictions",
        "dataType": "CNE",
        "answers": "boolean",
        "header": false,
        "codingInstructions": "Choose to add value restrictions to the input.",
        "value": {
          "text": "No",
          "code": false
        },
        "skipLogic": {
          "conditions": [
            {
              "source": "header",
              "trigger": {
                "code": false
              }
            }
          ],
          "action": "show"
        }
      },
      {
        "questionCode": "restrictions",
        "question": "Restriction",
        "header": true,
        "codingInstructions": "Choose to add restriction to the input of this item.",
        "skipLogic": {
          "action": "show",
          "logic": "ALL",
          "conditions": [
            {
              "source": "useRestrictions",
              "trigger": {
                "code": true
              }
            }
          ]
        },
        "questionCardinality": {
          "min": "1",
          "max": "*"
        },
        "items": [
          {
            "questionCode": "name",
            "question": "Name",
            "dataType": "CNE",
            "answers": "restrictionName",
            "header": false,
            "codingInstructions": "Pick a restriction from the supported list of names"
          },
          {
            "questionCode": "value",
            "question": "Value",
            "dataType": "ST",
            "header": false,
            "codingInstructions": "Enter value for the named restriction"
          }
        ]
      },
      {
        "questionCode": "useSkipLogic",
        "question": "Add conditional show logic?",
        "dataType": "CNE",
        "answers": "boolean",
        "header": false,
        "codingInstructions": "Choose to add show logic to conditionally include this item.",
        "value": {
          "text": "No",
          "code": false
        }
      },
      {
        "questionCode": "skipLogic",
        "question": "Criteria to show this item",
        "header": true,
        "codingInstructions": "Choose to add skip logic to conditionally display this item.",
        "skipLogic": {
          "action": "show",
          "logic": "ALL",
          "conditions": [
            {
              "source": "useSkipLogic",
              "trigger": {
                "code": true
              }
            }
          ]
        },
        "items": [
          {
            "questionCode": "action",
            "question": "Show or hide?",
            "dataType": "CNE",
            "answers": "skipLogicAction",
            "header": false,
            "codingInstructions": "Pick an action to perform if the conditions are satisfied. If the condition is NOT satisfied, opposite action is implied.",
            "skipLogic": {
              "action": "show",
              "logic": "ALL",
              "conditions": [
                {
                  "source": "codingInstructions",
                  "trigger": {
                    "code": true
                  }
                }
              ]
            },
            "value": {
              "text": "Show",
              "code": "show"
            }
          },
          {
            "questionCode": "logic",
            "question": "Show this item when",
            "dataType": "CNE",
            "answers": "skipLogicLogic",
            "header": false,
            "codingInstructions": "Choose how the conditions should satisfy. Choose 'Any' to satisfy any one condition (boolean OR), 'All' to satisfy all conditions (boolean AND).",
            "value": {
              "text": "Any condition is true",
              "code": "ANY"
            }
          },
          {
            "questionCode": "conditions",
            "question": "Condition",
            "header": true,
            "codingInstructions": "Specify conditions",
            "questionCardinality": {
              "min": "1",
              "max": "*"
            },
            "items": [
              {
                "questionCode": "source",
                "question": "Select Source Field",
                "dataType": "CNE",
                "answers": [],
                "header": false,
                "codingInstructions": "Choose a source field to apply a condition."
              },
              {
                "questionCode": "hiddenItemForSourceType",
                "question": "You shouldn't see this",
                "header": false,
                "dataType": "ST",
                "skipLogic": {
                  "conditions": [
                    {
                      "source": "codingInstructions",
                      "trigger": {
                        "code": true
                      }
                    }
                  ],
                  "action": "show"
                },
                "dataControl": [
                  {
                    "source": {
                      "sourceType": "internal",
                      "sourceDataType": "TEXT",
                      "itemCode": "source",
                      "data": "value.dataType"
                    },
                    "onAttribute": "value"
                  }
                ]
              },
              {
                "questionCode": "trigger",
                "question": "Select value to satisfy the condition",
                "header": false,
                "codingInstructions": "Specify a source field value to satisfy the condition.",
                "skipLogic": {
                  "logic": "ANY",
                  "conditions": [
                    {
                      "source": "hiddenItemForSourceType",
                      "trigger": {
                        "value": "BL"
                      }
                    },
                    {
                      "source": "hiddenItemForSourceType",
                      "trigger": {
                        "value": "TM"
                      }
                    },
                    {
                      "source": "hiddenItemForSourceType",
                      "trigger": {
                        "value": "DT"
                      }
                    },
                    {
                      "source": "hiddenItemForSourceType",
                      "trigger": {
                        "value": "DTM"
                      }
                    },
                    {
                      "source": "hiddenItemForSourceType",
                      "trigger": {
                        "value": "EMAIL"
                      }
                    },
                    {
                      "source": "hiddenItemForSourceType",
                      "trigger": {
                        "value": "CNE"
                      }
                    },
                    {
                      "source": "hiddenItemForSourceType",
                      "trigger": {
                        "value": "CWE"
                      }
                    },
                    {
                      "source": "hiddenItemForSourceType",
                      "trigger": {
                        "value": "PHONE"
                      }
                    },
                    {
                      "source": "hiddenItemForSourceType",
                      "trigger": {
                        "value": "RTO"
                      }
                    },
                    {
                      "source": "hiddenItemForSourceType",
                      "trigger": {
                        "value": "ST"
                      }
                    },
                    {
                      "source": "hiddenItemForSourceType",
                      "trigger": {
                        "value": "URL"
                      }
                    },
                    {
                      "source": "hiddenItemForSourceType",
                      "trigger": {
                        "value": "YEAR"
                      }
                    }
                  ],
                  "action": "show"
                },
                "dataControl": [
                  {
                    "source": {
                      "sourceType": "internal",
                      "sourceDataType": "TEXT",
                      "itemCode": "source",
                      "data": "value.dataType"
                    },
                    "onAttribute": "dataType"
                  },
                  {
                    "source": {
                      "sourceType": "internal",
                      "sourceDataType": "TEXT",
                      "itemCode": "source",
                      "data": "value.answers"
                    },
                    "onAttribute": "answers"
                  }
                ]
              },
              {
                "questionCode": "triggerRange",
                "question": "Numerical Range",
                "header": true,
                "codingInstructions": "Specify numerical range to satisfy the condition.",
                "questionCardinality": {
                  "min": "1",
                  "max": "*"
                },
                "skipLogic": {
                  "logic": "ANY",
                  "conditions": [
                    {
                      "source": "hiddenItemForSourceType",
                      "trigger": {
                        "value": "INT"
                      }
                    },
                    {
                      "source": "hiddenItemForSourceType",
                      "trigger": {
                        "value": "REAL"
                      }
                    }
                  ],
                  "action": "show"
                },
                "items": [
                  {
                    "questionCode": "rangeBoundary",
                    "question": "Select conditional operator",
                    "dataType": "CNE",
                    "answers": "numericalRange",
                    "header": false,
                    "codingInstructions": "Choose a conditional operator for this range."
                  },
                  {
                    "questionCode": "rangeValue",
                    "question": "Value for the condition",
                    "dataType": "REAL",
                    "header": false,
                    "codingInstructions": "Specify a value for above conditional operator."
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
};