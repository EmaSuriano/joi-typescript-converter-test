import * as Joi from 'joi';
import * as fs from 'fs';
import 'joi-extract-type';

const saveType = joiObject => {
  type objectType = Joi.extractType<typeof joiObject>;

  const testObject: objectType = 'asdas';

  console.log(testObject);

  fs.writeFile('types.ts', JSON.stringify({ asd: 1 }), err => {
    if (err) throw err;
  });
};

const is_enabled = Joi.boolean();
// is_enabled.
type extractBoolean = Joi.extractType<typeof is_enabled>;
const extractedBoolean: extractBoolean = true;

// const data = {
//   a: 'a',
// };

saveType(is_enabled);

// console.log(typeof extractedBoolean);

const full_name = Joi.string();
type extractString = Joi.extractType<typeof full_name>;
const extractedString: extractString = 'string';

const user = Joi.object({ full_name, is_enabled });
type extractObject = Joi.extractType<typeof user>;
const extractedObject: extractObject = {
  full_name: extractedString,
  is_enabled: extractedBoolean,
};

const roles = Joi.array().items(Joi.string());
type extractArray = Joi.extractType<typeof roles>;
const extractedArray: extractArray = ['admin'];

const apply = Joi.array().items(Joi.object({ id: Joi.string() }));
type extractApply = Joi.extractType<typeof apply>;
const extractedApply: extractApply = [{ id: '3' }, { id: '4' }];

const rule = Joi.object({ apply });
type extractRule = Joi.extractType<typeof rule>;
const extractedRule: extractRule = { apply: extractedApply };

const jobOperatorRoleSchema = Joi.object({
  id: Joi.string().required(),
  user_id: Joi.string().required(),
  job_id: Joi.string().required(),
  role: Joi.string().valid(['recruiter', 'requester']),
  pipeline_rules: Joi.array().items(rule),
});
type extractComplexType = Joi.extractType<typeof jobOperatorRoleSchema>;
const extractedComplexType: extractComplexType = {
  id: '2015',
  user_id: '102',
  role: 'recruiter',
  pipeline_rules: [extractedRule],
};
