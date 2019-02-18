"use strict";
exports.__esModule = true;
var Joi = require("joi");
var fs = require("fs");
require("joi-extract-type");
var saveType = function (joiObject) {
    var testObject = 'asdas';
    console.log(testObject);
    fs.writeFile('types.ts', JSON.stringify({ asd: 1 }), function (err) {
        if (err)
            throw err;
    });
};
var is_enabled = Joi.boolean();
var extractedBoolean = true;
// const data = {
//   a: 'a',
// };
saveType(is_enabled);
// console.log(typeof extractedBoolean);
var full_name = Joi.string();
var extractedString = 'string';
var user = Joi.object({ full_name: full_name, is_enabled: is_enabled });
var extractedObject = {
    full_name: extractedString,
    is_enabled: extractedBoolean
};
var roles = Joi.array().items(Joi.string());
var extractedArray = ['admin'];
var apply = Joi.array().items(Joi.object({ id: Joi.string() }));
var extractedApply = [{ id: '3' }, { id: '4' }];
var rule = Joi.object({ apply: apply });
var extractedRule = { apply: extractedApply };
var jobOperatorRoleSchema = Joi.object({
    id: Joi.string().required(),
    user_id: Joi.string().required(),
    job_id: Joi.string().required(),
    role: Joi.string().valid(['recruiter', 'requester']),
    pipeline_rules: Joi.array().items(rule)
});
var extractedComplexType = {
    id: '2015',
    user_id: '102',
    role: 'recruiter',
    pipeline_rules: [extractedRule]
};
