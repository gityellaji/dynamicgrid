
const checkParams = config => {
  const DEFAULT_SPACING = 25;
  const booleanProps = ["useTransform", "center"];


  if (!config) {
    throw new Error("No config object has been provided.");
  }

  for(let prop of booleanProps){
    if(typeof config[prop] !== "boolean"){
      config[prop] = true;
    }
  }


  if(typeof config.gutter !== "number"){
    config.gutter = DEFAULT_SPACING;
  }

  if (!config.container) error("container");
  if (!config.items && !config.static) error("items or static");
};


const error = prop => {
  throw new Error(`Missing property '${prop}' in DynamicGrid config`);
};



export {checkParams};