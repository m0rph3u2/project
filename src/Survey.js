import React from "react";

import * as Survey from "survey-react";
import * as widgets from "surveyjs-widgets";
import "survey-react/survey.css";

import "jquery-ui/themes/base/all.css";

import $ from "jquery";
import "jquery-bar-rating";
import "pretty-checkbox/dist/pretty-checkbox.css";

import { json } from "./survey_json.js";

window["$"] = window["jQuery"] = $;

export { MyQuestion } from "./MyQuestion";

Survey.StylesManager.applyTheme("default");

widgets.prettycheckbox(Survey);

function onValueChanged(result) {
    console.log("value changed!");
}

function onComplete(result) {

    // app.post("/addname", (result) => {
    //     var myData = new SurveyData(result);
    //     myData.save()
    //         .then(item => {
    //             result.send("item saved to database");
    //         })
    //         .catch(err => {
    //             result.status(400).send("unable to save to database");
    //         });
    // });

    console.log("Complete! " + result);

}


export function SurveyPage() {
    var model = new Survey.Model(json);
    return (
    <div className="container">
        <h2>Survey</h2>
        <Survey.Survey
            model={model}
            onComplete={onComplete}
            onValueChanged={onValueChanged}
          />
    </div>
    );
  }
  