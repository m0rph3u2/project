export var json = {
    title: "Job application survey",
    showProgressBar: "top",
    pages: [
        {
            elements: [
                {
                    type: "radiogroup",
                    name: "meal",
                    title: "How often do you eat meat and dairy?",
                    isRequired: true,
                    colCount: 0,
                    renderAs: "prettycheckbox",
                    choices: [
                        "1|Daily",
                        "2|1 or 2 times",
                        "3|3+ times per week",
                        "4|Not at all"
                    ]
                }
            ]
        },
        {
            questions: [
                {
                    type: "radiogroup",
                    name: "portion",
                    title: "How big are your portions sizes?",
                    isRequired: true,
                    renderAs: "prettycheckbox",
                    colCount: 0,
                    choices: [
                        "1|Smaller than average",
                        "2|Average",
                        "3|Larger than average",
                        "4|I'm not sure"
                    ]
                }
            ]
        },
        {
            questions: [
                {
                    type: "radiogroup",
                    name: "waste",
                    title: "How much food ends up wasted in your household?",
                    isRequired: true,
                    renderAs: "prettycheckbox",
                    colCount: 0,
                    choices: [
                        "1|None",
                        "2|1-5 plates per week",
                        "3|6-10 plates per week",
                        "4|More than 10 plates per week"
                    ]
                }
            ]
        },
        {
            questions: [
                {
                    type: "radiogroup",
                    name: "fruit",
                    title: "How often do you eat avocados, asparagus, kiwi fruit or pineapples?",
                    isRequired: true,
                    renderAs: "prettycheckbox",
                    colCount: 0,
                    choices: [
                        "1|Daily",
                        "2|1 or 2 times",
                        "3|3+ times per week",
                        "4|Not at all"
                    ]
                }
            ]
        }
    ]
};